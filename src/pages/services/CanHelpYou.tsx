

export default function CanHelpYou({ title, electricianServiceList }) {
  return (
    <div className="bg-liquidGreen rounded-lg p-4">
      <h4 className="text-lg font-semibold text-primaryDark">
        {title}
      </h4>

      <ul className="flex flex-col gap-2 list-disc pl-4 text-sm leading-normal py-3">
        {electricianServiceList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
