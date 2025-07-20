import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Employee {
  name: string;
  designation: string;
  reference?: string;
  image: string; // base64 or file path
}

interface Props {
  employee: Employee;
  onChange: (updated: Employee) => void;
  onSubmit: () => void;
  mode: "edit" | "add";
}

export default function EmployeeForm({
  employee,
  onChange,
  onSubmit,
  mode,
}: Props) {
  const isFormValid =
    employee.name.trim() !== "" && employee.designation.trim() !== "";

  // Handle Image Upload (preview and base64 encoding)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onChange({ ...employee, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-6 max-w-xl">
      <div>
        <label className="block text-sm font-medium mb-1 text-blackSecondary">
          Full Name
        </label>
        <Input
          value={employee.name}
          onChange={(e) => onChange({ ...employee, name: e.target.value })}
          placeholder="Enter Name"
          className="ring-2 ring-gray-100 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-blackSecondary">
          Designation
        </label>
        <Input
          value={employee.designation}
          onChange={(e) =>
            onChange({ ...employee, designation: e.target.value })
          }
          placeholder="Enter Designation"
          className="ring-2 ring-gray-100 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1 text-blackSecondary">
          Reference (Optional)
        </label>
        <Input
          value={employee.reference || ""}
          onChange={(e) => onChange({ ...employee, reference: e.target.value })}
          placeholder="Enter Reference"
          className="ring-2 ring-gray-100 focus:ring-blue-500"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label className="block text-sm font-medium mb-1 text-blackSecondary">
          Profile Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="block w-full  text-sm text-gray-500 border border-gray-300 rounded-md"
        />
        {employee.image && (
          <div className="mt-4">
            <img
              src={employee.image}
              alt="Employee Image"
              className="w-28 h-28 object-cover "
            />
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          className={`${
            isFormValid
              ? "bg-green-600 hover:bg-green-700"
              : "bg-gray-300 cursor-not-allowed"
          } text-white w-full`}
          onClick={onSubmit}
          disabled={!isFormValid}
        >
          {mode === "add" ? "Confirm" : "Update"}
        </Button>
      </div>
    </div>
  );
}
