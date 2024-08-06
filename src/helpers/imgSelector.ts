import { imgNameType } from '@/types/appTypes';

export const imgSelector = (imgName: imgNameType) => {
  let img: string;
  let title: string;

  switch (imgName) {
    case 'axios':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577146/FerRivera%20Web/Logos/axios_kxu0j1.png';
      title = 'Axios';
      break;
    case 'checkStudents':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/checkstudents_kuoabx.png';
      title = 'CheckStudents';
      break;
    case 'docker':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577147/FerRivera%20Web/Logos/docker_hoowbn.png';
      title = 'Docker';
      break;
    case 'express':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577147/FerRivera%20Web/Logos/express_ts4xqt.png';
      title = 'Express.js';
      break;
    case 'fontAwesome':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577147/FerRivera%20Web/Logos/FontAwesome_km7z1w.png';
      title = 'FontAwesome';
      break;
    case 'gestureHandler':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577148/FerRivera%20Web/Logos/gestureHandler_ht3651.png';
      title = 'RN Gesture Handler';
      break;
    case 'git':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/github_xtn3ym.png';
      title = 'Git';
      break;
    case 'github':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/github_xtn3ym.png';
      title = 'https://github.com/FerRiv3ra';
      break;
    case 'i18next':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577150/FerRivera%20Web/Logos/i18next_zw9aex.png';
      title = 'i18next';
      break;
    case 'javascript':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/javascript_ks3wca.png';
      title = 'Javascript';
      break;
    case 'jwt':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577150/FerRivera%20Web/Logos/jwt_a2dx7f.png';
      title = 'JWT';
      break;
    case 'linkedin':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/linkedin_iqhcwi.png';
      title = 'https://www.linkedin.com/in/ferriv3ra/';
      break;
    case 'mongoDB':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698574758/FerRivera%20Web/Logos/mongo_yhj7ae.png';
      title = 'MongoDB';
      break;
    case 'mongoose':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577151/FerRivera%20Web/Logos/mongoose_dqngp7.png';
      title = 'Mongoose';
      break;
    case 'nest':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698574758/FerRivera%20Web/Logos/nest_yyyueg.png';
      title = 'Nest';
      break;
    case 'node':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/nodejs_nau5nv.png';
      title = 'Node';
      break;
    case 'postgreSQL':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698580835/FerRivera%20Web/Logos/postgreSQL_s5yw4y.png';
      title = 'PostgreSQL';
      break;
    case 'react':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/react_v6ecru.png';
      title = 'React';
      break;
    case 'reactNative':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/react_v6ecru.png';
      title = 'React Native';
      break;
    case 'reactRN':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/react_v6ecru.png';
      title = 'Ract and React Native';
      break;
    case 'reactNavigation':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577153/FerRivera%20Web/Logos/rNavigation_eyjs0a.png';
      title = 'React Navigation';
      break;
    case 'reactRouter':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577152/FerRivera%20Web/Logos/reactRoutre_dqctif.png';
      title = 'React Router DOM';
      break;
    case 'realm':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577153/FerRivera%20Web/Logos/realm_pay6wp.png';
      title = 'RealmDB';
      break;
    case 'sockets':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577155/FerRivera%20Web/Logos/socketIO_xlrtdo.png';
      title = 'Socket.io';
      break;
    case 'stripe':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577155/FerRivera%20Web/Logos/stripe_vpxj3g.png';
      title = 'Stripe';
      break;
    case 'tailwind':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577156/FerRivera%20Web/Logos/tailwind_gjbp5v.png';
      title = 'TailwindCSS';
      break;
    case 'theVineApp':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546455/FerRivera%20Web/BannerApps/the-vine-app_lb57dr.png';
      title = 'The Vine Centre';
      break;
    case 'twitter':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/twitter_vqmfkr.png';
      title = 'https://twitter.com/FerRiv3ra';
      break;
    case 'typeorm':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577156/FerRivera%20Web/Logos/typeorm_jfcvgs.png';
      title = 'TypeORM';
      break;
    case 'typescript':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/typescript_ujr1ni.png';
      title = 'Typescript';
      break;
    case 'vectorIcons':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577158/FerRivera%20Web/Logos/VectorIcons_m0wweb.png';
      title = 'RN Vector Icons';
      break;
    case 'vsCode':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1685546566/FerRivera%20Web/Logos/vs-code_v2llb1.png';
      title = 'Visual Studio Code';
      break;
    case 'nextjs':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1722965726/FerRivera%20Web/Logos/nextjs_shyb6f.png';
      title = 'NextJS';
      break;
    case 'expo':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1722965723/FerRivera%20Web/Logos/expo_wovw0j.png';
      title = 'Expo';
      break;
    case 'PDF Kit':
    case 'PDF Make':
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1722965726/FerRivera%20Web/Logos/pdf_jxam1k.png';
      title = imgName;
      break;
    default:
      img =
        'https://res.cloudinary.com/fercloudinary/image/upload/v1698577152/FerRivera%20Web/Logos/npmPackage_vvfhxk.png';
      title = imgName;
  }

  return {
    img,
    title,
  };
};
