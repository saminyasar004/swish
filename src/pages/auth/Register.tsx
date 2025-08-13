import LogoWhite from "@/assets/images/logo-white.svg";
import LogoBlack from "@/assets/images/logo-black.svg";
import GoogleLogo from "@/assets/images/google.png";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type TRegisterForm = {
  first_name: string;
  surname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Register() {
  const [phone, setPhone] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registerUser] = useRegisterMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<TRegisterForm>();

  const onSubmit = async (data: TRegisterForm) => {
    if (!phone) {
      toast.error("Phone number is required");
      return;
    }

    if (data.password !== data.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const payload = {
      first_name: data.first_name,
      surname: data.surname,
      role: "private",
      email: data.email,
      password: data.password,
      telephone: phone,
    };

    const toastId = toast.loading("Registering...");

    try {
      const res = await registerUser(payload).unwrap();
      console.log({ res });
      toast.success(res.message || "Registered successfully", {
        id: toastId,
        duration: 2000,
      });
      navigate("/login");
    } catch (err: any) {
      console.log({ err });
      toast.error(err?.data?.email[0] || "Registration failed", {
        id: toastId,
      });
    }
  };

  return (
    <section className="w-full min-h-screen overflow-hidden grid md:grid-cols-3 lg:grid-cols-2">
      <div className="bg-secondary py-4 flex items-center justify-center">
        <Link to="/" className="w-full flex items-center justify-center">
          <img src={LogoWhite} alt="swish.ma" className="w-[70%] lg:w-[40%]" />
        </Link>
      </div>

      <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 bg-liquidGreen p-10">
        <div className="flex flex-col items-center gap-3">
          <Link to="/">
            <img src={LogoBlack} alt="swish.ma" className="max-w-full" />
          </Link>
          <h5 className="text-primary text-xl">Create an account!</h5>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="firstName" className="text-secondary">
              First Name
            </Label>
            <Input
              id="firstName"
              placeholder="John"
              {...register("first_name", {
                required: "First name is required",
              })}
            />
            {errors.first_name && (
              <span className="text-red-500 text-sm">
                {errors.first_name.message}
              </span>
            )}
          </div>

          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="lastName" className="text-secondary">
              Last Name
            </Label>
            <Input
              id="lastName"
              placeholder="Doe"
              {...register("surname", { required: "Last name is required" })}
            />
            {errors.surname && (
              <span className="text-red-500 text-sm">
                {errors.surname.message}
              </span>
            )}
          </div>

          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="email" className="text-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jon.doe@example.com"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="telephone" className="text-secondary">
              Telephone
            </Label>
            <PhoneInput
              country={"ma"}
              value={phone}
              onChange={setPhone}
              placeholder="+ 123 456 7890"
              inputStyle={{
                height: "48px",
                width: "100%",
                borderRadius: "8px",
              }}
            />
          </div>

          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="password" className="text-secondary">
              Password
            </Label>
            <div className="relative w-full">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="@#*%"
                className="pr-16"
                {...register("password", { required: "Password is required" })}
              />
              <Separator
                className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 right-12 -translate-y-1/2"
                orientation="vertical"
              />
              {showPassword ? (
                <EyeOff
                  onClick={() => setShowPassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
                />
              ) : (
                <Eye
                  onClick={() => setShowPassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
                />
              )}
            </div>
            {errors.password && (
              <span className="text-red-500 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>

          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="confirmPassword" className="text-secondary">
              Confirm Password
            </Label>
            <div className="relative w-full">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="@#*%"
                className="pr-16"
                {...register("confirmPassword", {
                  required: "Confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
              />
              <Separator
                className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 right-12 -translate-y-1/2"
                orientation="vertical"
              />
              {showConfirmPassword ? (
                <EyeOff
                  onClick={() => setShowConfirmPassword(false)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
                />
              ) : (
                <Eye
                  onClick={() => setShowConfirmPassword(true)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
                />
              )}
            </div>
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </span>
            )}
          </div>

          <div className="form-group w-full flex items-center justify-center lg:px-10">
            <Button className="w-full" size="lg" type="submit">
              Register
            </Button>
          </div>
        </form>

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

        <div className="form-group flex items-center justify-center">
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-primary font-medium underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

// import LogoWhite from "@/assets/images/logo-white.svg";
// import LogoBlack from "@/assets/images/logo-black.svg";
// import GoogleLogo from "@/assets/images/google.png";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useRegisterMutation } from "@/redux/features/auth/authApi";

// export default function Register() {
//   const [phone, setPhone] = useState("");
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//   const [showConfirmPassword, setShowConfirmPassword] =
//     useState<boolean>(false);

//   const [register] = useRegisterMutation();

//   return (
//     <section className="w-full min-h-screen overflow-hidden grid md:grid-cols-3 lg:grid-cols-2">
//       <div className="bg-secondary py-4 flex items-center justify-center">
//         <Link to="/" className="w-full flex items-center justify-center">
//           <img src={LogoWhite} alt="swish.ma" className="w-[70%] lg:w-[40%]" />
//         </Link>
//       </div>
//       <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 bg-liquidGreen p-10">
//         <div className="flex flex-col items-center gap-3">
//           <Link to="/">
//             <img src={LogoBlack} alt="swish.ma" className="max-w-full" />
//           </Link>
//           <h5 className="text-primary text-xl">Create an account!</h5>
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="firstName" className="text-secondary">
//             First Name
//           </Label>
//           <Input id="firstName" type="name" placeholder="John" />
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="lastName" className="text-secondary">
//             Last Name
//           </Label>
//           <Input id="lastName" type="name" placeholder="Doe" />
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="email" className="text-secondary">
//             Email
//           </Label>
//           <Input id="email" type="email" placeholder="jon.doe@example.com" />
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="telephone" className="text-secondary">
//             Telephone
//           </Label>
//           {/* <Input id="telephone" type="text" placeholder="+123 456 7890" /> */}
//           <PhoneInput
//             country={"ma"}
//             value={phone}
//             onChange={setPhone}
//             placeholder="+ 123 456 7890"
//             inputStyle={{ height: "48px", width: "100%", borderRadius: "8px" }}
//           />
//           {/* {errors.phone && (
//           <span className="text-red-500">{errors.phone.message}</span>
//         )} */}
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="password" className="text-secondary">
//             Password
//           </Label>
//           <div className="w-full flex items-center justify-center relative">
//             <Input
//               id="password"
//               type={showPassword ? "text" : "password"}
//               placeholder="@#*%"
//               className="pr-16"
//             />

//             <Separator
//               className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 -translate-y-1/2 right-12"
//               orientation="vertical"
//             />

//             {showPassword ? (
//               <EyeOff
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
//               />
//             ) : (
//               <Eye
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
//               />
//             )}
//           </div>
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="confirmPassword" className="text-secondary">
//             Confirm Password
//           </Label>
//           <div className="w-full flex items-center justify-center relative">
//             <Input
//               id="confirmPassword"
//               type={showConfirmPassword ? "text" : "password"}
//               placeholder="@#*%"
//               className="pr-16"
//             />

//             <Separator
//               className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 -translate-y-1/2 right-12"
//               orientation="vertical"
//             />

//             {showConfirmPassword ? (
//               <EyeOff
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
//               />
//             ) : (
//               <Eye
//                 onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-primary/50"
//               />
//             )}
//           </div>
//         </div>

//         <div className="form-group w-full flex items-center justify-center lg:px-10">
//           <Button className="w-full" size="lg">
//             Register
//           </Button>
//         </div>

//         <div className="w-full flex items-center justify-center gap-3 lg:px-10">
//           <div className="flex-1 h-0.5 bg-primary"></div>
//           <span className="text-primary font-medium text-lg">OR</span>
//           <div className="flex-1 h-0.5 bg-primary"></div>
//         </div>

//         <div className="form-group w-full flex items-center justify-center lg:px-10">
//           <Button
//             className="w-full flex gap-3 items-center rounded-full"
//             size="lg"
//             variant="transparent"
//           >
//             <img src={GoogleLogo} alt="Google" className="h-5" />
//             Continue with Google
//           </Button>
//         </div>

//         <div className="form-group flex items-center justify-center">
//           <p className="text-center">
//             Already have an account?{" "}
//             <Link to="/login" className="text-primary font-medium underline">
//               Login
//             </Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
