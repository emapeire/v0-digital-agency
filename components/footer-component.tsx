import Link from 'next/link'
import { links } from './nav-component'

export const date = new Date().getFullYear()

export function FooterComponent() {
  return (
    <footer className="w-full h-[20%] flex items-center justify-center text-zinc-100">
      <div className="flex flex-col items-center">
        <p className="text-base">© {date} Our Digital Agency</p>
        <ul className="flex space-x-10">
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link className="hover:text-blue-500" href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}