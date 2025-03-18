import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "accent" | "borderOnly" | "text";
export type ButtonSize = "sm" | "md" | "lg";
export type ButtonCorners = "default" | "fullyRounded";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  corners?: ButtonCorners;
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  corners = "default",
  fullWidth = false,
  href,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "font-medium transition-all ease-standard duration-normal cursor-pointer";

  const variantStyles = {
    primary: "bg-btn-primary text-text-heading hover:bg-btn-primary-hover active:bg-btn-primary",
    secondary: "bg-btn-secondary text-text-light hover:bg-btn-secondary-hover hover:text-text-heading active:bg-btn-secondary active:text-text-light",
    accent: "bg-btn-accent text-text-heading hover:bg-btn-accent-hover hover:text-text-light active:bg-btn-accent active:text-text-heading",
    borderOnly: "bg-transparent border-2 border-btn-primary text-text-body hover:border-btn-primary-hover hover:text-text-heading active:border-btn-primary active:text-text-body",
    text: "bg-transparent border-none outline-none text-text-body hover:text-accent active:text-text-body",
  };

  const sizeStyles = {
    sm: "py-1.5 px-4 text-sm",
    md: "py-2 px-6",
    lg: "py-3 px-8",
  };

  const cornerStyles = {
    default: "rounded-tl-md rounded-br-md",
    fullyRounded: "rounded-full",
  };

  const widthStyles = fullWidth ? "w-full" : "";

  const buttonStyles =
    `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${cornerStyles[corners]} ${widthStyles} ${className}`.trim();

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  );
};

export default Button;
