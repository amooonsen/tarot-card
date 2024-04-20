import { TypographyProps } from "@/types/TypeCommon";

export function TypographyH4({children}:TypographyProps) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
      {children}
    </h4>
  )
}
