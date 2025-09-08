// import SquaresImg from "@/assets/images/squares.svg";
// import { categories, CategoryProps } from "@/components/common/Header";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import {
//   Select,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Textarea } from "@/components/ui/textarea";
// import { cn } from "@/lib/utils";
// import { CheckIcon, Stepper } from "@mantine/core";
// import {
//   ArrowRight,
//   Check,
//   CheckCircle,
//   Info,
//   MailIcon,
//   Tag,
// } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useForm, Controller } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";

// const countryPhoneCodes = [
//   { code: "+880", country: "Bangladesh" },
//   { code: "+1", country: "United States" },
//   { code: "+44", country: "United Kingdom" },
//   { code: "+91", country: "India" },
//   { code: "+86", country: "China" },
//   { code: "+81", country: "Japan" },
//   { code: "+49", country: "Germany" },
//   { code: "+33", country: "France" },
//   { code: "+39", country: "Italy" },
//   { code: "+34", country: "Spain" },
//   { code: "+7", country: "Russia" },
//   { code: "+55", country: "Brazil" },
//   { code: "+54", country: "Argentina" },
//   { code: "+52", country: "Mexico" },
//   { code: "+351", country: "Portugal" },
//   { code: "+31", country: "Netherlands" },
//   { code: "+46", country: "Sweden" },
//   { code: "+41", country: "Switzerland" },
//   { code: "+43", country: "Austria" },
//   { code: "+32", country: "Belgium" },
//   { code: "+45", country: "Denmark" },
//   { code: "+47", country: "Norway" },
//   { code: "+358", country: "Finland" },
//   { code: "+48", country: "Poland" },
//   { code: "+420", country: "Czech Republic" },
//   { code: "+36", country: "Hungary" },
//   { code: "+40", country: "Romania" },
//   { code: "+90", country: "Turkey" },
//   { code: "+20", country: "Egypt" },
//   { code: "+27", country: "South Africa" },
//   { code: "+61", country: "Australia" },
//   { code: "+64", country: "New Zealand" },
//   { code: "+65", country: "Singapore" },
//   { code: "+66", country: "Thailand" },
//   { code: "+63", country: "Philippines" },
//   { code: "+62", country: "Indonesia" },
//   { code: "+60", country: "Malaysia" },
//   { code: "+82", country: "South Korea" },
//   { code: "+84", country: "Vietnam" },
//   { code: "+98", country: "Iran" },
//   { code: "+92", country: "Pakistan" },
//   { code: "+971", country: "United Arab Emirates" },
//   { code: "+966", country: "Saudi Arabia" },
//   { code: "+93", country: "Afghanistan" },
//   { code: "+94", country: "Sri Lanka" },
//   { code: "+95", country: "Myanmar" },
//   { code: "+977", country: "Nepal" },
//   { code: "+975", country: "Bhutan" },
//   { code: "+673", country: "Brunei" },
//   { code: "+676", country: "Tonga" },
// ];

// // Define the Zod schema
// const schema = z
//   .object({
//     heading: z.string().min(1, "Heading is required"),
//     description: z.string().min(1, "Description is required"),
//     category: z.number().min(1, "Category is required").int(),
//     estimated_time: z.string().min(1, "Estimated time is required"),
//     employee_need: z.number().min(1, "Employee count is required").int(),
//     value: z.number().min(0, "Value is required").int(),
//     email: z
//       .string()
//       .email("Invalid email address")
//       .min(1, "Email is required"),
//     first_name: z.string().min(1, "First name is required"),
//     surname: z.string().min(1, "Surname is required"),
//     telephone_number: z.string().min(1, "Telephone number is required"),
//     mission_address: z.string().min(1, "Mission address is required"),
//     area: z.number().min(1, "Area is required").int(),
//     postal_code: z.string().min(1, "Postal code is required"),
//     through_swish_or_telephone: z.boolean(),
//     site_images: z
//       .array(z.instanceof(File))
//       .min(1, "At least one image is required"),
//   })
//   .required();

// // PostJobForm Type Definition
// type PostJobForm = {
//   heading: string;
//   description: string;
//   category: number;
//   estimated_time: string;
//   employee_need: number;
//   value: number;
//   email: string;
//   first_name: string;
//   surname: string;
//   telephone_number: string;
//   mission_address: string;
//   area: number;
//   postal_code: string;
//   through_swish_or_telephone: boolean;
//   site_images: File[];
// };

