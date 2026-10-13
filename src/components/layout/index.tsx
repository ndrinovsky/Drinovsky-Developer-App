import * as React from 'react';
import { Link, Button, ButtonGroup, cn, ProgressBar, Label } from '@heroui/react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import NavLink from './NavLink';
import { useContext, useState, type ReactNode } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { layoutStrings } from '../../strings/layout';

interface ILayoutProps {
  children?: ReactNode;
};

export default function Layout(props: ILayoutProps) {
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
  
  const links : {href: string, text: string, external: boolean}[] = [
    {href: '/', text: strings.aboutMeLink[language], external: false},
    {href: '/portfolio', text: strings.portfolioLink[language], external: false},
    {href: '/snippets', text: strings.codeSnippetsLink[language], external: false},
    {href: 'https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/', text: strings.linkedInLink[language], external: true},
    {href: 'https://github.com/ndrinovsky', text: strings.gitHubLink[language], external: true}
  ];

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav className='sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg'>
        <header className='flex h-16 items-center justify-between px-6 max-w-5xl mx-auto'>
          <div className='flex items-center gap-4'>
            <button
              className='md:hidden'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label='Toggle menu'
            >
              <span className='sr-only'>Menu</span>
              <svg
                className='h-6 w-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
            <div>
              <p style={{ fontSize: '20px' }} className='w-full'>{`{ ${strings.developerName.en} }`}</p>
            </div>
          </div>
        <ul className='flex items-center hidden md:flex gap-4'>
          {links.filter(link => !link.external).map((link, key) => 
            <li className={cn(location.pathname === link.href && 'font-medium text-accent')} aria-current={location.pathname === link.href ? 'page' : undefined}  key={key}>
              <NavLink
                isExternal={link.external}
                isActive={location.pathname === link.href}
                href={link.href}
                text={link.text}
              />
            </li>
          )}
        </ul>
        <ul className='flex items-center hidden md:flex gap-4'>
          {links.filter(link => link.external).map((link, key) => 
            <li key={key}>
              <NavLink
                isExternal={link.external}
                isActive={location.pathname === link.href}
                href={link.href}
                text={link.text}
              />
            </li>
          )}
        </ul>
        <ul className='flex items-center hidden md:flex gap-4'>
          <li>
            <ButtonGroup size='md' variant='tertiary'>
              <Button isDisabled={language === 'en'} onPress={toggleLanguage} size='md'>English</Button>
              <Button isDisabled={language === 'ja'} onPress={toggleLanguage} size='md'>日本語</Button>
            </ButtonGroup>
          </li>
        </ul>
        <ul className='flex items-center xs:flex md:hidden gap-4'>
          <li>
            {
              language === 'ja' ?
              <Button onPress={toggleLanguage}>English</Button> :
              <Button onPress={toggleLanguage}>日本語</Button>
            }
          </li>
        </ul>
        </header>
        {isMenuOpen && (
          <div className='border-t border-separator md:hidden'>
            <ul className='flex flex-col gap-2 p-4'>
              {links.map((link, key) =>
                <li className={cn(location.pathname === link.href && 'font-medium text-accent')} aria-current={location.pathname === link.href ? 'page' : undefined} key={key} >
                  <Link href={link.href} className={cn('w-full', location.pathname === link.href && 'font-medium text-accent bg-primary')} onPress={() => setIsMenuOpen(false)}>
                    {link.text}
                    {link.external && <Link.Icon />}
                  </Link>
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
      {
        navigation.state === 'loading' && (
          <ProgressBar isIndeterminate className='w-full fixed top-14 left-0 z-50' size='sm'>
            <ProgressBar.Output />
            <ProgressBar.Track>
              <ProgressBar.Fill className='bg-[repeating-linear-gradient(45deg,_#e1e1e1_0,_#e1e1e1_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed'/>
            </ProgressBar.Track>
          </ProgressBar>
        )
      }
      <div className='flex flex-col items-center justify-center px-4 w-full h-auto max-w-6xl justify-self-center pt-4'>
        {children ?? <Outlet />}
      </div>
    </>
  );
}
