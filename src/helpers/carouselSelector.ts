export type ImagesCollection =
  | 'vine'
  | 'betterlists'
  | 'checkstudents'
  | 'segmented'
  | 'custom'
  | 'inkpad'
  | 'ifootschedule';

export const carouselSelector = (collection: ImagesCollection) => {
  console.log(collection);
  let images = [];
  switch (collection) {
    case 'vine':
      images = [
        './TheVineCentre/1.jpg',
        './TheVineCentre/2.jpg',
        './TheVineCentre/3.jpg',
        './TheVineCentre/4.jpg',
        './TheVineCentre/5.jpg',
        './TheVineCentre/6.jpg',
        './TheVineCentre/7.jpg',
      ];
      break;
    case 'betterlists':
      images = [
        './betterLists/1.png',
        './betterLists/2.png',
        './betterLists/3.png',
        './betterLists/4.png',
        './betterLists/5.png',
      ];
      break;
    case 'checkstudents':
      images = [
        './checkStudents/1.png',
        './checkStudents/2.png',
        './checkStudents/3.png',
        './checkStudents/4.png',
        './checkStudents/5.png',
        './checkStudents/6.png',
        './checkStudents/7.png',
        './checkStudents/8.png',
      ];
      break;
    case 'ifootschedule':
      images = [
        './iFootSchedule/1.jpg',
        './iFootSchedule/2.jpg',
        './iFootSchedule/3.jpg',
        './iFootSchedule/4.jpg',
        './iFootSchedule/5.jpg',
      ];
      break;
    case 'segmented':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1709313673/GitHub/segmentedControl_dul8fq.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif',
      ];
      break;
    case 'custom':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.39_relzf6.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.03_war8fz.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.09_holx24.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.54_marhwv.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710438064/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.08_ude9cj.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710438061/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.39.59_iu9c2z.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710438067/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.14_q0h4xf.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1710438070/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.22_khhpvr.png',
      ];
      break;
    case 'inkpad':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-light_fceujq.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-light_n34v0f.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/input/input-props_vofom0.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306865/packages/buttons/longpress-props_aipljn.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/drawer-props_idiebk.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/cards/floatingcard-props_qmhrkj.gif',
      ];
      break;
  }

  return images;
};
