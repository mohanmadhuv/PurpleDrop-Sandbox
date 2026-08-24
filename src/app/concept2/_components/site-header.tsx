import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/concept2#work", label: "Work" },
  { href: "/concept2/about", label: "About" },
  { href: "/concept2/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <div>
      <Link href="/concept2" className="flex w-fit shrink-0 items-center gap-3">
        <Image
          src="/logo.svg"
          alt="PurpleDrop"
          width={54}
          height={29}
          className="h-[29px] w-[54px]"
          priority
        />
        <span className="text-2xl leading-none tracking-tight text-brand">
          <span className="font-bold">Purple</span>
          <span className="font-light">Drop</span>
        </span>
      </Link>

      <nav className="mt-16 flex items-center gap-8 text-base font-normal tracking-tight">
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
