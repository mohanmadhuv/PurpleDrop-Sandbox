import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { href: "/concept1b#work", label: "Work" },
  { href: "/concept1b/about", label: "About" },
  { href: "/concept1b/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="w-full px-6 pt-6">
      <div className="flex items-center justify-between gap-6 lg:grid lg:grid-cols-3 lg:items-center">
        <Link href="/concept1b" className="flex w-fit shrink-0 items-center">
          <Image
            src="/logo-mark.png"
            alt="PurpleDrop"
            width={55}
            height={29}
            className="h-6 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-base font-normal tracking-tight lg:col-start-3 lg:flex">
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

        <Sheet>
          <SheetTrigger
            render={
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                aria-label="Open menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={
                    <Link
                      href={link.href}
                      className="rounded-md px-2 py-2.5 text-base font-normal text-black transition-colors hover:bg-muted"
                    />
                  }
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
