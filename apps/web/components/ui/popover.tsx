import type { PropsWithChildren, ReactNode } from 'react'

type Props = {
  trigger: ReactNode
}

export default function Popover({
  children,
  trigger
}: PropsWithChildren<Props>) {
  return (
    <div className="group relative">
      <div>{trigger}</div>
      <div className="absolute right-0 top-full hidden w-fit min-w-[150px] pt-3 shadow-lg group-hover:block">
        <div className="rounded-lg bg-neutral-800/80 p-3 backdrop-blur">
          {children}
        </div>
      </div>
    </div>
  )
}
