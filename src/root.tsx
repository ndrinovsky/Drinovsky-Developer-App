import { HeroUIProvider } from '@heroui/react';
import * as React from 'react';
import { isRouteErrorResponse, Links, Meta, Outlet, Scripts, ScrollRestoration, useHref, useNavigate } from 'react-router';
import NavLayout from './components/layout';
import { LanguageContext } from './contexts/LanguageContext';
import { useThemeDetector } from './hooks/darkThemeDetector';
import { useCallback, useState } from 'react';

interface ErrorBoundaryProps {
  error: unknown;
};

export function ErrorBoundary(props: ErrorBoundaryProps) {
  const { error } = props;
  return (
    <HeroUIProvider>
      <main className='dark text-foreground bg-background'>
        <NavLayout>
          {isRouteErrorResponse(error) ? 
            <>
              <h1>
                {error.status} {error.statusText}
              </h1>
              <p>
                {error.data}
              </p>
            </> : 
            (error instanceof Error) ?
            <div>
              <h1>Error</h1>
              <p>{error.message}</p>
              <p>The stack trace is:</p>
              <pre>{error.stack}</pre>
            </div> : 
            <h1>Unknown Error</h1>
          }
        </NavLayout>
      </main>
    </HeroUIProvider>
  );
}

export function Layout({children}: { children: React.ReactNode;})
{
  return (
    <html lang='en' className='dark text-foreground bg-background'>
      <head>
        <meta charSet='utf-8' />
        <link rel='icon' crossOrigin='use-credentials' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Nicholas Drinovsky Personal Dev Site'
        />
        <link rel='apple-touch-icon' crossOrigin='use-credentials' href='/logo192.png' />
        <link rel='manifest' crossOrigin='use-credentials' href='/manifest.json' />
        <title>Nicholas Drinovsky</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  const isDarkTheme = useThemeDetector();
  const storedLanguage = window.sessionStorage.getItem('language');
  const initialLanguage = storedLanguage ? storedLanguage as 'en' | 'ja' : navigator.language === 'ja' ? 'ja' :'en';
  const [language, setLanguage] = useState<'en' | 'ja'>(initialLanguage);
  const navigate = useNavigate();

  const toggleLanguage = useCallback((language: 'en' | 'ja') => {
    window.sessionStorage.setItem('language', language);
    setLanguage(language);
  }, []);

  return (
    <HeroUIProvider navigate={navigate} useHref={useHref}>
        <LanguageContext.Provider value={{ language, setLanguage: toggleLanguage }}>
          <main className={`${isDarkTheme ? 'dark' : 'light'} text-foreground bg-background`}>
            <Outlet />
          </main>
        </LanguageContext.Provider>
    </HeroUIProvider>
  );
}
