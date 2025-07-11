import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-95",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-elegant hover:shadow-luxury transform hover:scale-[1.02] active:scale-95",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 transform hover:scale-[1.02] active:scale-95",
        outline:
          "border-2 border-input bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-elegant",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 transform hover:scale-[1.02] active:scale-95",
        ghost: "hover:bg-accent hover:text-accent-foreground transform hover:scale-[1.02] active:scale-95",
        link: "text-primary underline-offset-4 hover:underline transform hover:scale-[1.02] active:scale-95",
        luxury: "bg-gradient-luxury text-primary-foreground hover:shadow-luxury transform hover:scale-[1.05] active:scale-95 transition-all duration-300 relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/20 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        gold: "bg-gradient-gold text-primary hover:shadow-gold transform hover:scale-[1.05] active:scale-95 transition-all duration-300 font-semibold relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/0 before:via-white/30 before:to-white/0 before:translate-x-[-100%] hover:before:translate-x-[100%] before:transition-transform before:duration-700",
        burgundy: "bg-burgundy text-burgundy-foreground hover:bg-burgundy/90 shadow-elegant hover:shadow-luxury transform hover:scale-[1.02] active:scale-95",
        ghost_outline: "border-2 border-primary-foreground/30 text-primary-foreground bg-primary-foreground/5 backdrop-blur-sm hover:bg-primary-foreground/20 hover:border-primary-foreground/50 transform hover:scale-[1.02] active:scale-95 shadow-sm hover:shadow-elegant"
      },
      size: {
        default: "h-11 px-6 py-2.5",
        sm: "h-9 rounded-md px-4 text-sm",
        lg: "h-12 rounded-lg px-8 py-3 text-base font-medium",
        xl: "h-14 rounded-xl px-10 py-4 text-lg font-medium",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
