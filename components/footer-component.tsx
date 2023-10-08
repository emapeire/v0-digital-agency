import Link from 'next/link'

export function FooterComponent() {
  return (
    <footer className="w-full h-[20%] bg-zinc-900 dark:bg-zinc-50 flex items-center justify-center text-zinc-50 dark:text-zinc-900">
      <div className="flex flex-col items-center">
        <p className="text-base">© 2023 Our Digital Agency</p>
        <div className="flex space-x-4">
          <Link className="hover:text-zinc-100 dark:hover:text-zinc-800" href="#">
            About Us
          </Link>
          <Link className="hover:text-zinc-100 dark:hover:text-zinc-800" href="#">
            Our Services
          </Link>
          <Link className="hover:text-zinc-100 dark:hover:text-zinc-800" href="#">
            Contact Us
          </Link>
        </div>
      </div>
    </footer>
  )
}