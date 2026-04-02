import Link from "next/link";

const NAV_LINKS = [
  { label: "Students", href: "#students" },
  { label: "Product", href: "#product" },
  { label: "Security", href: "#security" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
] as const;

const SOCIAL_LINKS = [
  { label: "LinkedIn", display: "in", href: "https://linkedin.com" },
  { label: "X", display: "X", href: "https://x.com" },
] as const;

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden w-full md:flex md:justify-center">
      <nav
        className="mx-auto flex w-full max-w-7xl items-center px-6 py-5"
        aria-label="Primary"
      >
        <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-4">
          <Link
            href="/"
            className="justify-self-start text-base font-semibold tracking-tight text-white/80 transition-colors hover:text-white"
          >
            EnterpriseGPT
          </Link>

          <ul className="flex items-center justify-center gap-10">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm font-medium text-white/80 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end gap-10 justify-self-end">
            {SOCIAL_LINKS.map(({ label, display, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-sm font-medium text-white/80 transition-colors hover:text-white"
              >
                {display}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
