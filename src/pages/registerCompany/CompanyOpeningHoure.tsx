// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useForm, Controller } from "react-hook-form";
// import { useEffect } from "react";
// import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
// import TimePicker from "react-time-picker";

// type CompanyOpeningHourProps = {
//   open: boolean;
//   onClose: () => void;
//   onSubmit: (data: FormData) => void;
// };

// type FormData = {
//   companyOpeningHoursEveryday: boolean;
//   companyOpenOnWeekends: boolean;
//   companyOpeningHours: {
//     [key: string]: {
//       start: string;
//       end: string;
//     };
//   };
// };

// export const CompanyOpeningHour = ({
//   open,
//   onClose,
//   onSubmit,
// }: CompanyOpeningHourProps) => {
//   const days = [
//     "Monday",
//     "Tuesday",
//     "Wednesday",
//     "Thursday",
//     "Friday",
//     "Saturday",
//     "Sunday",
//   ];

//   const defaultHours = days.reduce(
//     (acc, day) => ({
//       ...acc,
//       [day]: { start: "", end: "" },
//     }),
//     {} as FormData["companyOpeningHours"]
//   );

//   const {
//     handleSubmit,
//     control,
//     reset,
//     formState: { isSubmitting },
//   } = useForm<FormData>({
//     defaultValues: {
//       companyOpeningHoursEveryday: false,
//       companyOpenOnWeekends: false,
//       companyOpeningHours: defaultHours,
//     },
//   });

//   const handleFormSubmit = (data: FormData) => {
//     console.log("Form Submitted:", data);
//     onSubmit(data);
//     reset();
//     onClose();
//   };

//   useEffect(() => {
//     if (!open) {
//       reset({
//         companyOpeningHoursEveryday: false,
//         companyOpenOnWeekends: false,
//         companyOpeningHours: defaultHours,
//       });
//     }
//   }, [open, reset]);

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       <DialogContent className="max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
//         <DialogHeader>
//           <DialogTitle>Opening Hours</DialogTitle>
//         </DialogHeader>
//         <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-3 gap-6">
//           {/* Toggle Section */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Toggle Options</h3>

//             <div className="flex items-center justify-between space-x-2 mb-4">
//               <Label className="text-sm">Different opening hours everyday</Label>
//               <Controller
//                 name="companyOpeningHoursEveryday"
//                 control={control}
//                 render={({ field }) => (
//                   <Switch
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                     className="data-[state=checked]:bg-green-500"
//                   />
//                 )}
//               />
//             </div>

//             <div className="flex items-center justify-between space-x-2 mb-4">
//               <Label className="text-sm">Open on weekends</Label>
//               <Controller
//                 name="companyOpenOnWeekends"
//                 control={control}
//                 render={({ field }) => (
//                   <Switch
//                     checked={field.value}
//                     onCheckedChange={field.onChange}
//                     className="data-[state=checked]:bg-green-500"
//                   />
//                 )}
//               />
//             </div>
//           </div>

//           {/* Time Configuration */}
//           <div className="col-span-2">
//             <h3 className="text-lg font-semibold mb-4">Time Configuration</h3>
//             {days.map((day) => (
//               <div key={day} className="mb-4">
//                 <Label className="block text-sm font-medium mb-2">{day}</Label>
//                 <div className="flex space-x-2">
//              {/* <Controller
//   name={`companyOpeningHours.${day}.start`}
//   control={control}
//   defaultValue="09:00"
//   render={({ field }) => (
//     <input
//       type="time"
//       step="900" // 15 min steps
//       className="w-full rounded-md border border-gray-300 p-2 text-gray-700"
//       {...field}
//     />
//   )}
// />

// <Controller
//   name={`companyOpeningHours.${day}.end`}
//   control={control}
//   defaultValue="17:00"
//   render={({ field }) => (
//     <input
//       type="time"
//       step="900"
//       className="w-full rounded-md border border-gray-300 p-2 text-gray-700"
//       {...field}
//     />
//   )}
// /> */}
// <Controller
//   name={`companyOpeningHours.${day}.start`}
//   control={control}
//   defaultValue="09:00"
//   render={({ field }) => (
//     <input
//       type="time"
//       step="900"
//       className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm 
//                  transition focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 
//                  hover:border-gray-400"
//       {...field}
//     />
//   )}
// />

// <Controller
//   name={`companyOpeningHours.${day}.end`}
//   control={control}
//   defaultValue="17:00"
//   render={({ field }) => (
//     <input
//       type="time"
//       step="900"
//       className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm 
//                  transition focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 
//                  hover:border-gray-400"
//       {...field}
//     />
//   )}
// />



