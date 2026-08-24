import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/concept2b#work", label: "Work" },
  { href: "/concept2b/about", label: "About" },
  { href: "/concept2b/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <div className="flex w-full max-w-[660px] items-center justify-between">
      <Link href="/concept2b" className="flex w-fit shrink-0 items-center">
        <Image
          src="/logo.svg"
          alt="PurpleDrop"
          width={108}
          height={16}
          className="h-4 w-auto"
          priority
        />
      </Link>

      <nav className="flex items-center gap-8 text-base font-normal tracking-tight">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-muted-text transition-colors hover:text-black"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
