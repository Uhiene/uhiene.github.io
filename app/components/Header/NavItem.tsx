// Inside./components/NavItem.tsx

import Link from 'next/link';

interface NavItemProps {
  text: string;
  href: string;
  active?: boolean; // Optional because it's not always necessary to know if a nav item is active
}

const NavItem: React.FC<NavItemProps> = ({ text, href, active = false }) => {
  return (
    <Link href={href} passHref>
      <p className={`nav__item  text-slate-500 font-medium mb-2 lg:mb-0 ${active? 'active' : 'text-pink-500'}`}>{text}</p>
    </Link>
  );
};

export default NavItem;
