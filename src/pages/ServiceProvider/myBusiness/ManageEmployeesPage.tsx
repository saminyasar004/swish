"use client";
import { useState } from "react";

import AddIcon from "@/assets/add-icon.svg"; // You can use `+` as fallback
import EmployeeCard from "./EmployeeCard";
import EmployeeForm from "./EmployeeForm";

const initialEmployees = [
  {
    id: 1,
    name: "Mikel Jack",
    designation: "Developer",
    image: "/images/emp1.jpg",
    reference: "Google",
  },
  {
    id: 2,
    name: "Mikel Jack",
    designation: "Designer",
    image: "/images/emp2.jpg",
  },
  {
    id: 3,
    name: "Mikel Jack",
    designation: "QA Engineer",
    image: "/images/emp3.jpg",
  },
];

export default function ManageEmployeesPage() {
  const [employees, setEmployees] = useState(initialEmployees);
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    designation: "",
    reference: "",
    image: "",
  });
  const [mode, setMode] = useState<"edit" | "add">("add");

  const handleSelect = (emp: any) => {
    setSelectedId(emp.id);
    setForm(emp);
    setMode("edit");
  };

  const handleAddClick = () => {
    setSelectedId(null);
    setForm({ name: "", designation: "", reference: "", image: "" });
    setMode("add");
  };

  const handleSubmit = () => {
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
  };

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Manage Employees</h2>

      {/* Employee Avatars */}
      <div className="flex gap-4 items-center">
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

      <hr />

      {/* Form */}
      <div>
        <EmployeeForm
          employee={form}
          onChange={setForm}
          onSubmit={handleSubmit}
          mode={mode}
        />
      </div>
    </div>
  );
}
