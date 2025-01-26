import * as React from "react";
import { Card, CardBody, CardFooter, CardHeader, Link } from '@heroui/react';
import { styled } from 'styled-components';
import { useLoaderData } from "react-router";

const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;


export default function Portfolio() {
  const loaderData = useLoaderData();
  console.log(loaderData);
  return (
    <StyledCard>
      <CardHeader>
        Portfolio
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
