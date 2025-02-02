import * as React from 'react';
import { Button, Card, CardBody, CardHeader, Divider, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from '@heroui/react';
import { portfolioStrings } from '../../strings/portfolio';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useState } from 'react';
import type { IPortfolioProject } from '../../interfaces/IPortfolioProject';
import { useLoaderData } from 'react-router';
import { Image } from '@heroui/react';

export default function Portfolio() {
  const languageContext = useContext(LanguageContext);
  const { language } = languageContext;
  const strings = portfolioStrings;
  const loaderData = useLoaderData();
  const portfolioProjects: IPortfolioProject[] = loaderData;
  const [showImageModal, setShowImageModal] = useState(false);
  const [zoomedImageURL, setZoomedImageURL] = useState('');

  const onOpenChange = (isOpen: boolean) => {
    setShowImageModal(isOpen);
  };
  
  const showModal = (imageURL: string) => {
    setZoomedImageURL(imageURL);
    onOpenChange(true);
  };

  const onClose = () => {
    setZoomedImageURL('');
    onOpenChange(false);
  };

  return (
    <>
      <div className='text-3xl font-bold tracking-tight'>{strings.pageTitle[language]}</div><br />
      <p>{strings.description[language]}</p><br />
      <p><Link isExternal showAnchorIcon href={'https://ndrinovsky.github.io/'}>{strings.legacyPortfolioLinkText[language]}</Link></p>
      {portfolioProjects.map((project, index) => {
        return (
          <Card key={index} className='w-full my-2 p-2'>
            <CardHeader>
              <div className='text-2xl font-bold tracking-tight'>{project.title[language]}</div>
            </CardHeader>
            <CardBody>
              <div className='text-body tracking-tight'>{project.description[language]}</div><br />
              <div className='text-body tracking-tight'>{strings.technologiesUsed[language]}: {project.technologies.join(', ')}</div><br />
              <div className='flex flex-row gap-2'>
                {project.githubLink && <Link isExternal showAnchorIcon href={project.githubLink}>{strings.githubLinkText[language]}</Link>}
                {project.liveLink && <Link isExternal showAnchorIcon href={project.liveLink}>{strings.liveLinkText[language]}</Link>}
              </div>
              <Divider className='my-4' />
              <div className='flex flex-row gap-2 flex-wrap justify-center'>
                {project.imageURLs.map((url, index) => {
                  return (
                    <div className='w-full md:w-1/3 flex justify-center' key={index}>
                      <Image
                        onClick={() => showModal(url)}
                        key={index}
                        src={url}
                        alt={project.title[language]} 
                        className='cursor-pointer max-h-[550px]'
                      />
                    </div>
                  );
                })}
              </div>
            </CardBody>
          </Card>
        );
      })}
      <Modal isOpen={showImageModal} onOpenChange={onOpenChange} scrollBehavior='inside' size='5xl'>
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalBody className='flex justify-center w-full h-full items-center'>
            <div className='flex flex-wrap justify-center items-center'>
              <Image
                src={zoomedImageURL}
                alt={'zoomed image'}
                // className='max-h-full flex justify-center'
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
