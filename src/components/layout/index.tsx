import * as React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, ButtonGroup, Progress } from '@heroui/react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import { useContext, useState, type ReactNode } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { layoutStrings } from '../../strings/layout';

interface LayoutProps {
  children?: ReactNode;
};

export default function Layout(props: LayoutProps) {
  const { children } = props;
  const location = useLocation();
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { setLanguage, language } = languageContext;
  const strings = layoutStrings;
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };
  console.log('navigation', navigation);
  const links : {href: string, text: string, external: boolean}[] = [
    {href: '/', text: strings.aboutMeLink[language], external: false},
    {href: '/portfolio', text: strings.portfolioLink[language], external: false},
    {href: '/snippets', text: strings.codeSnippetsLink[language], external: false},
    {href: 'https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/', text: strings.linkedInLink[language], external: true},
    {href: 'https://github.com/ndrinovsky', text: strings.gitHubLink[language], external: true}
  ];

  return (
    <>
      <Navbar isBordered onMenuOpenChange={setIsMenuOpen} isMenuOpen={isMenuOpen}>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='md:hidden w-16'
        />
        <NavbarBrand className='font-bold text-inherit text-center'>
          <p style={{ fontSize: '20px' }} className='w-full'>{`{ ${strings.developerName.en} }`}</p>
        </NavbarBrand>
        <NavbarContent className='hidden md:flex gap-4' justify='center'>
          {links.filter(link => !link.external).map((link, key) => 
            <NavbarItem isActive={location.pathname === link.href} key={key}>
              <Link color={location.pathname === link.href ? 'primary' : 'foreground'} href={link.href} className='w-full' size='lg'>
                {link.text}
              </Link>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent justify='end' className='hidden md:flex gap-4'>
          {links.filter(link => link.external).map((link, key) => 
            <NavbarItem key={key}>
              <Button as={Link} isExternal showAnchorIcon color='primary'  href={link.href} target='_blank' rel='noopener noreferrer' variant='flat'>
                {link.text}
              </Button>
            </NavbarItem>
          )}
        </NavbarContent>
        <NavbarContent className='hidden md:flex gap-4' justify='center'>
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
          {links.map((link, key) =>
            <NavbarMenuItem isActive={location.pathname === link.href} key={key} >
              <Link isExternal={link.external} showAnchorIcon={link.external} color={location.pathname === link.href || link.external ? 'primary' : 'foreground'} href={link.href} className='w-full' size='lg' onPress={() => setIsMenuOpen(false)}>
                {link.text}
              </Link>
            </NavbarMenuItem>
          )}
        </NavbarMenu>
      </Navbar>
      {navigation.state === 'loading' && <Progress isStriped isIndeterminate aria-label='Loading...' className='w-full' size='sm' />}
      <div className='flex flex-col items-center justify-center px-4 w-full h-auto max-w-6xl justify-self-center pt-4'>
        {children ?? <Outlet />}
      </div>
    </>
  );
}
