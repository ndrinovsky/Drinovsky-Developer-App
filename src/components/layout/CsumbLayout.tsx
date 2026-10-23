import * as React from 'react';
import { Button, ButtonGroup, cn, ProgressBar, Label } from '@heroui/react';
import { Outlet, useLocation, useNavigation } from 'react-router';
import { useContext, useState, type ReactNode } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { csumbLayoutStrings } from '../../strings/csumbLayout';
import NavLink from '../common/NavLink';
import csumbLogoColor from '../../img/csumb-logo-color.png';
import { useThemeDetector } from '../../hooks/darkThemeDetector';

interface ICsumbLayoutProps {
  children?: ReactNode;
};

export default function CsumbLayout(props: ICsumbLayoutProps) {
  const { children } = props;
  const location = useLocation();
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const languageContext = useContext(LanguageContext);
  const { setLanguage, language } = languageContext;
  const strings = csumbLayoutStrings;
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ja' : 'en');
  };
  const isDarkTheme = useThemeDetector();

  const links : {href: string, classNumber: string, className: string, external: boolean}[] = [
    {href: '#CST328', classNumber: strings.cst328[language], className: strings.cst328ClassName[language], external: false},
    {href: '#CST329', classNumber: strings.cst329[language], className: strings.cst329ClassName[language], external: false},
    {href: '#CST349', classNumber: strings.cst349[language], className: strings.cst349ClassName[language], external: false},
    {href: '#CST363', classNumber: strings.cst363[language], className: strings.cst363ClassName[language], external: false},
    {href: '#CST383', classNumber: strings.cst383[language], className: strings.cst383ClassName[language], external: false},
    {href: '#CST438', classNumber: strings.cst438[language], className: strings.cst438ClassName[language], external: false},
    {href: '#CST462S', classNumber: strings.cst462s[language], className: strings.cst462sClassName[language], external: false},
    {href: '#CST489', classNumber: strings.cst489[language], className: strings.cst489ClassName[language], external: false}
  ];

  React.useEffect(() => {
    setIsMenuOpen(false);
  }, [location.hash]);

  return (
    <>
      <nav className='sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg'>
        <header className='flex h-32 items-center px-6 mx-auto my-4 items-end max-w-6xl'>
          <div className='flex items-center gap-4 flex-grow-1'>
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
            <div className='flex flex-col items-center text-center'>
              <img
                src={csumbLogoColor}
                alt='Logo'
                className='h-24 w-auto'
              />
              <p style={{ fontSize: '20px' }} className='w-full'>{`{ ${strings.developerName.en} }`}</p>
            </div>
          </div>
        <ul className='flex items-center hidden md:flex gap-2 flex-grow-2 justify-center'>
          {links.filter(link => !link.external).map((link, key) => 
            <li className={cn(location.pathname === link.href && 'font-medium text-accent')} aria-current={location.pathname === link.href ? 'page' : undefined}  key={key}>
              <NavLink
                isExternal={link.external}
                isActive={location.hash === link.href}
                href={link.href}
                text={link.classNumber}
              />
            </li>
          )}
        </ul>
        <ul className='flex items-center hidden md:flex gap-4'>
          {links.filter(link => link.external).map((link, key) => 
            <li key={key}>
              <NavLink
                isExternal={link.external}
                isActive={location.hash === link.href}
                href={link.href}
                text={link.classNumber}
              />
            </li>
          )}
        </ul>
        <ul className='flex items-center hidden md:flex gap-4 flex-grow-1'>
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
                  <NavLink
                    isExternal={link.external}
                    isActive={location.hash === link.href}
                    href={link.href}
                    text={`${link.classNumber} (${link.className})`}
                  />
                </li>
              )}
            </ul>
          </div>
        )}
      </nav>
      {
        navigation.state === 'loading' && (
          <ProgressBar isIndeterminate className='w-full fixed top-38 left-0 z-50' size='sm'>
            <ProgressBar.Output />
            <ProgressBar.Track>
              <ProgressBar.Fill className='bg-[repeating-linear-gradient(45deg,_#e1e1e1_0,_#e1e1e1_1px,_transparent_0,_transparent_50%)] bg-[size:10px_10px] bg-fixed'/>
            </ProgressBar.Track>
          </ProgressBar>
        )
      }
      <div className='flex flex-col items-center justify-center px-4 w-full h-auto max-w-6xl justify-self-center pt-4 mx-auto'>
        {children ?? <Outlet />}
      </div>
    </>
  );
}
