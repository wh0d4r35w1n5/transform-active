import type { ComponentProps } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '../../lib/utils'

const buttonVariants = cva(
  'button inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-45 [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default: 'button-primary',
        outline: 'button-outline',
        light: 'button-light',
        ghost: 'button-ghost',
      },
      size: {
        default: 'h-12 px-6 text-sm',
        sm: 'h-10 px-5 text-xs',
        lg: 'h-14 px-7 text-sm',
        icon: 'size-11 p-0',
      },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  },
)

export function Button({ className, variant, size, asChild = false, ...props }: ComponentProps<'button'> & VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : 'button'
  return <Comp data-slot="button" className={cn(buttonVariants({ variant, size, className }))} {...props} />
}
