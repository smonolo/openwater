import Link from 'next/link'

type Props = {
  url: string
  text: string
}

export default function SwitchSection({ url, text }: Props) {
  return (
    <div>
      <span className="my-4 block w-full text-center text-sm uppercase text-neutral-400">
        Or
      </span>
      <Link
        href={url}
        className="block w-full rounded-lg bg-neutral-700/80 px-4 py-1.5 text-center font-semibold transition-colors hover:bg-neutral-700"
      >
        {text}
      </Link>
    </div>
  )
}
