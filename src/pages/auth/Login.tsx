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
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { setUser, TUser } from "@/redux/features/auth/authSlice";

type TLoginForm = {
  email: string;
  password: string;
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginForm>();

  const onSubmit = async (data: TLoginForm) => {
    const toastId = toast.loading("Logging in...");

    try {
      const res = await login(data).unwrap();
      console.log({res})

      const user = verifyToken(res.access) as TUser;
      dispatch(setUser({ user, token: res.access }));

      toast.success("Logged in", { id: toastId, duration: 2000 });

      navigate("/");
    } catch (err) {
      console.log({ err });
      toast.error("Invalid credentials", { id: toastId, duration: 2000 });
    }
  };

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
          <h5 className="text-primary text-xl">Welcome back!</h5>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
          <div className="form-group flex flex-col gap-3 lg:px-10">
            <Label htmlFor="email" className="text-secondary">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="jon.doe@example.com"
              {...register("email", { required: "Email is required" })}
              defaultValue="work.mohammadarif@gmail.com"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
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
                {...register("password", { required: "Password is required" })}
                defaultValue="223456"
              />

              <Separator
                className="bg-primary/50 w-0.5 h-[70%] absolute top-1/2 -translate-y-1/2 right-12"
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

          <div className="form-group w-full flex items-end justify-end lg:px-10">
            <Link
              to="/forgot-password"
              className="underline text-primary font-medium"
            >
              Forgot Password?
            </Link>
          </div>

          <div className="form-group w-full flex items-center justify-center lg:px-10">
            <Button className="w-full" size="lg" type="submit">
              Log In
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
            type="button"
          >
            <img src={GoogleLogo} alt="Google" className="h-5" />
            Continue with Google
          </Button>
        </div>

        <div className="py-5 form-group flex items-center justify-center">
          <p className="text-center">
            Don&apos;t have an account?{" "}
            <Link to="/register" className="text-primary font-medium underline">
              Register
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
// import { Link, useNavigate } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react";
// import { Separator } from "@/components/ui/separator";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { useAppDispatch } from "@/redux/hooks";
// import { useLoginMutation } from "@/redux/features/auth/authApi";
// import { FieldValues } from "react-hook-form";
// import { toast } from "sonner";
// import { verifyToken } from "@/utils/verifyToken";
// import { setUser, TUser } from "@/redux/features/auth/authSlice";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState<boolean>(false);
//     const navigate = useNavigate();
//   const dispatch = useAppDispatch();

//    const [login] = useLoginMutation();

//   const onSubmit = async (data: FieldValues) => {
//     console.log(data);
//     const toastId = toast.loading('Logging in');

//     try {

//       const res = await login(data).unwrap();

//       const user = verifyToken(res.data.accessToken) as TUser;
//       dispatch(setUser({ user: user, token: res.data.accessToken }));
//       toast.success('Logged in', { id: toastId, duration: 2000 });

//       // if (res.data.needsPasswordChange) {
//       //   navigate(`/change-password`);
//       // } else {
//       //   navigate(`/${user.role}/dashboard`);
//       // }
//       navigate('/');
//     } catch (err) {
//       toast.error('Something went wrong', { id: toastId, duration: 2000 });
//     }
//   };

//   return (
//     <section className="w-full min-h-screen overflow-hidden grid md:grid-cols-3 lg:grid-cols-2">
//       <div className="bg-secondary flex items-center justify-center">
//         <Link to="/" className="w-full flex items-center justify-center">
//           <img src={LogoWhite} alt="swish.ma" className="w-[70%] lg:w-[40%]" />
//         </Link>
//       </div>

//       <div className="flex flex-col gap-5 md:col-span-2 lg:col-span-1 bg-liquidGreen p-10">
//         <div className="flex flex-col items-center gap-3">
//           <Link to="/">
//             <img src={LogoBlack} alt="swish.ma" className="max-w-full" />
//           </Link>
//           <h5 className="text-primary text-xl">Welcome Back!</h5>
//         </div>

//         <div className="form-group flex flex-col gap-3 lg:px-10">
//           <Label htmlFor="email" className="text-secondary">
//             Email
//           </Label>
//           <Input id="email" type="email" defaultValue={"arnob0188@gmail.com"} placeholder="jon.doe@example.com" />
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
//               defaultValue={"X1a0Ma1n"}
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

//         <div className="form-group w-full flex items-end justify-end lg:px-10">
//           <Link
//             to="/forgot-password"
//             className="underline text-primary font-medium"
//           >
//             Forgot Password?
//           </Link>
//         </div>

//         <div className="form-group w-full flex items-center justify-center lg:px-10">
//           <Button className="w-full" size="lg">
//             Log In
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

//         <div className="py-5 form-group flex items-center justify-center">
//           <p className="text-center">
//             Don"t have an account?{" "}
//             <Link to="/register" className="text-primary font-medium underline">
//               Register
//             </Link>
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// }
