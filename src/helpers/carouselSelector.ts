export const carouselSelector = (collection: string) => {
  let images: string[] = [];
  switch (collection) {
    case 'the_vine_centre':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197940/FerRivera%20Web/Portfolio/TheVineCentre/1_xmpkhz.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197935/FerRivera%20Web/Portfolio/TheVineCentre/2_sjatev.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197933/FerRivera%20Web/Portfolio/TheVineCentre/3_ncr4sx.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197926/FerRivera%20Web/Portfolio/TheVineCentre/4_ldxtee.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197925/FerRivera%20Web/Portfolio/TheVineCentre/5_vqnutx.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197940/FerRivera%20Web/Portfolio/TheVineCentre/6_iom1wk.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197939/FerRivera%20Web/Portfolio/TheVineCentre/7_gm5blk.webp',
      ];
      break;
    case 'the_vine_centre_manager':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197937/FerRivera%20Web/Portfolio/TheVineCentre/web/1_bh0n67.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197929/FerRivera%20Web/Portfolio/TheVineCentre/web/2_x69z5v.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197936/FerRivera%20Web/Portfolio/TheVineCentre/web/3_yy9wvr.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197927/FerRivera%20Web/Portfolio/TheVineCentre/web/4_ubwqao.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197929/FerRivera%20Web/Portfolio/TheVineCentre/web/5_niadkf.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197931/FerRivera%20Web/Portfolio/TheVineCentre/web/6_esdfhh.webp',
      ];
      break;
    case 'the_vine_server':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197938/FerRivera%20Web/Portfolio/TheVineCentre/server/1_cnhwez.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197937/FerRivera%20Web/Portfolio/TheVineCentre/server/2_xpf1qs.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197938/FerRivera%20Web/Portfolio/TheVineCentre/server/3_vul8tj.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197939/FerRivera%20Web/Portfolio/TheVineCentre/server/4_u1sytd.webp',
      ];
      break;
    case 'azahares_credit_union_web':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197862/FerRivera%20Web/Portfolio/azahares/web/1_emcgkc.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/2_fs2y7z.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/3_nwgdkh.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197860/FerRivera%20Web/Portfolio/azahares/web/4_lsgrvu.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/5_nlnwor.webp',
      ];
      break;
    case 'azahares_credit_union':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197863/FerRivera%20Web/Portfolio/azahares/server/1_kyryjh.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/azahares/server/2_qrdq8l.webp',
      ];
      break;
    case 'betterlists':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197866/FerRivera%20Web/Portfolio/betterLists/1_ookcii.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/betterLists/2_lt12x1.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/betterLists/3_hxdkuk.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/betterLists/4_cf9e7w.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197866/FerRivera%20Web/Portfolio/betterLists/5_qt4koa.webp',
      ];
      break;
    case 'checkstudents':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197875/FerRivera%20Web/Portfolio/checkStudents/1_oxlaov.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197872/FerRivera%20Web/Portfolio/checkStudents/2_wkxdg1.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197874/FerRivera%20Web/Portfolio/checkStudents/3_zqlesx.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/checkStudents/4_h1wgrm.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/checkStudents/5_zyamvx.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197876/FerRivera%20Web/Portfolio/checkStudents/6_aykkoj.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197875/FerRivera%20Web/Portfolio/checkStudents/7_p5qolq.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197867/FerRivera%20Web/Portfolio/checkStudents/8_kdysxg.webp',
      ];
      break;
    case 'cuidados_meraki_server':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/meraki/s1_a1jg2a.webp',
      ];
      break;
    case 'cuidados_meraki':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197902/FerRivera%20Web/Portfolio/meraki/1_mdb1or.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197890/FerRivera%20Web/Portfolio/meraki/2_apxeaa.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197889/FerRivera%20Web/Portfolio/meraki/3_lsks9v.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197888/FerRivera%20Web/Portfolio/meraki/4_titumq.webp',
      ];
      break;
    case 'checkstudents_server':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197877/FerRivera%20Web/Portfolio/checkStudents/s1_lyslhk.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/checkStudents/s2_kflckn.webp',
      ];
      break;
    case 'ifootschedule':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/iFootSchedule/1_nolyyz.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197887/FerRivera%20Web/Portfolio/iFootSchedule/2_ubcfpa.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197889/FerRivera%20Web/Portfolio/iFootSchedule/3_su3cik.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197878/FerRivera%20Web/Portfolio/iFootSchedule/4_xfhxfp.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197878/FerRivera%20Web/Portfolio/iFootSchedule/5_xg945n.webp',
      ];
      break;
    case 'rn_segmented_and_tab_control':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1709313673/GitHub/segmentedControl_dul8fq.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif',
      ];
      break;
    case 'rn_custom_alert_and_prompt':
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
    case 'rn_inkpad':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-light_fceujq.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-light_n34v0f.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/input/input-props_vofom0.png',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306865/packages/buttons/longpress-props_aipljn.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/drawer-props_idiebk.gif',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/cards/floatingcard-props_qmhrkj.gif',
      ];
      break;
    case 'myelino':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197905/FerRivera%20Web/Portfolio/myelino/app/1_up9dij.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197907/FerRivera%20Web/Portfolio/myelino/app/2_ahcyio.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197900/FerRivera%20Web/Portfolio/myelino/app/3_cq0n8j.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197896/FerRivera%20Web/Portfolio/myelino/app/4_ibykik.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197892/FerRivera%20Web/Portfolio/myelino/app/5_jwobpj.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197918/FerRivera%20Web/Portfolio/myelino/app/6_ylkwh7.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197903/FerRivera%20Web/Portfolio/myelino/app/7_jv6it4.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197901/FerRivera%20Web/Portfolio/myelino/app/8_imxoko.webp',
      ];
      break;
    case 'myelino_web':
      images = [
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197912/FerRivera%20Web/Portfolio/myelino/web/1_zvnr3a.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197911/FerRivera%20Web/Portfolio/myelino/web/2_skjan1.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197910/FerRivera%20Web/Portfolio/myelino/web/3_c7gjcp.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197906/FerRivera%20Web/Portfolio/myelino/web/4_skelbg.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197904/FerRivera%20Web/Portfolio/myelino/web/5_tldxhr.webp',
        'https://res.cloudinary.com/fercloudinary/image/upload/v1744197911/FerRivera%20Web/Portfolio/myelino/web/6_sgvc8u.webp',
      ];
      break;
    default:
      images = [];
  }

  console.log(collection);

  return images;
};
