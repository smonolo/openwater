import Link from 'next/link'

export default function PlanBanner() {
  return (
    <Link
      href="/publish"
      className="block rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 p-10 lg:rounded-3xl lg:p-14"
    >
      <h1 className="font-display text-2xl font-semibold lg:text-4xl">
        Planning your own event?
      </h1>
      <p className="mt-2 text-neutral-200">
        We got your back! Head over to the publish page and tell everyone what
        you&apos;re doing.
      </p>
    </Link>
  )
}
