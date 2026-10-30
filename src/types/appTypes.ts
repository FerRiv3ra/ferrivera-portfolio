export type projectIdType = 'APPMOVIL' | 'BACKEND' | 'WEB' | 'LIBRARY';

export type Localized = {
  en: string;
  es: string;
  it: string;
};

export type LinkType =
  'appstore' | 'playstore' | 'url' | 'npm' | 'github' | 'docsUrl';

export interface ProjectPart {
  legacyId?: string;
  kind: projectIdType;
  name: string;
  description: Localized;
  technologies: imgNameType[];
  links: Partial<Record<LinkType, string>>;
  images: string[];
  install?: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: Localized;
  cover?: string;
  featured?: boolean;
  section: 'product' | 'library';
  parts: ProjectPart[];
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
  | 'vsCode'
  | 'swift'
  | 'kotlin'
  | 'Excel JS'
  | 'React Native Camera Kit'
  | 'ONNX Runtime'
  | 'Nitro Modules';
