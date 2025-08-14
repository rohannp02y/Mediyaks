import React from "react"
export const Button = ({
  children,
  className = "",
  onClick,
  variant = "primary",
  size = "md",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost"
  size?: "md" | "sm"
}) => {
  const base = "rounded px-4 py-2 font-semibold focus:outline-none transition"
  const variants: any = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-blue-600 text-blue-600 bg-white hover:bg-blue-50",
    ghost: "text-gray-600 bg-transparent hover:bg-gray-100"
  }
  const sizes: any = {
    md: "text-base h-10",
    sm: "text-sm h-8"
  }
  return (
    <button
      className={`${base} ${variants[variant] || ""} ${sizes[size] || ""} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}