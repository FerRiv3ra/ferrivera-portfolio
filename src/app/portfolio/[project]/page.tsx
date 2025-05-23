'use client';

import { useProjectScreen } from '@/hooks/useProjectScreen';
import { Button } from '@/ui/components/Button';
import { Carousel } from '@/ui/components/Carousel';
import { RelatedProjects } from '@/ui/components/RelatedProjects';
import { lato } from '@/ui/fonts';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export default function ProjectScren() {
  const { project, images } = useProjectScreen();
  const { i18n, t } = useTranslation();

  const renderLinks = useMemo(() => {
    if (!project) return null;
    if (!project.url && !project.docsUrl && !project.github) return null;

    return (
      <>
        <p className={'text-xl xl:text-3xl text-center font-bold my-5'}>
          {t('portfolio.links')}
        </p>
        <div className="flex gap-4 justify-center items-center px-4 mb-10">
          {project.url && <Button type={'url'} url={project.url} />}
          {project.github && <Button type={'github'} url={project.github} />}
          {project.docsUrl && <Button type={'docsUrl'} url={project.docsUrl} />}
        </div>
      </>
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  if (!project) return;

  const projectDescription =
    project.description[i18n.language as 'en'].split('\n');

  return (
    <div
      className={`${lato.className} flex flex-col items-center text-white pt-20`}
    >
      <h2 className={'text-2xl xl:text-4xl text-center font-bold'}>
        {project.name}
      </h2>
      <div className="flex flex-col-reverse xl:flex-row w-10/12 gap-8 mt-10">
        {images.length > 0 && <Carousel images={images} />}
        <div className="flex w-full xl:w-1/3 flex-col gap-5">
          {projectDescription.map((desc, index) => (
            <p
              key={index}
              className={
                'font-medium xl:w-4/5 text-sm xl:text-base text-[#959595]'
              }
            >
              {desc}
            </p>
          ))}
        </div>
      </div>
      <p className={'text-xl xl:text-3xl text-center font-bold my-5'}>
        {t('portfolio.technologies')}
      </p>
      <div className="container">
        <RelatedProjects project={project} />
        {renderLinks}
      </div>
    </div>
  );
}
