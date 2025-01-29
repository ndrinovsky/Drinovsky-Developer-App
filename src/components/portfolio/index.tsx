import * as React from 'react';
import { Card, CardBody, CardHeader, Link } from '@heroui/react';
import { portfolioStrings } from '../../strings/portfolio';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

export default function Portfolio() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = portfolioStrings;
  return (
    <>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <p>{strings.description[language]}</p><br />
      <p><Link isExternal showAnchorIcon href={'https://ndrinovsky.github.io/'}>{strings.legacyPortfolioLinkText[language]}</Link></p>
      
      <Card className='w-full my-2 p-2'>
        <CardHeader>
          <div className='text-3xl font-bold tracking-tight'>{strings.projectSectionTitle[language]}</div>
        </CardHeader>
        <CardBody>
          <p>{strings.description[language]}</p><br />
        </CardBody>
      </Card>
    </>
  );
}
