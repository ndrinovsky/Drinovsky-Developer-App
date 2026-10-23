import { cn, Link } from '@heroui/react';
import { Link as RouterLink } from 'react-router';

interface INavLinkProps {
  isExternal: boolean;
  isActive: boolean;
  href: string;
  text: string;
};

export default function NavLink(props: INavLinkProps) {
  const { isExternal, isActive, href, text } = props;
  return (
    <RouterLink to={href} className={cn('w-full flex', isActive && 'font-medium text-accent bg-primary')}>
      {text}
      {isExternal && <Link.Icon />}
    </RouterLink>
  );
}