import * as React from 'react';
import { Card, Separator, Link } from '@heroui/react';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import devPhoto from '../../img/devPhoto.png';
import { csumbHomepageStrings } from '../../strings/csumbHomepage';
import { csumbClasses } from './classes';


export default function CsumbHome() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = csumbHomepageStrings;

  return (
    <>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <Card className='w-full my-2 p-2'>
        <Card.Content className='m-4'>
          <div className='flex flex-row justify-center items-center gap-4 '>
            <div className='w-full hidden md:flex'>
              <Separator />
            </div>
            <div className='w-full flex justify-center flex-col items-center gap-4'>
              <div className="relative overflow-hidden rounded-full">
                <img
                  alt={'developer'}
                  src={devPhoto}
                  width={240}
                  height={240}
                  className="object-cover transition-transform duration-300 hover:scale-125"
                />
              </div>
              <p className='text-2xl font-bold tracking-tight'>{strings.developerName[language]}</p>
              <p className='text-1xl tracking-tight italic'>{strings.developerTitle[language]}</p>
              <p className='text-1xl tracking-tight bold'>
                <Link href={`mailto:${strings.devloperEmail[language]}`}  target='_blank' rel='noreferrer' className='w-full'>
                  {strings.devloperEmail[language]}
                </Link>
              </p>
            </div>
            <div className='w-full hidden md:flex'>
              <Separator />
            </div>
          </div>
          <Separator className='my-4' />
          <div className='text-2xl font-bold tracking-tight text-center'>
            {strings.biographyLabel[language]}
          </div>
          <p>
            {strings.bio[language]}
          </p>
          <Separator className='my-4' />
          <div className='text-2xl font-bold tracking-tight text-center'>
            {strings.programOutcomesLabel[language]}
          </div>
          <p>{strings.programOutcomes[language]}</p><br />
          <Separator className='my-4' />
          <div className='text-2xl font-bold tracking-tight text-center'>
            {strings.personalGoalsLabel[language]}
          </div>
          <p>{strings.personalGoals[language]}</p><br />
        </Card.Content>
      </Card>
      {
        csumbClasses.sort((a, b) => a.courseNumber.en.localeCompare(b.courseNumber.en)).map((csumbClass, index) => (
          <Card className='w-full my-2 p-2' key={index} id={`${csumbClass.courseNumber[language].replace(/\s+/g, '')}`}>
            <Card.Header className='text-center'>
              <a className='text-2xl font-bold tracking-tight' href={`#${csumbClass.courseNumber[language].replace(/\s+/g, '')}`}>{csumbClass.courseNumber[language]}</a>
            </Card.Header>
            <Card.Content className='m-4'>
              <div className='w-full flex justify-center flex-col items-center gap-4'>
                <p className='text-2xl font-bold tracking-tight'>{csumbClass.courseTitle[language]}</p>
              </div>
              <p>{csumbClass.courseDescription[language]}</p>
              {csumbClass.children && <>{csumbClass.children}</>}
            </Card.Content>
          </Card>
        ))
      }
    </>
  );
}
