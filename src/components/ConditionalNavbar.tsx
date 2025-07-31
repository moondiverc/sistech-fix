"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");

  if (isDashboard) return null;

  return (
    <header className="py-10 h-15 text-black flex px-4 items-center justify-center">
      <div className="bg-white/10 border border-white rounded-2xl max-w-6xl w-full flex items-center justify-between">
        <Link href="./" className="flex items-center gap-x-2">
          <Image
            src="/logo-transparent.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </Link>
        <div className="flex gap-x-10 justify-center w-full font-bold text-lg">
          <Link href="./">Home</Link>
          <Link href="./dashboard">Dashboard</Link>
          <Link href="./features">Features</Link>
          <Link href="./community">Community</Link>
          <Link href="./about">About</Link>
        </div>
        <button>GetStarted!</button>
      </div>
    </header>
  );
}
