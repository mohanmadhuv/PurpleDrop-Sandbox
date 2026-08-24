import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/concept2a#work", label: "Work" },
  { href: "/concept2a/about", label: "About" },
  { href: "/concept2a/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <div className="flex w-full max-w-[720px] items-center justify-between">
      <Link href="/concept2a" className="flex w-fit shrink-0 items-center gap-3">
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
