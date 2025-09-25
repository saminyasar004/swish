"use client";
import { useState } from "react";
import BusinessSidebar from "./BusinessSidebar";

import AddIcon from "@/assets/add-icon.svg"; // Optional
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";

import Employee1 from "@/assets/images/Employee1.svg";
import Employee2 from "@/assets/images/Employee2.svg";
import Employee3 from "@/assets/images/Employee3.svg";
import { Separator } from "@/components/ui/separator";

interface Employee {
  id: number;
  name: string;
  designation: string;
  reference?: string;
  image: string;
}

const initialEmployees: Employee[] = [
  { id: 1, name: "Mikel Jack", designation: "Developer", image: Employee1 },
  { id: 2, name: "Jhon Cina", designation: "Wrestler", image: Employee2 },
  { id: 3, name: "Brock Lasner", designation: "Player", image: Employee3 },
];

export default function ManageEmployeesPage() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [form, setForm] = useState<Employee>({
    id: 0,
    name: "",
    designation: "",
    image: "",
    reference: "",
  });
  const [mode, setMode] = useState<"edit" | "add">("add");

  const handleSelect = (emp: Employee) => {
    setSelectedId(emp.id);
    setForm(emp);
    setMode("edit");
  };

  const handleAddClick = () => {
    setForm({ id: 0, name: "", designation: "", image: "", reference: "" });
    setMode("add");
  };

  const handleSubmit = () => {
    if (!form.name || !form.designation) {
      alert("Name and Designation are required!");
      return;
    }

    if (mode === "edit") {
      setEmployees((prev) =>
        prev.map((e) => (e.id === selectedId ? { ...e, ...form } : e))
      );
    } else {
      setEmployees((prev) => [
        ...prev,
        { ...form, id: Date.now(), image: form.image || "/images/emp4.jpg" },
      ]);
    }

    // Reset form after submission
    setForm({ id: 0, name: "", designation: "", image: "", reference: "" });
    setMode("add");
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 ">
        <BusinessSidebar />
      </aside>

      {/* Main Content */}
      <main className="w-full md:w-3/4 p-6 space-y-4 container mx-auto mt-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Manage Employees
        </h2>

        <Separator/>

        {/* Employee Avatars */}
        <div className="flex gap-4 flex-wrap items-center">
          {employees.map((emp) => (
            <EmployeeCard
              key={emp.id}
              image={emp.image}
              selected={selectedId === emp.id}
              onClick={() => handleSelect(emp)}
            />
          ))}

          {/* Add New */}
          <div
            onClick={handleAddClick}
            className="w-[100px] h-[100px] bg-gray-100 border-dashed border-2 flex items-center justify-center cursor-pointer rounded-md"
          >
            <span className="text-3xl text-gray-500">+</span>
          </div>
        </div>

        <hr className="border-gray-300" />

        {/* Employee Form */}
        <EmployeeForm
          employee={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          mode={mode}
        />
      </main>
    </div>
  );
}

// "use client";
// import { useState } from "react";
// import BusinessSidebar from "./BusinessSidebar";

// import AddIcon from "@/assets/add-icon.svg"; // Optional
// import EmployeeCard from "./EmployeeCard";
// import EmployeeForm from "./EmployeeForm";

// import Employee1 from "@/assets/images/Employee1.svg";
// import Employee2 from "@/assets/images/Employee2.svg";
// import Employee3 from "@/assets/images/Employee3.svg";

// interface Employee {
//   id: number;
//   name: string;
//   designation: string;
//   reference?: string;
//   image: string;
// }

// const initialEmployees: Employee[] = [
//   { id: 1, name: "Mikel Jack", designation: "Developer", image: Employee1 },
//   { id: 2, name: "Jhon Cina", designation: "Wrestler", image: Employee2 },
//   { id: 3, name: "Brock Lasner", designation: "Player", image: Employee3 },
// ];

// export default function ManageEmployeesPage() {
//   const [employees, setEmployees] = useState(initialEmployees);
//   const [selectedId, setSelectedId] = useState<number | null>(null);
//   const [form, setForm] = useState<Employee>({
//     id: 0,
//     name: "",
//     designation: "",
//     image: "",
//     reference: "",
//   });
//   const [mode, setMode] = useState<"edit" | "add">("add");

//   const handleSelect = (emp: Employee) => {
//     setSelectedId(emp.id);
//     setForm(emp);
//     setMode("edit");
//   };

//   const handleAddClick = () => {
//     setForm({ id: 0, name: "", designation: "", image: "", reference: "" });
//     // setForm({ name: "", designation: "", reference: "", image: "" });

//     setMode("add");
//   };

//   const handleSubmit = () => {
//     if (mode === "edit") {
//       setEmployees((prev) =>
//         prev.map((e) => (e.id === selectedId ? { ...e, ...form } : e))
//       );
//     } else {
//       setEmployees((prev) => [
//         ...prev,
//         { ...form, id: Date.now(), image: form.image || "/images/emp4.jpg" },
//       ]);
//     }
//   };

//   return (
//     <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-full md:w-1/4 bg-white shadow-xl">
//         <BusinessSidebar />
//       </aside>

//       {/* Main Content */}
//       <main className="w-full md:w-3/4 p-6 space-y-8 container mx-auto mt-6">
//         <h2 className="text-3xl font-semibold text-gray-800 mb-2">
//           Manage Employees
//         </h2>

//         {/* Employee Avatars */}
//         <div className="flex gap-4 flex-wrap items-center">
//           {employees.map((emp) => (
//             <EmployeeCard
//               key={emp.id}
//               image={emp.image}
//               selected={selectedId === emp.id}
//               onClick={() => handleSelect(emp)}
//             />
//           ))}

//           {/* Add New */}
//           <div
//             onClick={handleAddClick}
//             className="w-[100px] h-[100px] bg-gray-100 border-dashed border-2 flex items-center justify-center cursor-pointer rounded-md"
//           >
//             <span className="text-3xl text-gray-500">+</span>
//           </div>
//         </div>

//         <hr className="border-gray-300" />

//         {/* Employee Form */}
//         <EmployeeForm
//           employee={form}
//           onChange={setForm}
//           onSubmit={handleSubmit}
//           mode={mode}
//         />
//       </main>
//     </div>
//   );
// }
