import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ResetPassword() {
	const [showPassword, setShowPassword] = useState<boolean>(false);
	const [showConfirmPassword, setShowConfirmPassword] =
		useState<boolean>(false);

	return (
		<section className="w-full min-h-screen overflow-hidden flex items-center justify-center bg-liquidGreen">
			<div className="container max-w-2xl flex flex-col gap-1 md:gap-4 items-center justify-center text-center">
				<div className="w-full flex items-center justify-center pb-6 text-primary">
					<ShieldCheck size={96} />
				</div>

				<h3 className="text-primary font-semibold text-xl md:text-4xl">
					Hello Ali!
				</h3>
				<h6 className="text-xs md:text-sm">Welcome Back!</h6>

				<div className="form-group items-start w-full flex flex-col gap-3">
					<Label htmlFor="password" className="text-secondary">
						Enter New Password
					</Label>
					<div className="w-full flex items-center justify-center relative">
						<Input
							id="password"
							type={showPassword ? "text" : "password"}
							placeholder="@#*%"
							className="pr-16"
						/>

						<Separator
							className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 -translate-y-1/2 right-12"
							orientation="vertical"
						/>

						{showPassword ? (
							<EyeOff
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
							/>
						) : (
							<Eye
								onClick={() => setShowPassword(!showPassword)}
								className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
							/>
						)}
					</div>
				</div>

				<div className="form-group items-start w-full flex flex-col gap-3">
					<Label htmlFor="confirmPassword" className="text-secondary">
						Confirm Password
					</Label>
					<div className="w-full flex items-center justify-center relative">
						<Input
							id="confirmPassword"
							type={showConfirmPassword ? "text" : "password"}
							placeholder="@#*%"
							className="pr-16"
						/>

						<Separator
							className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 -translate-y-1/2 right-12"
							orientation="vertical"
						/>

						{showConfirmPassword ? (
							<EyeOff
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
							/>
						) : (
							<Eye
								onClick={() =>
									setShowConfirmPassword(!showConfirmPassword)
								}
								className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
							/>
						)}
					</div>
				</div>

				<div className="form-group w-full flex items-start gap-3">
					<Checkbox id="rememberMe" />
					<Label htmlFor="rememberMe">Remember me</Label>
				</div>

				<div className="form-group w-full flex items-center justify-center">
					<Button className="w-full" size="lg">
						Done
					</Button>
				</div>
			</div>
		</section>
	);
}
