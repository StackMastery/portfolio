export default function Input({ onChange, ...props }) {
  return (
    <>
      <div>
        <input
          onChange={onChange}
          className="px-3 py-2 focus-within:border-b-sky-600 transition-all bg-[#ffffff06] text-sm border-b w-full border-slate-800 pb-2"
          {...props}
        />
      </div>
    </>
  );
}
