import React from "react"
export const Badge = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => (
  <span className={`inline-block rounded-full px-2 py-1 text-xs font-bold ${className}`} {...props}>
    {children}
  </span>
)