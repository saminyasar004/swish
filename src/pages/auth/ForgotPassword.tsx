import MailBox from "@/assets/images/mail-box.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForgetPasswordMutation } from "@/redux/features/auth/authApi";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TForgetPasswordForm = {
  email: string;
};


export default function ForgotPassword() {
  const navigate = useNavigate();
  const [forgetPassword, { isLoading }] = useForgetPasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    getValues,
  } = useForm<TForgetPasswordForm>({
    mode: "onSubmit",
    defaultValues: { email: "" },
  });

  const onSubmit = async (data: TForgetPasswordForm) => {
    const toastId = toast.loading("Sending OTP...");
    try {
      const res = await forgetPassword(data).unwrap(); // { email }
      console.log({ res });

      toast.success("OTP sent! Check your email.", { id: toastId, duration: 2000 });

      // Pass email to the next screen if needed
      navigate("/verify-otp", { state: { email: getValues("email") } });
    } catch (err: any ) {
      console.log({ err });
      const message =
        err?.data?.error ||
        err?.error ||
        "Could not send OTP. Please try again.";
      toast.error(message, { id: toastId, duration: 2500 });
    }
  };

  return (
    <section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
      <div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
        <div className="w-full flex items-center justify-center pb-6">
          <img src={MailBox} alt="Mail Box" className="max-w-full" />
        </div>

        <h3 className="text-primary font-semibold text-xl md:text-4xl">
          Forgot Your password
        </h3>
        <h6 className="text-primary text-xs md:text-sm">
          Enter your email and we&apos;ll send you a reset PIN
        </h6>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full flex flex-col gap-6 md:pb-0 text-left"
          noValidate
        >
          <div className="form-group w-full flex flex-col gap-2">
            <Label htmlFor="email" className="text-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="someone@example.com"
              autoComplete="email"
              aria-invalid={!!errors.email || undefined}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  // simple RFC5322-ish check
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group w-full flex items-center justify-center">
            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={isLoading || isSubmitting}
            >
              {isLoading || isSubmitting ? "Sending..." : "Send OTP"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
