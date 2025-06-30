import MailBox from "@/assets/images/mail-box.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
	return (
		<section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
			<div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
				<div className="w-full flex items-center justify-center pb-6">
					<img src={MailBox} alt="Mail Box" className="max-w-full" />
				</div>

				<h3 className="text-primary font-semibold text-xl md:text-4xl">
					Forgot Your Password
				</h3>
				<h6 className="text-primary text-xs md:text-sm">
					Enter your mail that we provide you a reset PIN
				</h6>

				<div className="form-group w-full flex flex-col gap-3 py-6 md:pb-0 items-start">
					<Label htmlFor="email" className="text-secondary">
						Email
					</Label>
					<Input
						id="email"
						type="email"
						placeholder="someone@example.com"
					/>
				</div>

				<div className="form-group w-full flex items-center justify-center">
					<Link to="/verify-otp" className="w-full">
						<Button className="w-full" size="lg">
							Send OTP
						</Button>
					</Link>
				</div>
			</div>
		</section>
	);
}
