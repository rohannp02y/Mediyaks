import React from "react"
export const Avatar = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`inline-block rounded-full bg-gray-200 overflow-hidden ${className}`} style={{ width: 40, height: 40 }}>
    {children}
  </div>
)
export const AvatarImage = ({ src }: { src: string }) => (
  <img src={src} alt="" className="w-full h-full object-cover" />
)
export const AvatarFallback = ({ children }: { children: React.ReactNode }) => (
  <span className="w-full h-full flex items-center justify-center text-lg">{children}</span>
)