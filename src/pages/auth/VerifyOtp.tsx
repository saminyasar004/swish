import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useVerifyOtpMutation, useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";

type NavState = { email?: string };

export default function VerifyOtp() {
  const length = 4; // adjust if your OTP length differs
  const [otp, setOtp] = useState<string[]>(Array.from({ length }, () => ""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const navigate = useNavigate();
  const { state } = useLocation();
  const email = (state as NavState)?.email ?? "";

  const [verifyOtp, { isLoading: isVerifying }] = useVerifyOtpMutation();
  const [resendOtp, { isLoading: isResending }] = useForgetPasswordMutation();

  // 60s cooldown for resend
  const COOLDOWN = 180;
  const [secondsLeft, setSecondsLeft] = useState<number>(COOLDOWN);

  useEffect(() => {
    inputRefs.current = inputRefs.current.slice(0, length);
  }, [length]);

  useEffect(() => {
    // autostart cooldown
    setSecondsLeft(COOLDOWN);
    const id = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const otpString = useMemo(() => otp.join(""), [otp]);
  const isComplete = otpString.length === length && otp.every((d) => d !== "");

  const handleChange = (index: number, value: string) => {
    // allow only a single digit 0-9
    if (value.length > 1) return;
    if (value !== "" && !/^\d$/.test(value)) return;

    const next = [...otp];
    next[index] = value;
    setOtp(next);

    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[index] === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      } else {
        const next = [...otp];
        next[index] = "";
        setOtp(next);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, length);
    if (!pasted) return;

    const chars = pasted.split("");
    const next = [...otp];
    chars.forEach((c, i) => {
      if (i < length) next[i] = c;
    });
    setOtp(next);

    const nextEmpty = next.findIndex((v) => v === "");
    const focusIndex = nextEmpty === -1 ? length - 1 : nextEmpty;
    inputRefs.current[focusIndex]?.focus();
  };

  const handleFocus = (index: number) => {
    inputRefs.current[index]?.select();
  };

  const onConfirm = async () => {
    if (!email) {
      toast.error("Missing email. Please go back and request a code again.");
      return;
    }
    if (!isComplete) {
      toast.error(`Please enter the ${length}-digit code.`);
      return;
    }

    const toastId = toast.loading("Verifying code...");
    try {
      // Adjust keys to match your backend; common shapes: { email, otp } or { email, code } or { email, pin }
      const res = await verifyOtp({ email, otp: otpString }).unwrap();
      console.log({ res });

      toast.success("Verification successful!", { id: toastId, duration: 1500 });
      // navigate("/reset-password", { state: { email } });
      navigate("/reset-password", { state: { token: res.access } });
    } catch (err: any) {
      console.log({ err });
      const message =
        err?.data?.message || err?.error || "Invalid or expired code. Please try again.";
      toast.error(message, { id: toastId, duration: 2500 });
    }
  };

  const onResend = async () => {
    if (!email) {
      toast.error("Missing email. Please go back and request a code again.");
      return;
    }
    if (secondsLeft > 0) return;

    const toastId = toast.loading("Resending code...");
    try {
      await resendOtp({ email }).unwrap();
      toast.success("A new code has been sent.", { id: toastId, duration: 1500 });
      // reset cooldown
      setSecondsLeft(COOLDOWN);
    } catch (err: any) {
      console.log({ err });
      const message =
        err?.data?.message || err?.error || "Could not resend. Please try again.";
      toast.error(message, { id: toastId, duration: 2500 });
    }
  };

  // Obfuscate email for display
  const displayEmail = useMemo(() => {
    if (!email) return "your email";
    const [name, domain] = email.split("@");
    if (!domain) return email;
    const masked = name.length <= 2 ? name[0] + "*" : name[0] + "*".repeat(Math.max(1, name.length - 2)) + name.at(-1);
    return `${masked}@${domain}`;
  }, [email]);

  return (
    <section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
      <div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
        <div className="w-full flex items-center justify-center pb-6 text-primary">
          <BadgeCheck size={96} />
        </div>

        <h3 className="text-primary font-semibold text-xl md:text-4xl">
          Verify your mail!
        </h3>
        <h6 className="text-xs md:text-sm">
          We’ve sent a verification code to <br />
          <span className="text-primary underline">
            {displayEmail}
          </span>
        </h6>

        <div className="form-group flex gap-4 items-center justify-center py-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              pattern="\d*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              onFocus={() => handleFocus(index)}
              aria-label={`Digit ${index + 1}`}
              className={cn(
                "w-16 h-16 text-center text-xl font-semibold border-2 border-white rounded-lg focus:border-primary outline-none transition-all duration-200 hover:border-primary",
                digit ? "bg-primary text-white" : "bg-white text-black"
              )}
              autoFocus={index === 0}
            />
          ))}
        </div>

        <div className="form-group w-full flex items-center justify-center">
          <Button
            className="w-full"
            size="lg"
            onClick={onConfirm}
            disabled={!isComplete || isVerifying}
          >
            {isVerifying ? "Verifying..." : "Confirm"}
          </Button>
        </div>

        <div className="form-group flex flex-col items-center justify-center py-5 gap-2">
          <p className="text-sm">
            Didn’t receive an email? Check your spam folder.
          </p>
          <Button
            variant="ghost"
            onClick={onResend}
            disabled={secondsLeft > 0 || isResending}
          >
            {isResending
              ? "Resending..."
              : secondsLeft > 0
              ? `Resend code in ${secondsLeft}s`
              : "Resend code"}
          </Button>
        </div>
      </div>
    </section>
  );
}


