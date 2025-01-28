import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import { snippetStrings } from '../../strings/snippets';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { CodeBlock, vs2015 } from 'react-code-blocks';
import { useLoaderData } from 'react-router';
import type { IGist } from '../../interfaces/IGist';

export default function Snippets() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = snippetStrings;
  const loaderData = useLoaderData();
  const gists: IGist[] = loaderData;
  
  return (
    <div className='flex flex-col items-center justify-center px-4 w-full h-auto max-w-6xl'>
          <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div>
      <Card className='w-full my-2'>
        <CardHeader>
          <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div>
        </CardHeader>
        <CardBody>
          <p>{strings.descriptionContentP1[language]}</p><br />
        </CardBody>
        <CardFooter>
        </CardFooter>
      </Card>
      {
        gists.map((gist: IGist) => {
          return (
            <Card key={gist.id} className='w-full my-2'>
              <CardHeader>
                <div className='text-2xl font-bold tracking-tight'>{Object.keys(gist.files)[0]}</div>
              </CardHeader>
              <CardBody>
                <div className='text-body tracking-tight'>{gist.description}</div>
                <CodeBlock
                  text={gist.files[Object.keys(gist.files)[0]].content}
                  language={'tsx'}
                  showLineNumbers={true}
                  startingLineNumber={1}
                  theme={vs2015}
                />
              </CardBody>
              <CardFooter>
              </CardFooter>
            </Card>
          );
        })
      }
    </div>
  );
}