// export default function PostJob() {
//   const [selectedCategory, setSelectedCategory] =
//     useState<CategoryProps | null>(null);

//   const {
//     control,
//     handleSubmit,
//     formState: { errors },
//     setValue,
//     watch,
//   } = useForm<PostJobForm>({
//     resolver: zodResolver(schema),
//   });

//   const onSubmit = (data: PostJobForm) => {
//     // handle form submission (send data as FormData or to your API)
//     const formData = new FormData();
//     Object.keys(data).forEach((key) => {
//       if (Array.isArray(data[key])) {
//         data[key].forEach((item) => formData.append(key, item));
//       } else {
//         formData.append(key, data[key]);
//       }
//     });

//     // Now send the formData to your API or server
//     console.log(data);
//   };

//   return (
//     <section className="md:py-16 lg:py-20 bg-liquidGreen">
//       {selectedCategory ? (
//         <div className="container py-6">
//           <PostJobStepper />
//         </div>
//       ) : (
//         <div className="container space-y-8">
//           <div className="max-w-lg mx-auto space-y-4">
//             <h4 className="text-primaryDark text-lg text-center">
//               Select category to post your job -{" "}
//               <span className="font-semibold">Completely free</span>
//             </h4>

//             <div className="relative w-full">
//               <Input
//                 className="w-full pr-12 shadow-md"
//                 placeholder="What do you need to help?"
//               />
//               <div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
//                 <ArrowRight size={18} />
//               </div>
//             </div>
//           </div>

//           <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 items-start justify-start">
//             {categories.map((category, index) => (
//               <div
//                 key={index}
//                 className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-md cursor-pointer hover:bg-primary/10 transition-all duration-300"
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 <img
//                   src={category.img}
//                   alt={category.name}
//                   className="max-w-full pointer-events-none"
//                 />

//                 <p className="font-medium text-sm text-center text-primary pointer-events-none">
//                   {category.name}
//                 </p>
//               </div>
//             ))}
//             <Link to="/categories">
//               <div className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-md hover:underline hover:bg-primary/10 transition-all duration-300">
//                 <img
//                   src={SquaresImg}
//                   alt={"All categories"}
//                   className="max-w-full"
//                 />

//                 <p className="font-medium text-sm text-center text-primary">
//                   All categories
//                 </p>
//               </div>
//             </Link>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }

// function PostJobStepper() {
//   const [active, setActive] = useState(0);

//   const goNext = () => {
//     setActive(active + 1);
//   };

//   const goBack = () => {
//     setActive(active - 1);
//   };

//   return (
//     <Card className="sm:max-w-4xl mx-auto shadow-sm">
//       <CardContent className="md:p-16">
//         <Stepper
//           active={active}
//           color="#57B576"
//           onStepClick={setActive}
//           completedIcon={<CheckIcon size={18} />}
//         >
//           <Stepper.Step icon={<Info size={18} />} label="About the job">
//             <AboutTheJob goNext={goNext} />
//           </Stepper.Step>
//           <Stepper.Step icon={<Tag size={18} />} label="Value">
//             <Value goNext={goNext} />
//           </Stepper.Step>
//           <Stepper.Step icon={<MailIcon size={18} />} label="Contact info">
//             <ContactInfo goNext={goNext} />
//           </Stepper.Step>
//           <Stepper.Step icon={<CheckCircle size={18} />} label="Complete">
//             <Completed />
//           </Stepper.Step>
//         </Stepper>
//       </CardContent>
//     </Card>
//   );
// }

// function AboutTheJob({ goNext }: { goNext: () => void }) {
//   return (
//     <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
//       <h3 className="text-primaryDark font-semibold md:text-2xl">
//         What do you need to help?
//       </h3>

//       <Input className="w-full ring-2 ring-gray-100" placeholder="Heading" />

//       <Textarea
//         rows={5}
//         placeholder="Description"
//         className=" md:w-full ring-2 ring-gray-100"
//       />

//       <Button
//         variant="secondary"
//         className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
//         onClick={goNext}
//       >
//         Next
//       </Button>
//     </div>
//   );
// }

