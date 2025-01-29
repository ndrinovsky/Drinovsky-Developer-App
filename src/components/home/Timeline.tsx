import * as React from 'react';
import pkg from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useThemeDetector } from '../../hooks/darkThemeDetector';
import { BriefcaseIcon, AcademicCapIcon, CodeBracketIcon, PresentationChartLineIcon } from '@heroicons/react/24/solid';
import { workHistory } from './workHistory';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { Divider } from '@heroui/react';

export default function Timeline() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const { VerticalTimeline, VerticalTimelineElement } = pkg;
  const isDarkTheme = useThemeDetector();

  return (
    <VerticalTimeline
      lineColor={isDarkTheme ? '#fff' : '#333'}
    >
      {
        workHistory.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            contentStyle={{
              background: isDarkTheme ? 'hsl(var(--heroui-dark) / var(--heroui-dark-opacity, var(--tw-text-opacity)))' : 'hsl(var(--heroui-light) / var(--heroui-primary-light, var(--tw-text-opacity)))', 
              border:  isDarkTheme ? '1px solid white' : '1px solid black',
            }}
            contentArrowStyle={{ borderRight: isDarkTheme ? '7px solid white' : '7px solid black' }}
            date={item.date}
            iconClassName='bg-black'
            icon={
              item.type === 'job' ? <BriefcaseIcon style={{color: 'white'}}/> : 
              item.type === 'project' ? <CodeBracketIcon style={{color: 'white'}}/> : 
              item.type === 'education' ? <AcademicCapIcon style={{color: 'white'}}/> : 
              <PresentationChartLineIcon style={{color: 'white'}}/>
            }
            dateClassName={isDarkTheme ? 'text-white' : 'text-black'}
          >
            <div className='font-bold text-lg'>{item.company[language]}</div>
            <Divider />
            <div className='italic text-md'>{item.title[language]}</div>
            <div className='font-bold text-md'>{item.location[language]}</div>
            <p>
              {item.description[language]}
            </p>
          </VerticalTimelineElement>
        ))
      }
    </VerticalTimeline>
  );
}
