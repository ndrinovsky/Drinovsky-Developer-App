import React from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Card, CardBody, CardFooter, CardHeader, Divider } from '@heroui/react';
import styled from 'styled-components'

const ContentSection = styled.div`
  padding: 2rem;
  width: 100%;
  hight: auto;
  justify-content: center;
  justify-items: center;
  align-items: center;
`
const StyledCard = styled(Card)`
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
  max-width: 1024px;
  height: auto;
`;

export default function App() {
  return (
    <>
      <Navbar isBordered>
        <NavbarBrand>
          <p className='font-bold text-inherit' style={{ fontSize: '20px' }}>{'{ Nicholas Drinovsky }'}</p>
        </NavbarBrand>
        <NavbarContent className='hidden sm:flex gap-4' justify='center'>
          <NavbarItem>
            <Link color='foreground' href='#'>
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link aria-current='page' href='https://ndrinovsky.github.io/'>
              Portfolio
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='foreground' href='#'>
              Code Snippets
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify='end'>
          <NavbarItem>
            <Button as={Link} color='primary' href='https://www.linkedin.com/in/nicholas-drinovsky-003a7b7b/' target='_blank' rel='noopener noreferrer' variant='flat'>
              LinkedIn
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      <ContentSection className='px-6 flex w-full h-auto items-center justify-center'>
        <StyledCard>
          <CardHeader>
            Introduction
          </CardHeader>
          <CardBody>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </CardBody>
          <CardFooter>
            Site under construction.
          </CardFooter>
        </StyledCard>
      </ContentSection>
    </>
  );
}