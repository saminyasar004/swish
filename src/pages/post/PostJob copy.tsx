import SquaresImg from "@/assets/images/squares.svg";
import { categories, CategoryProps } from "@/components/common/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Added for a11y
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { CheckIcon, Stepper } from "@mantine/core";
import {
  ArrowRight,
  Check,
  CheckCircle,
  ImageIcon, // Added for images step icon
  Info,
  MailIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller, UseFormReturn } from "react-hook-form"; // Updated import
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import PhoneInput from "react-phone-input-2";

// ... (countryPhoneCodes array unchanged)
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

// Updated Zod schema (removed estimated_time, employee_need, value; added phone_code)
const schema = z
  .object({
    heading: z.string().min(1, "Heading is required"),
    description: z.string().min(1, "Description is required"),
    category: z.number().min(1, "Category is required").int(),
    email: z
      .string()
      .email("Invalid email address")
      .min(1, "Email is required"),
    first_name: z.string().min(1, "First name is required"),
    surname: z.string().min(1, "Surname is required"),
    phone: z
      .string()
      .min(1, "Phone number is required")
      .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number"), // Basic phone validation
    mission_address: z.string().min(1, "Mission address is required"),
    area: z.string().min(3, "Area is required"),
    postal_code: z.number().min(1, "Postal code is required"),
    through_swish_or_telephone: z.boolean().default(true),
    site_images: z
      .array(z.instanceof(File))
      .min(1, "At least one image is required")
      .refine(
        (files) => files.every((file) => file.size <= 10 * 1024 * 1024),
        "Each image must be under 10 MB"
      )
      .refine(
        (files) => files.every((file) => file.type.startsWith("image/")),
        "Only image files are allowed"
      ),
  })
  .required();

type PostJobForm = z.infer<typeof schema>; // Updated type

