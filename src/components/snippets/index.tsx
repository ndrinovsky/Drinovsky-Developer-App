import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { styled } from 'styled-components';
import { snippetStrings } from '../../strings/snippets';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';

const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;


export default function Snippets() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = snippetStrings;
  return (
    <StyledCard>
      <CardHeader>
        <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div>
      </CardHeader>
      <CardBody>
        <p>{strings.descriptionContentP1[language]}</p><br />
      </CardBody>
      <CardFooter>
      </CardFooter>
    </StyledCard>
  );
}
