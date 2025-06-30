import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BadgeCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

export default function VerifyOtp() {
	const length = 4;
	const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
	const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

	useEffect(() => {
		inputRefs.current = inputRefs.current.slice(0, length);
	}, [length]);

	const handleChange = (index: number, value: string) => {
		// Only allow single digit
		if (value.length > 1) return;

		const newOtp = [...otp];
		newOtp[index] = value;
		setOtp(newOtp);

		// Auto-focus next input
		if (value !== "" && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}

		// Check if OTP is complete
		const otpString = newOtp.join("");
		if (otpString.length === length) {
			// onComplete(otpString);
		}
	};

	const handleKeyDown = (
		index: number,
		e: React.KeyboardEvent<HTMLInputElement>
	) => {
		// Handle backspace
		if (e.key === "Backspace") {
			if (otp[index] === "" && index > 0) {
				// Move to previous input if current is empty
				inputRefs.current[index - 1]?.focus();
			} else {
				// Clear current input
				const newOtp = [...otp];
				newOtp[index] = "";
				setOtp(newOtp);
			}
		}
		// Handle arrow keys
		else if (e.key === "ArrowLeft" && index > 0) {
			inputRefs.current[index - 1]?.focus();
		} else if (e.key === "ArrowRight" && index < length - 1) {
			inputRefs.current[index + 1]?.focus();
		}
	};

	const handlePaste = (e: React.ClipboardEvent) => {
		e.preventDefault();
		const pastedData = e.clipboardData.getData("text");
		const pastedArray = pastedData.slice(0, length).split("");

		// Fill the OTP array with pasted data
		const newOtp = [...otp];
		pastedArray.forEach((char, index) => {
			if (index < length && /^\d$/.test(char)) {
				newOtp[index] = char;
			}
		});

		setOtp(newOtp);

		// Focus the next empty input or the last input
		const nextEmptyIndex = newOtp.findIndex((val) => val === "");
		const focusIndex =
			nextEmptyIndex === -1
				? length - 1
				: Math.min(nextEmptyIndex, pastedArray.length);
		inputRefs.current[focusIndex]?.focus();

		// Check if OTP is complete after paste
		const otpString = newOtp.join("");
		if (otpString.length === length) {
			// onComplete(otpString);
		}
	};

	const handleFocus = (index: number) => {
		// Select all text when focused
		inputRefs.current[index]?.select();
	};

	return (
		<section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
			<div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
				<div className="w-full flex items-center justify-center pb-6 text-primary">
					<BadgeCheck size={96} />
				</div>

				<h3 className="text-primary font-semibold text-xl md:text-4xl">
					Verify Your Mail!
				</h3>
				<h6 className="text-xs md:text-sm">
					We’ve sent a verification code to <br />
					<span className="text-primary underline">
						jef@gmail.com
					</span>
				</h6>

				<div className="form-group flex gap-4 items-center justify-center">
					{otp.map((digit, index) => (
						<input
							key={index}
							ref={(el) => (inputRefs.current[index] = el)}
							type="text"
							inputMode="numeric"
							pattern="\d*"
							maxLength={1}
							value={digit}
							onChange={(e) =>
								handleChange(index, e.target.value)
							}
							onKeyDown={(e) => handleKeyDown(index, e)}
							onPaste={handlePaste}
							onFocus={() => handleFocus(index)}
							className={cn(
								"w-16 h-16 text-center text-xl font-semibold border-2 border-white rounded-lg focus:border-primary outline-none transition-all duration-200 hover:border-primary",
								digit
									? "bg-primary text-white"
									: "bg-white text-black"
							)}
						/>
					))}
				</div>

				<div className="form-group w-full flex items-center justify-center">
					<Link to="/reset-password" className="w-full">
						<Button className="w-full" size="lg">
							Confirm
						</Button>
					</Link>
				</div>

				<div className="form-group flex items-center justify-center py-5">
					<p>
						Didn"t receive an email? Please check your spam folder
						or request another code in{" "}
						<span className="text-primary">60 seconds.</span>
					</p>
				</div>
			</div>
		</section>
	);
}