// import { Button } from "@/components/ui/button";
// import { cn } from "@/lib/utils";
// import { BadgeCheck } from "lucide-react";
// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";

// export default function VerifyOtp() {
// 	const length = 4;
// 	const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
// 	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

// 	useEffect(() => {
// 		inputRefs.current = inputRefs.current.slice(0, length);
// 	}, [length]);

// 	const handleChange = (index: number, value: string) => {
// 		// Only allow single digit
// 		if (value.length > 1) return;

// 		const newOtp = [...otp];
// 		newOtp[index] = value;
// 		setOtp(newOtp);

// 		// Auto-focus next input
// 		if (value !== "" && index < length - 1) {
// 			inputRefs.current[index + 1]?.focus();
// 		}

// 		// Check if OTP is complete
// 		const otpString = newOtp.join("");
// 		if (otpString.length === length) {
// 			// onComplete(otpString);
// 		}
// 	};

// 	const handleKeyDown = (
// 		index: number,
// 		e: React.KeyboardEvent<HTMLInputElement>
// 	) => {
// 		// Handle backspace
// 		if (e.key === "Backspace") {
// 			if (otp[index] === "" && index > 0) {
// 				// Move to previous input if current is empty
// 				inputRefs.current[index - 1]?.focus();
// 			} else {
// 				// Clear current input
// 				const newOtp = [...otp];
// 				newOtp[index] = "";
// 				setOtp(newOtp);
// 			}
// 		}
// 		// Handle arrow keys
// 		else if (e.key === "ArrowLeft" && index > 0) {
// 			inputRefs.current[index - 1]?.focus();
// 		} else if (e.key === "ArrowRight" && index < length - 1) {
// 			inputRefs.current[index + 1]?.focus();
// 		}
// 	};

// 	const handlePaste = (e: React.ClipboardEvent) => {
// 		e.preventDefault();
// 		const pastedData = e.clipboardData.getData("text");
// 		const pastedArray = pastedData.slice(0, length).split("");

// 		// Fill the OTP array with pasted data
// 		const newOtp = [...otp];
// 		pastedArray.forEach((char, index) => {
// 			if (index < length && /^\d$/.test(char)) {
// 				newOtp[index] = char;
// 			}
// 		});

// 		setOtp(newOtp);

// 		// Focus the next empty input or the last input
// 		const nextEmptyIndex = newOtp.findIndex((val) => val === "");
// 		const focusIndex =
// 			nextEmptyIndex === -1
// 				? length - 1
// 				: Math.min(nextEmptyIndex, pastedArray.length);
// 		inputRefs.current[focusIndex]?.focus();

// 		// Check if OTP is complete after paste
// 		const otpString = newOtp.join("");
// 		if (otpString.length === length) {
// 			// onComplete(otpString);
// 		}
// 	};

// 	const handleFocus = (index: number) => {
// 		// Select all text when focused
// 		inputRefs.current[index]?.select();
// 	};

// 	return (
// 		<section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
// 			<div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
// 				<div className="w-full flex items-center justify-center pb-6 text-primary">
// 					<BadgeCheck size={96} />
// 				</div>

// 				<h3 className="text-primary font-semibold text-xl md:text-4xl">
// 					Verify Your Mail!
// 				</h3>
// 				<h6 className="text-xs md:text-sm">
// 					We’ve sent a verification code to <br />
// 					<span className="text-primary underline">
// 						jef@gmail.com
// 					</span>
// 				</h6>

// 				<div className="form-group flex gap-4 items-center justify-center">
// 					{otp.map((digit, index) => (
// 						<input
// 							key={index}
// 							ref={(el) => (inputRefs.current[index] = el)}
// 							type="text"
// 							inputMode="numeric"
// 							pattern="\d*"
// 							maxLength={1}
// 							value={digit}
// 							onChange={(e) =>
// 								handleChange(index, e.target.value)
// 							}
// 							onKeyDown={(e) => handleKeyDown(index, e)}
// 							onPaste={handlePaste}
// 							onFocus={() => handleFocus(index)}
// 							className={cn(
// 								"w-16 h-16 text-center text-xl font-semibold border-2 border-white rounded-lg focus:border-primary outline-none transition-all duration-200 hover:border-primary",
// 								digit
// 									? "bg-primary text-white"
// 									: "bg-white text-black"
// 							)}
// 						/>
// 					))}
// 				</div>

// 				<div className="form-group w-full flex items-center justify-center">
// 					<Link to="/reset-password" className="w-full">
// 						<Button className="w-full" size="lg">
// 							Confirm
// 						</Button>
// 					</Link>
// 				</div>

// 				<div className="form-group flex items-center justify-center py-5">
// 					<p>
// 						Didn"t receive an email? Please check your spam folder
// 						or request another code in{" "}
// 						<span className="text-primary">60 seconds.</span>
// 					</p>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }
