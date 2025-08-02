import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Edit } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import ProfileSidebar from "./ProfileSidebar";
import PersonalInfo from "./PersonalInfo";
import LoginAndSecurity from "./LoginAndSecurity";
import Notification from "./Notification";

export default function Profile() {
  return (
    <div>
      <div className="bg-gradient-to-l from-primary via-secondary to-primary py-12 w-full"></div>

      <div className="flex flex-col md:flex-row min-h-screen">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-solidWhite shadow-md">
          <ProfileSidebar />
        </aside>

        {/* Main Content */}
        <main className="w-full md:w-3/4 p-6 container mx-auto">
          <div className="mt-16 shadow-md py-12">
            {/* <PersonalInfo/> */}

            {/* <LoginAndSecurity /> */}

            <Notification />
          </div>
        </main>
      </div>
    </div>
  );
}

// <div className="py-4 md:py-6 lg:py-12">
//   {/* Banner */}
//   <div className="bg-primary py-12 flex items-center justify-center"></div>

//   <div className="container mx-auto flex flex-col gap-16 px-4">

//     <div className="p-6 flex flex-col md:flex-row justify-between items-center gap-8 bg-white rounded-lg shadow-sm">
//       <div className="flex items-center gap-6 relative">

//         <div className="relative w-32 h-32">
//           <img
//             src={imagePreview}
//             alt="Profile"
//             className="w-full h-full rounded-full object-cover"
//           />

//           <input
//             type="file"
//             accept="image/*"
//             id="avatarInput"
//             {...register("avatar")}
//             onChange={handleImageChange}
//             className="hidden"
//           />

//           <button
//             type="button"
//             onClick={() => document.getElementById("avatarInput").click()}
//             className="absolute bottom-0 right-0 p-1 bg-liquidGreen rounded-full hover:scale-105 transition"
//           >
//             <Edit className="w-6 h-6 text-accent" />
//           </button>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold text-gray-700">
//             Ali Mounji
//           </h2>
//           <p className="text-gray-500">alimounji@gmail.com</p>
//         </div>
//       </div>

//       <Button className="px-4 py-2 bg-primary text-liquidGreen rounded hover:bg-primaryDark transition">
//         Edit Information
//       </Button>
//     </div>

//     {/* Form Section */}
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       <div className="form-group flex flex-col gap-3 lg:px-10">
//         <Label htmlFor="firstName" className="text-secondary">
//           First Name
//         </Label>
//         <Input
//           id="firstName"
//           className="ring-2 ring-gray-100"
//           type="name"
//           placeholder="John"
//         />
//       </div>

//       <div className="form-group flex flex-col gap-3 lg:px-10 ">
//         <Label htmlFor="lastName" className="text-secondary">
//           Last Name
//         </Label>
//         <Input
//           className="ring-2 ring-gray-100"
//           id="lastName"
//           type="name"
//           placeholder="Doe"
//         />
//       </div>

//       <div className="form-group flex flex-col gap-3 lg:px-10 ">
//         <Label htmlFor="address" className="text-secondary">
//           Address
//         </Label>
//         <Input
//           className="ring-2 ring-gray-100"
//           id="address"
//           type="text"
//           placeholder="Address"
//         />
//       </div>

//       <div className="form-group flex flex-col gap-3 lg:px-10 ">
//         <Label htmlFor="Language" className="text-secondary">
//           Language
//         </Label>
//         <Select
//           value={currentLanguage}
//           onValueChange={(e) => setCurrentLanguage(e)}
//         >
//           <SelectTrigger className="w-full">
//             <SelectValue />
//           </SelectTrigger>
//           <SelectContent>
//             <SelectGroup>
//               {languages.map((language) => (
//                 <SelectItem value={language} key={language}>
//                   {language}
//                 </SelectItem>
//               ))}
//             </SelectGroup>
//           </SelectContent>
//         </Select>
//       </div>
//     </div>

//   </div>
// </div>
