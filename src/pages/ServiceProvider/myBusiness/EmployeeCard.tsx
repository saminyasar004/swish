interface Props {
  image: string;
  selected?: boolean;
  onClick: () => void;
}

export default function EmployeeCard({ image, selected, onClick }: Props) {
  return (
    <div
      className={`border-2 rounded-md overflow-hidden cursor-pointer ${
        selected ? "border-primary" : "border-transparent"
      }`}
      onClick={onClick}
    >
      <img
        src={image}
        alt="Employee"
        className="w-[100px] h-[100px] object-cover"
      />
    </div>
  );
}
