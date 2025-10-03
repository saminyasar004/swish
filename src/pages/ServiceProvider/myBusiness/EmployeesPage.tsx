import { useState } from "react";
import BusinessSidebar from "../companyProfile/BusinessSidebar";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

import Employee1 from "@/assets/images/Employee1.svg";
import Employee2 from "@/assets/images/Employee2.svg";
import Employee3 from "@/assets/images/Employee3.svg";

interface Employee {
  id: number;
  name: string;
  designation: string;
  image: string;
}

const employees: Employee[] = [
  { id: 1, name: "Mikel Jack", designation: "Developer", image: Employee1 },
  { id: 2, name: "Jhon Cina", designation: "Wrestler", image: Employee2 },
  { id: 3, name: "Brock Lasner", designation: "Player", image: Employee3 },
  // Add more if needed
];

export default function EmployeesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen container mx-auto">
      {/* Sidebar */}
      <aside className="w-full md:w-1/4 ">
        <BusinessSidebar />
      </aside>

      {/* Main */}
      <main className="w-full md:w-3/4 p-6 space-y-6 container mx-auto ">
        {/* Header */}
        <div className="flex justify-between items-center mb-6  py-6">
          <h2 className="text-3xl font-semibold text-blackPrimary">
            Our Employees
          </h2>
          <Link
            to="/provider/my-business/employees/manage"
            className="text-md text-primary font-medium hover:underline"
          >
            Manage Employees
          </Link>
        </div>

        {/* Search */}
        <div className="relative w-full max-w-sm mb-6">
          <Search
            className="absolute left-3 top-3.5 text-gray-400 "
            size={18}
          />
          <Input
            className="pl-10 ring-2 ring-gray-100"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Employee Cards */}
        <div className="grid grid-cols-2  md:grid-cols-3 gap-6">
          {filteredEmployees.map((emp) => (
            <div
              key={emp.id}
              className="rounded-xl overflow-hidden bg-white shadow-sm border"
            >
              <img
                src={emp.image}
                alt={emp.name}
                className="w-full h-80 object-cover"
              />
              <div className="text-center py-3">
                <h4 className="font-semibold text-lg text-black">{emp.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {emp.designation}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