// function Value({ goNext }: { goNext: () => void }) {
//   return (
//     <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
//       <h3 className="text-primaryDark font-semibold md:text-2xl">
//         What do you need to help?
//       </h3>

//       <Input
//         className="  w-full ring-2 ring-gray-100"
//         placeholder="Estimate Time"
//       />

//       <Input
//         type="number"
//         className="w-full ring-2 ring-gray-100"
//         placeholder="Employee Need"
//       />

//       <Input
//         type="number"
//         className="w-full ring-2 ring-gray-100"
//         placeholder="Value"
//       />

//       <Button
//         variant="secondary"
//         className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
//         onClick={goNext}
//       >
//         Next
//       </Button>
//     </div>
//   );
// }

// function ContactInfo({ goNext }: { goNext: () => void }) {
//   const [selectedContactWay, setSelectedContactWay] = useState<
//     "swish" | "email"
//   >("swish");

//   return (
//     <div className="w-full flex flex-col gap-6 items-center justify-center py-8">
//       <h3 className="text-primaryDark font-semibold text-2xl">
//         What do you need to help?
//       </h3>

//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="email"
//         placeholder="Email"
//       />

//       <div className="form-group flex items-start gap-3 w-full">
//         <Select>
//           <SelectTrigger className="w-[100px]">
//             <SelectValue placeholder="+880" />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {countryPhoneCodes.map((country) => (
//                 <SelectItem key={country.code} value={country.code}>
//                   {country.code}
//                 </SelectItem>
//               ))}
//             </SelectGroup>
//           </SelectContent>
//         </Select>

//         <Input
//           type="tel"
//           className="w-full ring-2 ring-gray-100"
//           placeholder="Telephone number"
//         />
//       </div>

//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="name"
//         placeholder="First Name"
//       />

//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="name"
//         placeholder="Surname"
//       />

//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="text"
//         placeholder="Mission Address"
//       />
//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="text"
//         placeholder="Area"
//       />

//       <Input
//         className="w-full ring-2 ring-gray-100"
//         type="number"
//         placeholder="Postal Code"
//       />

//       <div className="form-group w-full flex flex-col gap-4 py-4">
//         <span className="text-primaryDark cursor-pointer text-left text-sm font-medium w-full">
//           How do you want companies to contact you?
//         </span>

//         <div className="w-full border border-slate-300 rounded-md grid grid-cols-2">
//           <div
//             className={cn(
//               "w-full h-full py-2 md:py-5 flex items-center justify-center rounded-md cursor-pointer  md:font-medium",
//               selectedContactWay === "swish"
//                 ? "bg-liquidGreen"
//                 : "bg-white text-slate-300"
//             )}
//             onClick={() => setSelectedContactWay("swish")}
//           >
//             <h5 className=" text-base md:text-md">
//               Through swish or Telephone
//             </h5>
//           </div>

//           <div
//             className={cn(
//               "w-full h-full py-2 md:py-5 flex items-center justify-center rounded-md cursor-pointer font-medium",
//               selectedContactWay === "email"
//                 ? "bg-liquidGreen"
//                 : "bg-white text-slate-300"
//             )}
//             onClick={() => setSelectedContactWay("email")}
//           >
//             <h5>Via Email</h5>
//           </div>
//         </div>
//       </div>

//       <Button
//         variant="secondary"
//         className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
//         onClick={goNext}
//       >
//         Next
//       </Button>
//     </div>
//   );
// }

// function Completed() {
//   return (
//     <>
//       <div className="w-full flex flex-col gap-5 items-center justify-center py-12">
//         <div className="md:w-32 md:h-32 rounded-full flex items-center justify-center bg-primary text-white">
//           <Check size={72} />
//         </div>

//         <h5 className="font-medium md:text-2xl">Your job has been posted</h5>
//       </div>
//       <div className="flex justify-end w-full">
//         <Link to={"/my-post"}>
//           <Button className="justify-end font-semibold h-14 text-lg">
//             See my jobs
//           </Button>
//         </Link>
//       </div>
//     </>
//   );
// }

