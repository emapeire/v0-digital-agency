import Link from "next/link";

const links = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "About",
    route: "/about",
  },
  {
    label: "Social Proof",
    route: "/social-proof",
  },
  {
    label: "Form",
    route: "/form",
  },
];

export function NavComponent() {
  return (
    <header className="w-full flex text-zinc-100">
      <nav className="container mx-auto flex justify-center px-4 md:px-6 py-2">
        <ul className="flex gap-10 space-x-10">
          {links.map(({ label, route }) => (
            <li key={label}>
              <Link className="hover:text-zinc-400" href={route}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
