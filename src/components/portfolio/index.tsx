import * as React from 'react';
import { Button, Card, Separator, Link, Modal } from '@heroui/react';
import { portfolioStrings } from '../../strings/portfolio';
import { LanguageContext } from '../../contexts/LanguageContext';
import { useContext, useState } from 'react';
import type { IPortfolioProject } from '../../interfaces/IPortfolioProject';
import { useLoaderData } from 'react-router';

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
      <p><Link href={'https://ndrinovsky.github.io/'}>{strings.legacyPortfolioLinkText[language]}<Link.Icon /></Link></p>
      {portfolioProjects.map((project, index) => {
        return (
          <Card key={index} className='w-full my-2 p-2'>
            <Card.Header>
              <div className='text-2xl font-bold tracking-tight'>{project.title[language]}</div>
            </Card.Header>
            <Card.Content>
              <div className='text-body tracking-tight'>{project.description[language]}</div><br />
              <div className='text-body tracking-tight'>{strings.technologiesUsed[language]}: {project.technologies.join(', ')}</div><br />
              <div className='flex flex-row gap-2'>
                {project.githubLink && <Link href={project.githubLink}>{strings.githubLinkText[language]}<Link.Icon /></Link>}
                {project.liveLink && <Link href={project.liveLink}>{strings.liveLinkText[language]}<Link.Icon /></Link>}
              </div>
              <Separator className='my-4' />
              <div className='flex flex-row gap-2 flex-wrap justify-center items-center'>
                {project.imageURLs.map((url, index) => {
                  return (
                    <div className='w-full md:w-1/3 flex justify-center' key={index}>
                      <img
                        onClick={() => showModal(url)}
                        key={index}
                        src={url}
                        alt={project.title[language]} 
                        className='cursor-pointer max-h-[350px]'
                      />
                    </div>
                  );
                })}
              </div>
            </Card.Content>
          </Card>
        );
      })}
      <Modal isOpen={showImageModal} onOpenChange={onOpenChange}>
        <Modal.Backdrop>
          <Modal.Container scroll='inside' size='lg'>
            <Modal.Dialog>
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>{zoomedImageURL ? 'Image Preview' : ''}</Modal.Heading>
              </Modal.Header>
              <Modal.Body className='flex justify-center w-full h-full items-center'>
                <div className='flex flex-wrap justify-center items-center'>
                  <img
                    src={zoomedImageURL}
                    alt={'zoomed image'}
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="danger" onPress={onClose}>
                  Close
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </>
  );
}
