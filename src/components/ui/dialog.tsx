import { useRef, type ComponentProps } from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '../../lib/utils'

export const Dialog = DialogPrimitive.Root
export const DialogTrigger = DialogPrimitive.Trigger
export const DialogClose = DialogPrimitive.Close
export const DialogTitle = DialogPrimitive.Title
export const DialogDescription = DialogPrimitive.Description

export function DialogContent({ className, children, onOpenAutoFocus, onCloseAutoFocus, ...props }: ComponentProps<typeof DialogPrimitive.Content>) {
  const opener = useRef<HTMLElement | null>(null)

  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="dialog-overlay" />
      <DialogPrimitive.Content
        className={cn('dialog-content', className)}
        onOpenAutoFocus={(event) => {
          opener.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
          onOpenAutoFocus?.(event)
        }}
        onCloseAutoFocus={(event) => {
          onCloseAutoFocus?.(event)
          if (!event.defaultPrevented && opener.current?.isConnected && opener.current !== document.body) {
            event.preventDefault()
            opener.current.focus({ preventScroll: true })
          }
        }}
        {...props}
      >
        {children}
        <DialogPrimitive.Close className="dialog-close" aria-label="Close dialog">
          <X size={20} aria-hidden="true" />
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  )
}