import SquaresImg from "@/assets/images/squares.svg";
import { categories, CategoryProps } from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckIcon, Stepper } from "@mantine/core";
import {
  ArrowRight,
  Check,
  CheckCircle,
  Info,
  MailIcon,
  Tag,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const countryPhoneCodes = [
  { code: "+880", country: "Bangladesh" },
  { code: "+1", country: "United States" },
  { code: "+44", country: "United Kingdom" },
  { code: "+91", country: "India" },
  { code: "+86", country: "China" },
  { code: "+81", country: "Japan" },
  { code: "+49", country: "Germany" },
  { code: "+33", country: "France" },
  { code: "+39", country: "Italy" },
  { code: "+34", country: "Spain" },
  { code: "+7", country: "Russia" },
  { code: "+55", country: "Brazil" },
  { code: "+54", country: "Argentina" },
  { code: "+52", country: "Mexico" },
  { code: "+351", country: "Portugal" },
  { code: "+31", country: "Netherlands" },
  { code: "+46", country: "Sweden" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+32", country: "Belgium" },
  { code: "+45", country: "Denmark" },
  { code: "+47", country: "Norway" },
  { code: "+358", country: "Finland" },
  { code: "+48", country: "Poland" },
  { code: "+420", country: "Czech Republic" },
  { code: "+36", country: "Hungary" },
  { code: "+40", country: "Romania" },
  { code: "+90", country: "Turkey" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+61", country: "Australia" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+63", country: "Philippines" },
  { code: "+62", country: "Indonesia" },
  { code: "+60", country: "Malaysia" },
  { code: "+82", country: "South Korea" },
  { code: "+84", country: "Vietnam" },
  { code: "+98", country: "Iran" },
  { code: "+92", country: "Pakistan" },
  { code: "+971", country: "United Arab Emirates" },
  { code: "+966", country: "Saudi Arabia" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+977", country: "Nepal" },
  { code: "+975", country: "Bhutan" },
  { code: "+673", country: "Brunei" },
  { code: "+676", country: "Tonga" },
];

// Define the Zod schema
const schema = z
  .object({
    heading: z.string().min(1, "Heading is required"),
    description: z.string().min(1, "Description is required"),
    category: z.number().min(1, "Category is required").int(),
    estimated_time: z.string().min(1, "Estimated time is required"),
    employee_need: z.number().min(1, "Employee count is required").int(),
    value: z.number().min(0, "Value is required").int(),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    first_name: z.string().min(1, "First name is required"),
    surname: z.string().min(1, "Surname is required"),
    telephone_number: z.string().min(1, "Telephone number is required"),
    mission_address: z.string().min(1, "Mission address is required"),
    area: z.number().min(1, "Area is required").int(),
    postal_code: z.string().min(1, "Postal code is required"),
    through_swish_or_telephone: z.boolean(),
    site_images: z
      .array(z.instanceof(File))
      .min(1, "At least one image is required"),
  })
  .required();

// PostJobForm Type Definition
type PostJobForm = {
  heading: string;
  description: string;
  category: number;
  estimated_time: string;
  employee_need: number;
  value: number;
  email: string;
  first_name: string;
  surname: string;
  telephone_number: string;
  mission_address: string;
  area: number;
  postal_code: string;
  through_swish_or_telephone: boolean;
  site_images: File[];
};

export default function PostJob() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null);

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    register,
    trigger,
  } = useForm<PostJobForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit = (data: PostJobForm) => {
    // handle form submission (send data as FormData or to your API)
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      if (Array.isArray(data[key])) {
        data[key].forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, data[key]);
      }
    });

    // Now send the formData to your API or server
    console.log(data);
  };

  return (
    <section className="md:py-16 lg:py-20 bg-liquidGreen">
      {selectedCategory ? (
        <div className="container py-6">
          <PostJobStepper
            register={register}
            errors={errors}
            trigger={trigger}
          />
        </div>
      ) : (
        <div className="container space-y-8">
          <div className="max-w-lg mx-auto space-y-4">
            <h4 className="text-primaryDark text-lg text-center">
              Select category to post your job -{" "}
              <span className="font-semibold">Completely free</span>
            </h4>

            <div className="relative w-full">
              <Input
                className="w-full pr-12 shadow-md"
                placeholder="What do you need to help?"
              />
              <div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 items-start justify-start">
            {categories.map((category, index) => (
              <div
                key={index}
                className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-md cursor-pointer hover:bg-primary/10 transition-all duration-300"
                onClick={() => setSelectedCategory(category)}
              >
                <img
                  src={category.img}
                  alt={category.name}
                  className="max-w-full pointer-events-none"
                />

                <p className="font-medium text-sm text-center text-primary pointer-events-none">
                  {category.name}
                </p>
              </div>
            ))}
            <Link to="/categories">
              <div className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-md hover:underline hover:bg-primary/10 transition-all duration-300">
                <img
                  src={SquaresImg}
                  alt={"All categories"}
                  className="max-w-full"
                />

                <p className="font-medium text-sm text-center text-primary">
                  All categories
                </p>
              </div>
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}

function PostJobStepper({ register, errors, trigger }: any) {
  const [active, setActive] = useState(0);

  const goNext = () => {
    setActive(active + 1);
  };

  const goBack = () => {
    setActive(active - 1);
  };

  return (
    <Card className="sm:max-w-4xl mx-auto shadow-sm">
      <CardContent className="md:p-16">
        <Stepper
          active={active}
          color="#57B576"
          onStepClick={setActive}
          completedIcon={<CheckIcon size={18} />}
        >
          <Stepper.Step icon={<Info size={18} />} label="About the job">
            <AboutTheJob
              goNext={goNext}
              register={register}
              errors={errors}
              trigger={trigger}
            />
          </Stepper.Step>
          <Stepper.Step icon={<Tag size={18} />} label="Value">
            <Value
              goNext={goNext}
              register={register}
              errors={errors}
              trigger={trigger}
            />
          </Stepper.Step>
          <Stepper.Step icon={<MailIcon size={18} />} label="Contact info">
            <ContactInfo
              goNext={goNext}
              register={register}
              errors={errors}
              trigger={trigger}
            />
          </Stepper.Step>
          <Stepper.Step icon={<CheckCircle size={18} />} label="Complete">
            <Completed />
          </Stepper.Step>
        </Stepper>
      </CardContent>
    </Card>
  );
}

function AboutTheJob({ goNext, register, errors, trigger }: any) {
  const handleNext = async () => {
    // validate heading & description
    const isValid = await trigger(["heading", "description"]);
    if (isValid) goNext();
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold md:text-2xl">
        What do you need to help?
      </h3>

      <div className="w-full">
        <Input
          className="w-full ring-2 ring-gray-100 "
          placeholder="Heading"
          {...register("heading")}
        />
        {errors.heading && (
          <span className="text-red-500 text-sm">{errors.heading.message}</span>
        )}
      </div>

      <div className="w-full">
        <Textarea
          rows={5}
          placeholder="Description"
          className=" md:w-full ring-2 ring-gray-100"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>
      <Button
        variant="secondary"
        className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}

function Value({ goNext, register, errors, trigger }: any) {
  const handleNext = async () => {
    // validate only the fields in this step
    const isValid = await trigger(["estimated_time", "employee_need", "value"]);
    if (isValid) goNext();
  };
  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold md:text-2xl">
        What do you need to help?
      </h3>

      <div className="w-full">
        <Input
          className="  w-full ring-2 ring-gray-100"
          placeholder="Estimate Time"
          {...register("estimated_time")}
        />
        {errors.estimated_time && (
          <span className="text-red-500 text-sm">
            {errors.estimated_time.message}
          </span>
        )}
      </div>
      <div className="w-full">
        <Input
          type="number"
          className="w-full ring-2 ring-gray-100"
          {...register("employee_need", { valueAsNumber: true })}
          p
          placeholder="Employee Need"
        />
        {errors.employee_need && (
          <span className="text-red-500 gap-0 text-sm">
            {errors.employee_need.message}
          </span>
        )}
      </div>

      <div className="w-full">
        <Input
          type="number"
          className="w-full ring-2 ring-gray-100"
          placeholder="Value"
          {...register("value", { valueAsNumber: true })}
        />
        {errors.value && (
          <span className="text-red-500 text-sm">{errors.value.message}</span>
        )}
      </div>

      <Button
        variant="secondary"
        className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}

function ContactInfo({ goNext, register, errors, trigger }: any) {
  const [selectedContactWay, setSelectedContactWay] = useState<
    "swish" | "email"
  >("swish");

  const handleNext = async () => {
    // validate only the fields in this step
    const isValid = await trigger([
      "email",
      "telephone_number",
      "first_name",
      "surname",
      "mission_address",
      "area",
      "postal_code",
    ]);
    if (isValid) goNext();
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold text-2xl">
        What do you need to help?
      </h3>

      <div className="w-full">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email.message}</span>
        )}
      </div>

      <div className="form-group flex items-start gap-3 w-full">
        <Select>
          <SelectTrigger className="w-[100px]">
            <SelectValue placeholder="+880" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {countryPhoneCodes.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.code}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <div className="flex-1 flex flex-col">
          <Input
            type="tel"
            className="w-full ring-2 ring-gray-100"
            placeholder="Telephone number"
            {...register("telephone_number")}
          />
          {errors.telephone_number && (
            <span className="text-red-500 text-sm">
              {errors.telephone_number.message}
            </span>
          )}
        </div>
      </div>

      {/* First Name */}
      <div className="w-full flex flex-col">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="text"
          placeholder="First Name"
          {...register("first_name")}
        />
        {errors.first_name && (
          <span className="text-red-500 text-sm">
            {errors.first_name.message}
          </span>
        )}
      </div>

      {/* Surname */}
      <div className="w-full flex flex-col">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="text"
          placeholder="Surname"
          {...register("surname")}
        />
        {errors.surname && (
          <span className="text-red-500 text-sm">{errors.surname.message}</span>
        )}
      </div>

      {/* Mission Address */}
      <div className="w-full flex flex-col">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="text"
          placeholder="Mission Address"
          {...register("mission_address")}
        />
        {errors.mission_address && (
          <span className="text-red-500 text-sm">
            {errors.mission_address.message}
          </span>
        )}
      </div>

      {/* Area */}
      <div className="w-full flex flex-col">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="number"
          placeholder="Area"
          {...register("area", { valueAsNumber: true })}
        />
        {errors.area && (
          <span className="text-red-500 text-sm">{errors.area.message}</span>
        )}
      </div>

      {/* Postal Code */}
      <div className="w-full flex flex-col">
        <Input
          className="w-full ring-2 ring-gray-100"
          type="number"
          placeholder="Postal Code"
          {...register("postal_code")}
        />
        {errors.postal_code && (
          <span className="text-red-500 text-sm">
            {errors.postal_code.message}
          </span>
        )}
      </div>

      {/* Contact Preference */}
      <div className="form-group w-full flex flex-col gap-4 py-4">
        <span className="text-primaryDark cursor-pointer text-left text-sm font-medium w-full">
          How do you want companies to contact you?
        </span>

        <div className="w-full border border-slate-300 rounded-md grid grid-cols-2">
          <div
            className={cn(
              "w-full h-full py-2 md:py-5 flex items-center justify-center rounded-md cursor-pointer md:font-medium",
              selectedContactWay === "swish"
                ? "bg-liquidGreen"
                : "bg-white text-slate-300"
            )}
            onClick={() => setSelectedContactWay("swish")}
          >
            <h5 className="text-base md:text-md">Through swish or Telephone</h5>
          </div>

          <div
            className={cn(
              "w-full h-full py-2 md:py-5 flex items-center justify-center rounded-md cursor-pointer font-medium",
              selectedContactWay === "email"
                ? "bg-liquidGreen"
                : "bg-white text-slate-300"
            )}
            onClick={() => setSelectedContactWay("email")}
          >
            <h5>Via Email</h5>
          </div>
        </div>
      </div>

      <Button
        variant="secondary"
        className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
        onClick={handleNext}
      >
        Next
      </Button>
    </div>
  );
}

function Completed() {
  return (
    <>
      <div className="w-full flex flex-col gap-5 items-center justify-center py-12">
        <div className="md:w-32 md:h-32 rounded-full flex items-center justify-center bg-primary text-white">
          <Check size={72} />
        </div>

        <h5 className="font-medium md:text-2xl">Your job has been posted</h5>
      </div>
      <div className="flex justify-end w-full">
        <Link to={"/my-post"}>
          <Button className="justify-end font-semibold h-14 text-lg">
            See my jobs
          </Button>
        </Link>
      </div>
    </>
  );
}
