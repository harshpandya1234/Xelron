'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const pathname = usePathname();

  // Navigation links
  const mainLinks = [
    { name: 'Sesame', href: '/' },
    { name: 'Research', href: '/research/crossing_the_uncanny_valley_of_voice' },
    { name: 'Team', href: '/team' },
  ];

  const secondaryLinks = [
    { name: 'Demo', href: '/research/crossing_the_uncanny_valley_of_voice#demo' },
    { name: 'Log in', href: '/login' },
  ];

  // Check if a link is active
  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <aside className="w-64 fixed h-full p-8 border-r border-gray-100 bg-background">
      <div className="flex flex-col h-full">
        <Link href="/">
          <div className="mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19.5 3h-15A1.5 1.5 0 003 4.5v15A1.5 1.5 0 004.5 21h15a1.5 1.5 0 001.5-1.5v-15A1.5 1.5 0 0019.5 3z" fill="currentColor"/>
            </svg>
          </div>
        </Link>

        <nav className="flex flex-col space-y-4">
          <ul className="space-y-2">
            {mainLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'sidebar-link block',
                    isActive(link.href) && 'sidebar-link-active'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10" />

          <ul className="space-y-2">
            {secondaryLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'sidebar-link block',
                    isActive(link.href) && 'sidebar-link-active'
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
