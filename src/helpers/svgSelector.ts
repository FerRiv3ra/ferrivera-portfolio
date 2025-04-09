import { Postman } from '@/ui/components/icons/Postman';
import { WebIcon } from '@/ui/components/icons/WebIcon';
import { Github } from '../ui/components/icons/Github';

export type svgType = 'url' | 'docsUrl' | 'github';

export const svgSelector = (type: svgType) => {
  const selector = {
    url: WebIcon,
    docsUrl: Postman,
    github: Github,
  };

  return selector[type];
};
