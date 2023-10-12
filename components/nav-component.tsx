import Link from "next/link";

export const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About Us",
    route: "/about-us",
  },
  {
    label: "Social Proof",
    route: "/social-proof",
  },
  {
    label: "Contact Us",
    route: "/contact-us",
  },
];

export function NavComponent() {
  return (
    <header className="w-full text-zinc-100 shadow-md pt-4">
      <nav className="container mx-auto flex justify-center px-4 md:px-6 py-2">
        <ul className="flex gap-4 md:gap-10 space-x-4 md:space-x-10">
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link className="text-lg font-medium py-1 px-2 transition duration-300 hover:bg-blue-500 hover:text-white rounded" href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
