import * as React from 'react';
import { Card, CardBody, CardFooter, CardHeader, Divider, Link } from '@heroui/react';
import { snippetStrings } from '../../strings/snippets';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext } from 'react';
import { CopyBlock, atomOneDark, atomOneLight } from 'react-code-blocks';
import { useLoaderData } from 'react-router';
import type { IGist } from '../../interfaces/IGist';
import { useThemeDetector } from '../../hooks/darkThemeDetector';

export default function Snippets() {
  const isDarkTheme = useThemeDetector();
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = snippetStrings;
  const loaderData = useLoaderData();
  const gists: IGist[] = loaderData;
  
  return (
    <div className='flex flex-col items-center justify-center px-4 w-full h-auto max-w-6xl'>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <p>{strings.descriptionContentP1[language]}</p><br />
      <p><Link isExternal showAnchorIcon href={'https://gist.github.com/ndrinovsky'}>{strings.descriptionContentP2[language]}</Link></p>
      {gists.length === 0 && <p>{strings.loadingSnippetsError[language]}</p>}
      {
        gists.map((gist: IGist) => {
          return (
            <Card key={gist.id} className='w-full my-2 p-2'>
              <CardHeader>
                <div className='text-2xl font-bold tracking-tight'>{Object.keys(gist.files)[0]}</div>
              </CardHeader>
              <Divider className='my-4' />
              <CardBody>
              <div className='text-body tracking-tight'>{gist.description}</div><br />
                {
                  Object.keys(gist.files).map((fileName: string, index: number) => {
                    return (
                      <div key={index} className='my-2'>
                        <div className='text-1xl font-bold tracking-tight pb-2'>{fileName}</div>
                          <CopyBlock
                            customStyle={{
                              maxHeight: '400px',
                              overflowY: 'scroll'
                            }}
                            text={gist.files[fileName].content}
                            language={'tsx'}
                            showLineNumbers={true}
                            startingLineNumber={1}
                            theme={isDarkTheme ? atomOneDark : atomOneLight}
                          />
                          {gist.files[fileName].truncated && <p className='text-center'><Link isExternal showAnchorIcon href={`https://gist.github.com/ndrinovsky/${gist.id}#file-${fileName}`}>{strings.snippetTruncated[language]}</Link></p>}
                      </div>
                    );
                  })
                }
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