//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Footer */}
//           <DialogFooter className="col-span-3 flex justify-between pt-4">
//             <Button
//               type="button"
//               variant="outline"
//               className="w-1/3"
//               onClick={() =>
//                 reset({
//                   companyOpeningHoursEveryday: false,
//                   companyOpenOnWeekends: false,
//                   companyOpeningHours: defaultHours,
//                 })
//               }
//             >
//               Reset
//             </Button>
//             <Button
//               type="submit"
//               className="bg-green-500 text-white w-1/3"
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Submitting..." : "Continue"}
//             </Button>
//           </DialogFooter>
//         </form>
//       </DialogContent>
//     </Dialog>
//   );
// };


// =============================
// File: components/register/CompanyOpeningHour.tsx
// =============================

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { useEffect } from "react";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { ArrowLeft } from "lucide-react";

export type OpeningHoursFormData = {
  companyOpeningHoursEveryday: boolean;
  companyOpenOnWeekends: boolean;
  companyOpeningHours: {
    [day: string]: { start: string; end: string };
  };
};

export type CompanyOpeningHourProps = {
   open: boolean;
  onClose: () => void;
   onSubmit: (data: OpeningHoursFormData) => void;
  onBack?: () => void;   
};

export const CompanyOpeningHour = ({  open,
  onClose,
  onSubmit,
  onBack, }: CompanyOpeningHourProps) => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"] as const;

  const defaultHours = days.reduce((acc, day) => ({ ...acc, [day]: { start: "09:00", end: "17:00" } }), {} as OpeningHoursFormData["companyOpeningHours"]);

  const { handleSubmit, control, reset, formState: { isSubmitting } } = useForm<OpeningHoursFormData>({
    defaultValues: {
      companyOpeningHoursEveryday: false,
      companyOpenOnWeekends: false,
      companyOpeningHours: defaultHours,
    },
  });

  const handleFormSubmit = (data: OpeningHoursFormData) => {
    onSubmit(data);
    reset();
    onClose();
  };

  useEffect(() => {
    if (!open) {
      reset({ companyOpeningHoursEveryday: false, companyOpenOnWeekends: false, companyOpeningHours: defaultHours });
    }
  }, [open, reset]);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="max-w-md md:max-w-lg lg:max-w-2xl xl:max-w-4xl"
        onInteractOutside={(e) => e.preventDefault()}  // optional
        onEscapeKeyDown={(e) => e.preventDefault()}    // optional
      >
        <DialogHeader className="flex flex-row items-center gap-2">
          {onBack && (
            <button
              type="button"
              aria-label="Back"
              className="rounded-full p-1 bg-primary hover:bg-muted"
              onClick={onBack}
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
          )}
          <DialogTitle>Opening Hours</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit(handleFormSubmit)} className="grid grid-cols-3 gap-6">
          {/* Toggles */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Toggle Options</h3>
            <div className="flex items-center justify-between space-x-2 mb-4">
              <Label className="text-sm">Different opening hours everyday</Label>
              <Controller name="companyOpeningHoursEveryday" control={control} render={({ field }) => (
                <Switch checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-green-500" />
              )} />
            </div>
            <div className="flex items-center justify-between space-x-2 mb-4">
              <Label className="text-sm">Open on weekends</Label>
              <Controller name="companyOpenOnWeekends" control={control} render={({ field }) => (
                <Switch checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-green-500" />
              )} />
            </div>
          </div>

          {/* Times */}
          <div className="col-span-2">
            <h3 className="text-lg font-semibold mb-4">Time Configuration</h3>
            {days.map((day) => (
              <div key={day} className="mb-4">
                <Label className="block text-sm font-medium mb-1">{day}</Label>
                <div className="flex space-x-2">
                  <Controller
                    name={`companyOpeningHours.${day}.start` as const}
                    control={control}
                    render={({ field }) => (
                      <input type="time" step="900" className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-green-500  focus:ring-opacity-50 hover:border-gray-400" {...field} />
                    )}
                  />
                  <Controller
                    name={`companyOpeningHours.${day}.end` as const}
                    control={control}
                    render={({ field }) => (
                      <input type="time" step="900" className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm focus:border-green-500  focus:ring-opacity-50 hover:border-gray-400" {...field} />
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          <DialogFooter className="col-span-3 flex justify-between pt-4">
            <Button type="button" variant="outline" className="w-1/3" onClick={() => reset({ companyOpeningHoursEveryday: false, companyOpenOnWeekends: false, companyOpeningHours: defaultHours })}>
              Reset
            </Button>
            <Button type="submit" className="bg-green-500 text-white w-1/3" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Continue"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
