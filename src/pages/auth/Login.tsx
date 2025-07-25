import LogoWhite from "@/assets/images/logo-white.svg";
import LogoBlack from "@/assets/images/logo-black.svg";
import GoogleLogo from "@/assets/images/google.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <section className="w-full min-h-screen overflow-hidden grid md:grid-cols-3 lg:grid-cols-2">
      <div className="bg-secondary flex items-center justify-center">
        <Link to="/" className="w-full flex items-center justify-center">
          <img src={LogoWhite} alt="swish.ma" className="w-[70%] lg:w-[40%]" />
        </Link>
      </div>

      <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 bg-liquidGreen p-10">
        <div className="flex flex-col items-center gap-3">
          <Link to="/">
            <img src={LogoBlack} alt="swish.ma" className="max-w-full" />
          </Link>
          <h5 className="text-primary text-xl">Welcome Back!</h5>
        </div>

        <div className="form-group flex flex-col gap-3 lg:px-10">
          <Label htmlFor="email" className="text-secondary">
            Email
          </Label>
          <Input id="email" type="email" placeholder="jon.doe@example.com" />
        </div>

        <div className="form-group flex flex-col gap-3 lg:px-10">
          <Label htmlFor="password" className="text-secondary">
            Password
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

        <div className="form-group w-full flex items-end justify-end lg:px-10">
          <Link
            to="/forgot-password"
            className="underline text-primary font-medium"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="form-group w-full flex items-center justify-center lg:px-10">
          <Button className="w-full" size="lg">
            Log In
          </Button>
        </div>

        <div className="w-full flex items-center justify-center gap-3 lg:px-10">
          <div className="flex-1 h-0.5 bg-primary"></div>
          <span className="text-primary font-medium text-lg">OR</span>
          <div className="flex-1 h-0.5 bg-primary"></div>
        </div>

        <div className="form-group w-full flex items-center justify-center lg:px-10">
          <Button
            className="w-full flex gap-3 items-center rounded-full"
            size="lg"
            variant="transparent"
          >
            <img src={GoogleLogo} alt="Google" className="h-5" />
            Continue with Google
          </Button>
        </div>

        <div className="py-5 form-group flex items-center justify-center">
          <p className="text-center">
            Don"t have an account?{" "}
            <Link to="/register" className="text-primary font-medium underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
