import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="w-full px-6 pt-6 md:px-20 lg:px-40 lg:pt-10">
      <Link href="/concept3" className="flex w-fit shrink-0 items-center gap-3">
        <Image
          src="/logo.svg"
          alt="PurpleDrop"
          width={54}
          height={29}
          className="h-[29px] w-[54px]"
          priority
        />
        <span
          className="text-2xl leading-none tracking-[-0.02em]"
          style={{ color: "#3b2577" }}
        >
          <span className="font-bold">Purple</span>
          <span className="font-light">Drop</span>
        </span>
      </Link>
    </header>
  );
}
