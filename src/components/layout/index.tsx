import * as React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from '@heroui/react';
import { Outlet, useLocation } from 'react-router';
import { styled } from 'styled-components';
import { useState, type ReactNode } from "react";

interface LayoutProps {
  children?: ReactNode;
};

const ContentSection = styled.div`
  padding: 2rem;
  width: 100%;
  hight: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
`;

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className='font-bold text-inherit' style={{ fontSize: '20px' }}>{'{ Nicholas Drinovsky }'}</p>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem isActive={location.pathname === '/'} >
            <Link color={location.pathname === '/' ? 'primary' : 'foreground'} href='/'>
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/portfolio'}>
            <Link isExternal showAnchorIcon color={location.pathname === '/portfolio' ? 'primary' : 'foreground'} href='https://ndrinovsky.github.io/'>
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/snippets'}>
            <Link color={location.pathname === '/snippets' ? 'primary' : 'foreground'} href='/snippets'>
              Code Snippets
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} isExternal showAnchorIcon color='primary' href='https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/' target='_blank' rel='noopener noreferrer' variant='flat'>
              LinkedIn
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} isExternal showAnchorIcon color='primary' href='https://github.com/ndrinovsky' target='_blank' rel='noopener noreferrer' variant='flat'>
              GitHub
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem isActive={location.pathname === '/'} >
            <Link color={location.pathname === '/' ? 'primary' : 'foreground'} href='/' className="w-full" size="lg">
              About Me
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={location.pathname === '/portfolio'}>
            <Link isExternal showAnchorIcon color={location.pathname === '/portfolio' ? 'primary' : 'foreground'} href='https://ndrinovsky.github.io/' className="w-full" size="lg">
              Portfolio
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={location.pathname === '/snippets'}>
            <Link color={location.pathname === '/snippets' ? 'primary' : 'foreground'} href='/snippets'  className="w-full" size="lg">
              Code Snippets
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
      <ContentSection className='px-6 flex w-full h-auto items-center justify-center'>
        {children ?? <Outlet />}
      </ContentSection>
    </>
  );
}
