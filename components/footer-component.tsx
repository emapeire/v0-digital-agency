import Link from 'next/link'
import { links } from './nav-component'

export const date = new Date().getFullYear()

export function FooterComponent() {
  return (
    <footer className="w-full h-[20%] text-zinc-100 py-6">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        <p className="text-base">© {date} Our Digital Agency</p>
        <ul className="flex gap-4 md:gap-10">
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link className="hover:text-blue-500 transition-colors duration-300" href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
