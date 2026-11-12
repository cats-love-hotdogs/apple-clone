const base =
  "inline-flex h-9 select-none items-center justify-center whitespace-nowrap rounded-full px-[15px] text-center text-[14px] leading-none transition-colors duration-200 tablet:h-11 tablet:px-[21px] tablet:text-[17px]";

const variants = {
  primary: "bg-apple-blue text-white hover:bg-[#0077ed]",
  secondary:
    "border border-apple-link text-apple-link hover:bg-apple-link hover:text-white",
};

export default function Button({ href, variant = "primary", className = "", children }) {
  return (
    <a
      href={href}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
    >
      {children}
    </a>
  );
}
