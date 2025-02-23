export default function Button({
  v,
  btnClass,
  onClick,
  className,
  children,
  ...props
}) {
  return (
    <>
      <button
        onClick={onClick}
        {...props}
        className={`relative inline-flex hover:scale-95 transition-all overflow-hidden rounded-md p-[1.2px] focus:outline-none duration-500 ${btnClass}`}
      >
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#BAE6FD_0%,#0284C7_50%,#BAE6FD_100%)]" />
        <span
          className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-[5px] bg-sky-700  py-1 px-5 text-sm font-light text-white backdrop-blur-3xl ${className}`}
        >
          {children}
        </span>
      </button>
    </>
  );
}
