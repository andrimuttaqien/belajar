export default function Field({ label, children }) {
  return (
    <div>
      <label className="block my-2 pb-2">
        <span className="block text-sm text-gray-600 font-bold pb-2">
          {label}
        </span>
        {children}
      </label>
    </div>
  );
}
