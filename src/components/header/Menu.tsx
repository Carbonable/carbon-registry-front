'use client';

import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();
  return (
    <ul className="flex gap-4 justify-start">
      <li><a href="/" className={`hover:text-neutral-50 ${pathname === '/' ? 'text-greenish-500 hover:text-greenish-500' : ''}`}>Projects</a></li>
      <li><a href="/carbon-credits" className={`hover:text-neutral-50 ${pathname === '/carbon-credits' ? 'text-greenish-500 hover:text-greenish-500' : ''}`}>Carbon Credits</a></li>
    </ul>
  );
}