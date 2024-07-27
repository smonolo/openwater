import type { PropsWithChildren } from 'react'

export default function AuthCard({ children }: PropsWithChildren) {
  return (
    <div className="flex w-full flex-col items-center gap-y-8">
      <h1 className="font-display text-center text-3xl font-semibold md:text-4xl">
        Ready to go <span className="text-blue-500">OpenWater</span>?
      </h1>
      <div className="h-fit w-full rounded-2xl border border-neutral-700 bg-neutral-800 p-10 md:w-[600px]">
        {children}
      </div>
    </div>
  )
}