export default function PostJob() {
  const [selectedCategory, setSelectedCategory] =
    useState<CategoryProps | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const form = useForm<PostJobForm>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: {
      through_swish_or_telephone: true,
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    register,
    trigger,
  } = form;

  const onSubmit = (data: PostJobForm) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => formData.append(key, item));
      } else {
        formData.append(key, value.toString());
      }
    });
    try {
      // Simulate API call
      console.log([...formData.entries()]);
      toast.success("Job posted successfully!");
    } catch (error) {
      toast.error("Failed to post job");
    }
  };

  const handleCategorySelect = (category: CategoryProps) => {
    setSelectedCategory(category);
    setValue("category", category.id);
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="md:py-16 lg:py-20 bg-liquidGreen">
      {selectedCategory ? (
        <div className="container py-6">
          <form onSubmit={handleSubmit(onSubmit)}>
            <PostJobStepper form={form} onSubmit={handleSubmit(onSubmit)} />
          </form>
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
                placeholder="What do you need help with?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="cursor-pointer w-max p-1 bg-primary rounded-full flex item-center justify-center text-white absolute top-1/2 right-3 -translate-y-1/2">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-6 items-start justify-start">
            {filteredCategories.map((category, index) => (
              <div
                key={index}
                role="button"
                tabIndex={0}
                onKeyDown={(e) =>
                  e.key === "Enter" && handleCategorySelect(category)
                }
                className="w-full h-full flex flex-col gap-4 items-center justify-center p-8 bg-white rounded-md cursor-pointer hover:bg-primary/10 transition-all duration-300"
                onClick={() => handleCategorySelect(category)}
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
                  alt="All categories"
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

// Updated props to receive entire form
function PostJobStepper({
  form,
  onSubmit,
}: {
  form: UseFormReturn<PostJobForm>;
  onSubmit: (data: PostJobForm) => void;
}) {
  const { trigger } = form;
  const [active, setActive] = useState(0);

  const goNext = () => setActive(active + 1);
  const goBack = () => setActive(active - 1);

  return (
    <Card className="sm:max-w-4xl mx-auto shadow-sm">
      <CardContent className="md:p-16">
        <Stepper
          active={active}
          color="#57B576"
          onStepClick={async (step) => {
            if (step <= active) return setActive(step); // Allow going back
            const fields =
              step === 1
                ? ["heading", "description"]
                : step === 2
                ? ["site_images"]
                : [
                    "email",
                    "phone",
                    "first_name",
                    "surname",
                    "mission_address",
                    "area",
                    "postal_code",
                  ];
            const isValid = await trigger(fields as (keyof PostJobForm)[]);
            if (isValid) setActive(step);
          }}
          completedIcon={<CheckIcon size={18} />}
        >
          <Stepper.Step icon={<Info size={18} />} label="About the job">
            <AboutTheJob goNext={goNext} form={form} />
          </Stepper.Step>
          <Stepper.Step icon={<ImageIcon size={18} />} label="Images">
            <Images goNext={goNext} form={form} goBack={goBack} />
          </Stepper.Step>
          <Stepper.Step icon={<MailIcon size={18} />} label="Contact info">
            <ContactInfo
              goNext={goNext}
              form={form}
              goBack={goBack}
              onSubmit={onSubmit}
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

// Updated to receive form; fixed heading; added back button example (pass goBack if needed)
function AboutTheJob({
  goNext,
  form,
}: {
  goNext: () => void;
  form: UseFormReturn<PostJobForm>;
}) {
  const {
    register,
    formState: { errors },
    trigger,
  } = form;

  const handleNext = async () => {
    const isValid = await trigger(["heading", "description"]);
    if (isValid) goNext();
  };

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold md:text-2xl">
        What do you need help with?
      </h3>

      <div className="w-full flex flex-col">
        <Label htmlFor="heading">Heading</Label>
        <Input
          id="heading"
          className="w-full ring-2 ring-gray-100"
          placeholder="Heading"
          {...register("heading")}
        />
        {errors.heading && (
          <span className="text-red-500 text-sm">{errors.heading.message}</span>
        )}
      </div>

      <div className="w-full flex flex-col">
        <Label htmlFor="description">Description</Label>
        <Textarea
          id="description"
          rows={5}
          placeholder="Description"
          className="md:w-full ring-2 ring-gray-100"
          {...register("description")}
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      <div className="w-full flex gap-4">
        <Button
          variant="secondary"
          className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// New Images component (replaces Value); handles upload and preview
function Images({
  goNext,
  goBack,
  form,
}: {
  goNext: () => void;
  goBack?: () => void;
  form: UseFormReturn<PostJobForm>;
}) {
  const {
    formState: { errors },
    trigger,
    control,
    watch,
    setValue,
  } = form;

  // Watch current files
  const siteImages = watch("site_images") || [];

  // Create preview URLs; memoized to avoid re-creating
  const previews = useMemo(() => {
    if (!siteImages || !Array.isArray(siteImages)) return [];
    return siteImages.map((file) => URL.createObjectURL(file));
  }, [siteImages]);

  // Revoke URLs on unmount
  useEffect(() => {
    return () => previews.forEach(URL.revokeObjectURL);
  }, [previews]);

  const handleNext = async () => {
    const isValid = await trigger(["site_images"]);
    if (isValid) goNext();
  };

  return (
    <div className="w-full flex flex-col gap-8 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold md:text-2xl">
        Upload Site Images
      </h3>

      <div className="w-full flex flex-col">
        <Label htmlFor="site_images">Site Images (at least one required)</Label>
        <Controller
          name="site_images"
          control={control}
          render={({ field }) => (
            <Input
              id="site_images"
              type="file"
              multiple
              accept="image/*"
              className="w-full ring-2 ring-gray-100"
              onChange={(e) => {
                const newFiles = e.target.files
                  ? Array.from(e.target.files)
                  : [];
                // Merge new files with existing ones
                const updatedFiles = [...siteImages, ...newFiles];
                field.onChange(updatedFiles);
                // Reset input value to allow re-selecting the same file
                e.target.value = "";
              }}
            />
          )}
        />
        {errors.site_images && (
          <span className="text-red-500 text-sm">
            {errors.site_images.message as string}
          </span>
        )}
      </div>

      {previews.length > 0 && (
        <div className="w-full grid grid-cols-3 gap-4">
          {previews.map((url, index) => (
            <div key={index} className="relative">
              <img
                src={url}
                alt={`Preview ${index + 1}`}
                className="w-full h-32 object-cover rounded-md"
              />
              <Button
                variant="destructive"
                size="sm"
                className="absolute top-1 right-1"
                onClick={() => {
                  // Remove the image at this index
                  const updatedFiles = siteImages.filter((_, i) => i !== index);
                  setValue("site_images", updatedFiles);
                }}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      )}

      <div className="w-full flex gap-4">
        {goBack && (
          <Button
            variant="outline"
            className="w-full font-semibold h-14 text-lg"
            onClick={goBack}
          >
            Back
          </Button>
        )}
        <Button
          variant="secondary"
          className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

// Updated; fixed heading, bound phone_code with Controller, bound through_swish_or_telephone with setValue
function ContactInfo({
  goNext,
  form,
  goBack,
  onSubmit,
}: {
  goNext: () => void;
  form: UseFormReturn<PostJobForm>;
  goBack?: () => void;
  onSubmit: (data: PostJobForm) => void;
}) {
  const {
    register,
    formState: { errors },
    trigger,
    control,
    setValue,
    handleSubmit,
  } = form;
  const [selectedContactWay, setSelectedContactWay] = useState<
    "swish" | "email"
  >("swish");

  // Bind toggle to form field
  useEffect(() => {
    setValue("through_swish_or_telephone", selectedContactWay === "swish");
  }, [selectedContactWay, setValue]);

  const handleNext = async () => {
    const isValid = await trigger([
      "email",
      "phone",
      "first_name",
      "surname",
      "mission_address",
      "area",
      "postal_code",
    ]);
    if (isValid) {
      goNext();
      handleSubmit(onSubmit)(); // Trigger form submission
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 items-center justify-center py-8">
      <h3 className="text-primaryDark font-semibold text-2xl">
        Contact Information
      </h3>

      <div className="w-full flex flex-col">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
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
        <div className="flex-1 flex flex-col">
          <Label htmlFor="phone">Phone Number</Label>
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <PhoneInput
                country={"ma"}
                value={field.value}
                onChange={field.onChange}
                inputProps={{
                  name: "phone",
                  id: "phone",
                  required: true,
                  "aria-invalid": !!errors.phone,
                  "aria-describedby": errors.phone ? "phone-error" : undefined,
                }}
                placeholder="+ 123 456 7890"
                inputStyle={{
                  height: "48px",
                  width: "100%",
                  borderRadius: "8px",
                }}
              />
            )}
          />
          {errors.phone && (
            <span id="phone-error" className="text-red-500 text-sm">
              {errors.phone.message}
            </span>
          )}
        </div>
      </div>

      <div className="w-full flex flex-col">
        <Label htmlFor="first_name">First Name</Label>
        <Input
          id="first_name"
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

      <div className="w-full flex flex-col">
        <Label htmlFor="surname">Surname</Label>
        <Input
          id="surname"
          className="w-full ring-2 ring-gray-100"
          type="text"
          placeholder="Surname"
          {...register("surname")}
        />
        {errors.surname && (
          <span className="text-red-500 text-sm">{errors.surname.message}</span>
        )}
      </div>

      <div className="w-full flex flex-col">
        <Label htmlFor="mission_address">Mission Address</Label>
        <Input
          id="mission_address"
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

      <div className="w-full flex flex-col">
        <Label htmlFor="area">Area</Label>
        <Input
          id="area"
          className="w-full ring-2 ring-gray-100"
          type="text"
          placeholder="Area"
          {...register("area")}
        />
        {errors.area && (
          <span className="text-red-500 text-sm">{errors.area.message}</span>
        )}
      </div>

      <div className="w-full flex flex-col">
        <Label htmlFor="postal_code">Postal Code</Label>
        <Input
          id="postal_code"
          className="w-full ring-2 ring-gray-100"
          type="number"
          placeholder="Postal Code"
          {...register("postal_code", { valueAsNumber: true })}
        />
        {errors.postal_code && (
          <span className="text-red-500 text-sm">
            {errors.postal_code.message}
          </span>
        )}
      </div>

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

      <div className="w-full flex gap-4">
        {goBack && (
          <Button
            variant="outline"
            className="w-full font-semibold h-14 text-lg"
            onClick={goBack}
          >
            Back
          </Button>
        )}
        <Button
          variant="secondary"
          className="w-full font-semibold h-14 text-primaryDark/40 text-lg"
          onClick={handleNext}
        >
          Post job
        </Button>
      </div>
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
        <Link to="/my-post">
          <Button className="justify-end font-semibold h-14 text-lg">
            See my jobs
          </Button>
        </Link>
      </div>
    </>
  );
}
