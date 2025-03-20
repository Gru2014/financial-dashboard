import { ButtonHTMLAttributes } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props
}: ButtonProps) {
  const baseStyles = "font-medium transition-all duration-200 active:scale-95";
  
  const variants = {
    primary: "bg-black text-white hover:bg-black/90 hover:scale-105 active:bg-black/80",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 hover:scale-105 active:bg-gray-300",
    text: "text-gray-900 hover:bg-gray-100 active:bg-gray-200"
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };

  return (
    <button
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
} 