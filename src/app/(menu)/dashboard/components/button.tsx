import React from "react";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties; // ✅ Tambahkan ini
};

export const Button = ({
  children,
  size = "md",
  className,
  onClick,
  style, // ✅ Tambahkan ini
}: ButtonProps) => {
  const baseStyle = "rounded-lg font-medium transition-colors duration-200";
  const sizeStyle = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-5 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(baseStyle, sizeStyle[size], className)}
      style={style}
    >
      {children}
    </button>
  );
};
