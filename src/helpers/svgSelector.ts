export type svgType = 'url' | 'docsUrl' | 'github' | 'playstore' | 'appstore';

export const svgSelector = (type: svgType) => {
  const selector = {
    url: '/svg/world-svgrepo-com.svg',
    docsUrl: '/svg/postman-svgrepo-com.svg',
    github: '/svg/github-142-svgrepo-com.svg',
    playstore: '/svg/googleplay-svgrepo-com.svg',
    appstore: '/svg/logo-apple-appstore-svgrepo-com.svg',
  };

  return selector[type];
};
