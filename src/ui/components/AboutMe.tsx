'use client';
import { useTranslation } from 'react-i18next';
import { lato } from '../fonts';
import { Tooltip } from './Tooltip';
import { AWS } from './icons/AWS';
import { Axios } from './icons/Axios';
import { Expo } from './icons/Expo';
import { Express } from './icons/Express';
import { Git } from './icons/Git';
import { Github } from './icons/Github';
import { Javascript } from './icons/Javascript';
import { Jwt } from './icons/Jwt';
import { MongoDb } from './icons/MongoDb';
import { Mongoose } from './icons/Mongoose';
import { Nestjs } from './icons/Nestjs';
import { Nextjs } from './icons/Nextjs';
import { NodeIcon } from './icons/Node';
import { NpmIcon } from './icons/NpmIcon';
import { ReactJs } from './icons/ReactJs';
import { RealmDb } from './icons/RealmDb';
import { Redux } from './icons/Redux';
import { TailwindCss } from './icons/TailwindCss';
import { Typescript } from './icons/Typescript';
import { Vercel } from './icons/Vercel';
import { Vite } from './icons/Vite';
import { VsCode } from './icons/VsCode';
import { Yarn } from './icons/Yarn';
import { I18NextIcon } from './icons/i18Next';

export const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className={`${lato.className}`}>
      <p className="text-4xl text-center font-bold">{t('header.about')}</p>
      <p className="text-base text-center text-[#707070]">{t('home.title')}</p>
      <div className="flex mt-10 gap-10">
        <div className="flex flex-1 justify-end">
          <div className="w-2/3 flex justify-end items-center gap-5 flex-wrap">
            <Tooltip message="Typescript">
              <Typescript />
            </Tooltip>
            <Tooltip message="Javascript">
              <Javascript />
            </Tooltip>
            <Tooltip message="Nodejs">
              <NodeIcon />
            </Tooltip>
            <Tooltip message="Reactjs">
              <ReactJs />
            </Tooltip>
            <Tooltip message="Nestjs">
              <Nestjs />
            </Tooltip>
            <Tooltip message="Expressjs">
              <Express />
            </Tooltip>
            <Tooltip message="Axios">
              <Axios />
            </Tooltip>
            <Tooltip message="Redux">
              <Redux />
            </Tooltip>
            <Tooltip message="i18Next">
              <I18NextIcon />
            </Tooltip>
            <Tooltip message="Realm DB">
              <RealmDb />
            </Tooltip>
            <Tooltip message="MongoDB">
              <MongoDb />
            </Tooltip>
            <Tooltip message="Mongoose">
              <Mongoose />
            </Tooltip>
            <Tooltip message="Git">
              <Git />
            </Tooltip>
            <Tooltip message="GitHub">
              <Github />
            </Tooltip>
            <Tooltip message="EXPO">
              <Expo />
            </Tooltip>
            <Tooltip message="Nextjs">
              <Nextjs />
            </Tooltip>
            <Tooltip message="Vite">
              <Vite />
            </Tooltip>
            <Tooltip message="Tailwind CSS">
              <TailwindCss />
            </Tooltip>
            <Tooltip message="AWS">
              <AWS />
            </Tooltip>
            <Tooltip message="Vercel">
              <Vercel />
            </Tooltip>
            <Tooltip message="VS Code">
              <VsCode />
            </Tooltip>
            <Tooltip message="NPM">
              <NpmIcon />
            </Tooltip>
            <Tooltip message="Yarn">
              <Yarn />
            </Tooltip>
            <Tooltip message="JWT">
              <Jwt />
            </Tooltip>
          </div>
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <p className="font-medium w-2/3 text-sm text-[#959595]">
            {t('home.description1')}
          </p>
          <p className="font-medium w-2/3 text-sm text-[#959595]">
            {t('home.description2')}
          </p>
          <p className="font-medium w-2/3 text-sm text-[#959595]">
            {t('home.description3')}
          </p>
        </div>
      </div>
    </div>
  );
};
