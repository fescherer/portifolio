import * as Dialog from '@radix-ui/react-dialog'
import React, { Dispatch, SetStateAction } from 'react'

type ResponsiveDialogProps = {
  state: unknown
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setState: Dispatch<SetStateAction<any>>
  children: JSX.Element
}

export default function ResponsiveDialog({
  state,
  setState,
  children
}: ResponsiveDialogProps) {
  return (
    <Dialog.Root open={!!state}>
      <Dialog.Portal>
        <Dialog.Overlay
          onClick={() => setState('')}
          className="fixed inset-0 h-full w-full bg-overlay"
        />
        <Dialog.Content>{children}</Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
