'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type props = {
  label: string;
  href: string;
};

const ModuleTab = ({ label, href }: props) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <div className="relative">
      <Link
        href={href}
        className={`text-m  text-neutral-400 ${
          isActive ? 'text-yellow-500' : ''
        }`}
      >
        {label}
      </Link>
      <h1
        className={`${
          isActive ? 'absolute top-12 h-1 w-full bg-yellow-500' : ''
        }`}
      ></h1>
    </div>
  );
};
export default ModuleTab;
