import Link from 'next/link'
import data from '@/package.json'
import logo from '@/assets/images/logo.png'
import Image from 'next/image'

type Item = {
  text: string
  url: string
}

type Section = {
  title: string
  items: Item[]
}

const sections: Section[] = [
  {
    title: 'Product',
    items: [
      {
        text: 'Explore',
        url: '/'
      },
      {
        text: 'Publish',
        url: '/publish'
      },
      {
        text: 'About',
        url: '/about'
      }
    ]
  },
  {
    title: 'Connect',
    items: [
      {
        text: 'GitHub',
        url: 'https://git.new/openwater'
      }
    ]
  }
]

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="content:px-0 mx-auto flex w-full max-w-[1200px] flex-col gap-y-5 px-5 py-5">
        <div className="flex flex-col gap-y-5 lg:flex-row lg:flex-wrap lg:justify-between lg:gap-x-5">
          <div className="flex w-fit flex-col gap-y-2">
            <div className="flex w-fit items-center gap-x-2">
              <Image src={logo} alt="OpenWater white logo" className="w-12" />
              <span className="font-display text-2xl font-semibold">
                OpenWater
              </span>
            </div>
            <p className="text-sm text-neutral-400">
              Open water swimming competitions and trainings.
            </p>
          </div>
          {sections.map((section, index) => (
            <div key={index} className="flex w-fit flex-col gap-y-2">
              <span className="text-xl font-semibold">{section.title}</span>
              <ul>
                {section.items.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.url}
                      className="text-neutral-400 transition-colors hover:text-neutral-200"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="h-px bg-neutral-800" />
        <div className="flex flex-col items-center justify-between gap-x-4 gap-y-1 text-sm text-neutral-400 md:flex-row">
          <span>© {new Date().getFullYear()} OpenWater</span>
          <span>
            <Link
              href="https://git.new/openwater"
              target="_blank"
              className="transition-colors hover:text-neutral-200"
            >
              OpenWater v{data.version}
            </Link>
            . Made by{' '}
            <Link
              href="https://smnl.dev"
              target="_blank"
              className="text-neutral-200 transition-colors hover:text-blue-500"
            >
              Stefano Monolo
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}
