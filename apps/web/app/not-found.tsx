import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="px-5 py-32 text-center">
      <h1 className="font-display text-3xl font-semibold lg:text-4xl">
        Nothing here!
      </h1>
      <p className="mt-2 text-neutral-200">
        It looks like you went a bit too far, and now you&apos;re lost.
        It&apos;s better if you go back to safety.
      </p>
      <Link
        href="/"
        className="mx-auto mt-10 block w-fit rounded-lg bg-blue-500 px-4 py-1.5 font-semibold transition-colors hover:bg-blue-500/80"
      >
        Back to Safety
      </Link>
    </div>
  )
}
