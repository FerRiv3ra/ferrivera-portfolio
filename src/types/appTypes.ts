export type projectIdType = 'APPMOVIL' | 'BACKEND' | 'WEB' | 'LIBRARY';

export interface PortfolioResponse {
  record: {
    projects: Project[];
  };
}

export interface Project {
  appstore?: string;
  bannerUrl: string;
  category: projectIdType;
  docsUrl?: string;
  github?: string;
  name: string;
  playstore?: string;
  technologies: imgNameType[];
  description: {
    en: string;
    es: string;
    it: string;
  };
  uid: string;
  url?: string;
}

export type imgNameType =
  | 'axios'
  | 'checkStudents'
  | 'docker'
  | 'express'
  | 'fontAwesome'
  | 'gestureHandler'
  | 'git'
  | 'github'
  | 'i18next'
  | 'javascript'
  | 'jwt'
  | 'linkedin'
  | 'mongoDB'
  | 'mongoose'
  | 'nest'
  | 'node'
  | 'postgreSQL'
  | 'react'
  | 'reactNative'
  | 'reactRN'
  | 'reactNavigation'
  | 'reactRouter'
  | 'realm'
  | 'sockets'
  | 'stripe'
  | 'tailwind'
  | 'theVineApp'
  | 'twitter'
  | 'typeorm'
  | 'typescript'
  | 'vectorIcons'
  | 'nextjs'
  | 'expo'
  | 'PDF Make'
  | 'PDF Kit'
  | 'vsCode';
