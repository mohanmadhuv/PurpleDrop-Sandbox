import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/concept2a#work", label: "Work" },
  { href: "/concept2a/about", label: "About" },
  { href: "/concept2a/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <div className="grid w-full max-w-[660px] grid-cols-3 items-center">
      <Link href="/concept2a" className="flex w-fit shrink-0 items-center justify-self-start">
        <Image
          src="/logo-mark.png"
          alt="PurpleDrop"
          width={55}
          height={29}
          className="h-6 w-auto"
          priority
        />
      </Link>

      <nav className="col-start-3 flex items-center justify-self-end gap-8 text-base font-normal tracking-tight">
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
