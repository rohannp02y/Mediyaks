import React from "react"
export const Card = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white rounded-lg border ${className}`} {...props}>
    {children}
  </div>
)
export const CardHeader = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 border-b ${className}`} {...props}>
    {children}
  </div>
)
export const CardTitle = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="font-bold text-lg" {...props}>{children}</div>
)
export const CardDescription = ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className="text-gray-500 text-sm" {...props}>{children}</div>
)
export const CardContent = ({
  children,
  className = "",
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={` ${className}`} {...props}>{children}</div>
)