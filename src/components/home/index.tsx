import * as React from "react";
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { styled } from 'styled-components';
import { useLoaderData } from "react-router";
import { homeStrings } from "../../strings/home";
import { LanguageContext } from "../../context/LanguageContext";
import { useContext } from "react";

const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;


export default function Home() {
  const loaderData = useLoaderData();
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  console.log(loaderData);
  const strings = homeStrings;
  return (
    <StyledCard>
      <CardHeader>
        {strings.title[language]}
      </CardHeader>
      <CardBody>
        {strings.description[language]}
      </CardBody>
      <CardFooter>
        {strings.description[language]}
      </CardFooter>
    </StyledCard>
  );
}
