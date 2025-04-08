import { cn } from "../utils/cn";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  variant: "primary" | 'transparent';
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  type?: "button" | "submit";
}

export default function Button({
  text,
  onClick,
  variant = "primary",
  size = "sm",
  disabled = false,
  className = "",
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center rounded-lg focus:outline-none focus:ring-2 focus:offset-2",
        {
          "bg-[var(--primary)] text-white hover:bg-[var(--royalblue)]":
            variant === "primary",
          'bg-transparent border-1 border-[var(--gray)] text-[var(--gray)]':
            variant === 'transparent'
        },
        {
          "px-2 py-1 text-sm": size === "sm",
          "px-4 py-2 text-sm": size === "md",
          "px-8 py-3 text-sm": size === "lg",
        },
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      {text}
    </button>
  );
}
