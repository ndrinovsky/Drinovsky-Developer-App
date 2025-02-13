import * as React from 'react';
import { Card, CardBody, CardHeader, Divider, Link } from '@heroui/react';
import { homeStrings } from '../../strings/home';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { Image } from '@heroui/react';
import StackIcon from 'tech-stack-icons';
import Timeline from './Timeline';
import { techStack } from './techstack';
import devPhoto from '../../img/devPhoto.png';

export default function Home() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = homeStrings;

  return (
    <>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <Card className='w-full my-2 p-2'>
        <CardBody>
          <div className='flex flex-row justify-center items-center gap-4 '>
            <div className='w-full hidden md:flex'>
              <Divider />
            </div>
            <div className='w-full flex justify-center flex-col items-center gap-4'>
              <Image
                isZoomed
                alt={'developer'}
                src={devPhoto}
                width={240}
                height={240}
                className='rounded-full'
              />
              <p className='text-2xl font-bold tracking-tight'>{strings.developerName[language]}</p>
              <p className='text-1xl tracking-tight italic'>{strings.developerTitle[language]}</p>
              <p className='text-1xl tracking-tight bold'>
                <Link color='primary' href={`mailto:${strings.devloperEmail[language]}`}  target='_blank' rel='noreferrer' className='w-full' size='lg'>
                  {strings.devloperEmail[language]}
                </Link>
              </p>
            </div>
            <div className='w-full hidden md:flex'>
              <Divider />
            </div>
          </div>
          <Divider className='my-4' />
          <p>{strings.introductionSectionContentP1[language]}</p><br />
          <p>{strings.introductionSectionContentP2[language]}</p><br />
          <p>{strings.introductionSectionContentP3[language]}</p><br />
        </CardBody>
      </Card>
      <Card className='w-full my-2 p-2'>
        <CardHeader>
          <div className='text-3xl font-bold tracking-tight'>{strings.skillsSectionTitle[language]}</div>
        </CardHeader>
        <Divider className='my-4' />
        <CardBody>
        <div className='text-2xl font-bold tracking-tight w-full text-center mb-4'>{strings.professionalSkillsSubtitle[language]}</div>
        <div className='md:flex flex-row justify-center items-start gap-4 '>
          <div className='w-full md:flex justify-center flex-col items-center'>
            <div className='text-lg font-bold tracking-tight text-center'>{strings.professionalSkillsLeadershipHeader[language]}</div>
            <Divider className='my-4' />
            <p>{strings.professonalSkillsLeadershipContent[language]}</p>
          </div>
          <div className='w-full md:flex justify-center flex-col items-center'>
            <div className='text-lg font-bold tracking-tight w-full text-center'>{strings.professionalSkillsCommunicationHeader[language]}</div>
            <Divider className='my-4' />
            <p>{strings.professionalSkillsCommunicationContent[language]}</p>
          </div>
          <div className='w-full md:flex justify-center flex-col items-center'>
            <div className='text-lg font-bold tracking-tight text-center'>{strings.professionalSkillsInnovationHeader[language]}</div>
            <Divider className='my-4' />
            <p>{strings.professionalSkillsInnovationContent[language]}</p>
          </div>
        </div>
        <Divider className='my-4' />
        <div className='text-2xl font-bold tracking-tight w-full text-center mb-4'>{strings.techStackSubtitle[language]}</div>
        <div className='flex flex-row gap-4 flex-wrap justify-center'>
          {techStack.map((item, key) =>
            <div key={key}>
              <StackIcon name={item.iconName} />
              <p className='w-full text-center'>{item.name}</p>
            </div>
          )}
        </div>
        </CardBody>
      </Card>
      <Card className='w-full my-2 p-2'>
        <CardHeader>
          <div className='text-3xl font-bold tracking-tight'>{strings.workHistorySectionTitle[language]}</div>
        </CardHeader>
        <Divider className='my-4' />
        <CardBody className='flex flex-row gap-4 flex-wrap justify-center'>
          <Timeline />
        </CardBody>
      </Card>
    </>
  );
}
