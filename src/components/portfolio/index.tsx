import * as React from 'react';
import { Card, CardBody, CardHeader, Link } from '@heroui/react';
import { portfolioStrings } from '../../strings/portfolio';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { portfolioProjects } from './portfolioProjects';

export default function Portfolio() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = portfolioStrings;
  return (
    <>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <p>{strings.description[language]}</p><br />
      <p><Link isExternal showAnchorIcon href={'https://ndrinovsky.github.io/'}>{strings.legacyPortfolioLinkText[language]}</Link></p>
      {portfolioProjects.map((project, index) => {
        return (
          <Card key={index} className='w-full my-2 p-2'>
            <CardHeader>
              <div className='text-2xl font-bold tracking-tight'>{project.title[language]}</div>
            </CardHeader>
            <CardBody>
              <div className='text-body tracking-tight'>{project.description[language]}</div><br />
              <div className='text-body tracking-tight'>{strings.technologiesUsed[language]}: {project.technologies.join(', ')}</div><br />
              <div className='flex flex-row gap-2'>
                {project.githubLink && <Link isExternal showAnchorIcon href={project.githubLink}>{strings.githubLinkText[language]}</Link>}
                {project.liveLink && <Link isExternal showAnchorIcon href={project.liveLink}>{strings.liveLinkText[language]}</Link>}
              </div>
              <div className='flex flex-row gap-2'>
                {project.imageURLs.map((url, index) => {
                  return (
                    <img key={index} src={url} alt={project.title[language]} className='w-1/4 h-1/4' />
                  );
                })}
              </div>
            </CardBody>
          </Card>
        );
      })}
    </>
  );
}
