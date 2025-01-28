import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Link } from '@heroui/react';
import { styled } from 'styled-components';
// import { useLoaderData } from "react-router";
import { portfolioStrings } from '../../strings/portfolio';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;


export default function Portfolio() {
  // const loaderData = useLoaderData();
  // console.log(loaderData);
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = portfolioStrings;
  return (
    <StyledCard>
      <CardHeader>
        <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div>
      </CardHeader>
      <CardBody>
        <Link isExternal showAnchorIcon color={location.pathname === '/portfolio' ? 'primary' : 'foreground'} href='https://ndrinovsky.github.io/' className='w-full' size='lg'>
          Legacy Portfolio
        </Link>
      </CardBody>
      <CardFooter>
        Site under construction.
      </CardFooter>
    </StyledCard>
  );
}
