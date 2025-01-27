import * as React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, ButtonGroup } from '@heroui/react';
import { Outlet, useLocation } from 'react-router';
import { styled } from 'styled-components';
import { useContext, useState, type ReactNode } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import { commonStrings } from '../../strings/common';

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
  const languageContext = useContext(LanguageContext);
  const { setLanguage, language } = languageContext;
  const strings = commonStrings;
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <>
      <Navbar isBordered onMenuOpenChange={setIsMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden w-16'
        />
        <NavbarBrand className='font-bold text-inherit text-center'>
          <p style={{ fontSize: '20px' }} className='w-full'>{`{ ${strings.developerName.en} }`}</p>
        </NavbarBrand>
        <NavbarContent className='hidden md:flex gap-4' justify='center'>
          <NavbarItem isActive={location.pathname === '/'} >
            <Link color={location.pathname === '/' ? 'primary' : 'foreground'} href='/' className='w-full' size='lg'>
              {strings.aboutMeLink[language]}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/portfolio'}>
            <Link color={location.pathname === '/portfolio' ? 'primary' : 'foreground'} href='/portfolio' className='w-full' size='lg'>
              {strings.portfolioLink[language]}
            </Link>
          </NavbarItem>
          <NavbarItem isActive={location.pathname === '/snippets'}>
            <Link color={location.pathname === '/snippets' ? 'primary' : 'foreground'} href='/snippets' className='w-full' size='lg'>
              {strings.codeSnippetsLink[language]}
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end' className='hidden md:flex gap-4'>
          <NavbarItem>
            <Button as={Link} isExternal showAnchorIcon color='primary' href='https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/' target='_blank' rel='noopener noreferrer' variant='flat'>
              {strings.linkedInLink[language]}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} isExternal showAnchorIcon color='primary' href='https://github.com/ndrinovsky' target='_blank' rel='noopener noreferrer' variant='flat'>
              {strings.gitHubLink[language]}
            </Button>
          </NavbarItem>
          <NavbarItem>
            <ButtonGroup size='sm'>
              <Button isDisabled={language === 'en'} onPress={toggleLanguage} size='sm'>English</Button>
              <Button isDisabled={language === 'ja'} onPress={toggleLanguage} size='sm'>日本語</Button>
            </ButtonGroup>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent className='md:hidden' justify='center'>
          {
            language === 'ja' ?
            <Button onPress={toggleLanguage}>English</Button> :
            <Button onPress={toggleLanguage}>日本語</Button>
          }
        </NavbarContent>
        <NavbarMenu>
          <NavbarMenuItem isActive={location.pathname === '/'} >
            <Link color={location.pathname === '/' ? 'primary' : 'foreground'} href='/' className='w-full' size='lg'>
              {strings.aboutMeLink[language]}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={location.pathname === '/portfolio'}>
            <Link color={location.pathname === '/portfolio' ? 'primary' : 'foreground'} href='/portfolio' className='w-full' size='lg'>
              {strings.portfolioLink[language]}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive={location.pathname === '/snippets'}>
            <Link color={location.pathname === '/snippets' ? 'primary' : 'foreground'} href='/snippets'  className='w-full' size='lg'>
              {strings.codeSnippetsLink[language]}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link isExternal showAnchorIcon color='primary' href='https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/' target='_blank' rel='noopener noreferrer' className='w-full' size='lg'>
              {strings.linkedInLink[language]}
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link isExternal showAnchorIcon color='primary' href='https://github.com/ndrinovsky' target='_blank' rel='noopener noreferrer' className='w-full' size='lg'>
              {strings.gitHubLink[language]}
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
