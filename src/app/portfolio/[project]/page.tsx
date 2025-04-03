'use client';

import { useProjectScreen } from '@/hooks/useProjectScreen';
import { Button } from '@/ui/components/Button';
import { Carousel } from '@/ui/components/Carousel';
import { RelatedProjects } from '@/ui/components/RelatedProjects';
import { indieFlower, inter, roboto } from '@/ui/fonts';
import { useTranslation } from 'react-i18next';

export default function ProjectScren() {
  const { relatedProjects: projects, images } = useProjectScreen();
  const { i18n, t } = useTranslation();

  if (projects.length === 0) return;

  return (
    <div className="flex flex-col items-center text-white pt-20">
      <h2 className={`${indieFlower.className} text-6xl text-center mb-3`}>
        {projects[0].name}
      </h2>
      <img src={projects[0].bannerUrl} className="h-full w-8/12 mx-auto mb-6" />
      <p className={`${inter.className} font-light my-4 text-2xl`}>
        {t('portfolio.description')}
      </p>
      <p
        className={`${roboto.className} text-center font-extralight mb-5 w-2/3`}
      >
        {i18n.language === 'es'
          ? projects[0].description.es
          : i18n.language === 'en'
          ? projects[0].description.en
          : projects[0].description.it}
      </p>
      {images.length > 0 && (
        <>
          <p className={`${inter.className} font-light my-4 text-2xl`}>
            {t('portfolio.screenshots')}
          </p>
          <Carousel images={images} />
        </>
      )}
      <p className={`${inter.className} font-light my-4 text-2xl`}>
        {t('portfolio.technologies')}
      </p>
      <div className="container">
        {projects.map((project, index) => (
          <div key={index}>
            <RelatedProjects project={project} />
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center px-4">
              {project.url && <Button type={'url'} url={project.url} />}
              {project.docsUrl && (
                <Button type={'docsUrl'} url={project.docsUrl} />
              )}
              {project.github && (
                <Button type={'github'} url={project.github} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
