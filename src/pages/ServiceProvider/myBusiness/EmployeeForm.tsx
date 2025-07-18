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
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">Full Name</label>
        <input
          value={employee.name}
          onChange={(e) => onChange({ ...employee, name: e.target.value })}
          className="input"
          placeholder="Enter Name"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Designation</label>
        <input
          value={employee.designation}
          onChange={(e) =>
            onChange({ ...employee, designation: e.target.value })
          }
          className="input"
          placeholder="Enter Designation"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          Reference (Optional)
        </label>
        <input
          value={employee.reference || ""}
          onChange={(e) => onChange({ ...employee, reference: e.target.value })}
          className="input"
          placeholder="Enter Reference"
        />
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={onSubmit}
      >
        {mode === "add" ? "Confirm" : "Update"}
      </button>
    </div>
  );
}
