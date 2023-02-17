"use client"

import { useToaster } from "@/hooks/use-toaster"

import { Toast, ToastClose } from "./ui/toast"

export default function ToastList() {
  const { toasts } = useToaster()

  return (
    <>
      {toasts.map(({ id, children, ...props }) => (
        <Toast key={id} {...props}>
          {children}
          <ToastClose />
        </Toast>
      ))}
    </>
  )
}
