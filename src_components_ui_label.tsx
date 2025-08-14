import React from "react"
export const Label = ({
  children,
  className = "",
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label className={`block font-medium mb-1 ${className}`} {...props}>
    {children}
  </label>
)