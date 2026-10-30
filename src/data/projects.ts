import { Product } from '@/types/appTypes';

// Single source of truth for the portfolio. Each product groups every piece
// built for it (mobile app, API, web dashboard). `legacyId` keeps the old
// /portfolio/<id> links working.
export const products: Product[] = [
  {
    slug: 'the-vine-centre',
    name: 'The Vine Centre',
    featured: true,
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197923/FerRivera%20Web/Portfolio/projects/vine_centre_app_c4q0zr.webp',
    tagline: {
      en: 'QR check-in system for a community food cupboard: mobile app, API and admin dashboard.',
      es: 'Sistema de registro con QR para un banco de alimentos comunitario: app móvil, API y panel de administración.',
      it: 'Sistema di check-in con QR per una dispensa comunitaria: app mobile, API e pannello di amministrazione.',
    },
    parts: [
      {
        legacyId: '649084619ad5fb317b0512bc',
        kind: 'APPMOVIL',
        name: 'The Vine Centre',
        description: {
          en: "A React Native mobile app designed to streamline the check-in process for a Community Cupboard through QR code scanning. The application supports two types of users: visitors and administrators, each with specific functionalities.\nVisitors can access their personal profile within the app, where a unique QR code is generated to identify them. This QR code is scanned during each visit to ensure a quick, contactless registration.\nAdministrators can use the device’s camera to scan visitors' QR codes, register new visits, and generate automated reports based on the collected data. These reports can be sent via email directly from the app interface, simplifying tracking and administrative tasks.",
          es: 'Aplicación desarrollada con React Native, diseñada para facilitar el registro de visitas a un Community Cupboard a través de códigos QR. La app ofrece dos tipos de acceso: usuarios visitantes y administradores, cada uno con funcionalidades específicas.\nLos usuarios visitantes pueden acceder a su perfil personal dentro de la aplicación, donde se genera un código QR único que los identifica. Este código puede ser escaneado al momento de cada visita para llevar un registro eficiente y sin contacto.\nPor otro lado, los administradores pueden escanear los códigos QR de los usuarios utilizando la cámara del dispositivo, registrar nuevas visitas y generar informes automáticos con los datos recopilados. Además, la app permite enviar estos informes por correo electrónico directamente desde la interfaz, facilitando así el seguimiento y la gestión de las actividades del Community Cupboard.',
          it: 'Applicazione mobile sviluppata con React Native, pensata per semplificare il processo di registrazione delle visite a un Community Cupboard attraverso la scansione di codici QR. L’app offre due modalità di accesso: visitatori e amministratori, ciascuna con funzionalità dedicate.\nI visitatori possono accedere al proprio profilo personale, dove viene generato un codice QR univoco che li identifica. Questo codice viene scansionato ad ogni visita, permettendo una registrazione rapida e senza contatto.\nGli amministratori, invece, possono utilizzare la fotocamera del dispositivo per scansionare i codici QR dei visitatori, registrare nuove visite e generare rapporti automatici con i dati raccolti. I rapporti possono essere inviati via email direttamente dall’interfaccia dell’app, facilitando così il monitoraggio e la gestione delle attività.',
        },
        technologies: [
          'reactNative',
          'javascript',
          'axios',
          'fontAwesome',
          'reactNavigation',
          'React Native Camera Kit',
          'gestureHandler',
        ],
        links: {
          appstore:
            'https://apps.apple.com/us/app/the-vine-centre/id1628162118',
          playstore:
            'https://play.google.com/store/apps/details?id=com.ferrivera.vinecentre',
          github: 'https://github.com/FerRiv3ra/cupboard',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197940/FerRivera%20Web/Portfolio/TheVineCentre/1_xmpkhz.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197935/FerRivera%20Web/Portfolio/TheVineCentre/2_sjatev.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197933/FerRivera%20Web/Portfolio/TheVineCentre/3_ncr4sx.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197926/FerRivera%20Web/Portfolio/TheVineCentre/4_ldxtee.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197925/FerRivera%20Web/Portfolio/TheVineCentre/5_vqnutx.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197940/FerRivera%20Web/Portfolio/TheVineCentre/6_iom1wk.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197939/FerRivera%20Web/Portfolio/TheVineCentre/7_gm5blk.webp',
        ],
      },
      {
        legacyId: '649085cf9ad5fb317b0512c8',
        kind: 'BACKEND',
        name: 'The Vine Server',
        description: {
          en: 'The Vine Centre Server is a backend application designed to support an internal management system with a strong focus on security and administrative control. It includes full user CRUD operations and implements two-step verification for administrator access, enhancing login security. Password recovery functionality is also available to ensure accessibility and user independence.\nThe server allows administrators to generate detailed reports in PDF and XLSX formats, upload images for records or reports, and send data-rich summaries directly via email. It combines practical user management tools with secure authentication and robust reporting capabilities, making it a reliable solution for managing internal data and communication workflows.',
          es: 'The Vine Centre Server es una aplicación backend desarrollada para respaldar un sistema de gestión interna con énfasis en la seguridad y el control administrativo. Incluye operaciones completas de creación, lectura, actualización y eliminación de usuarios, junto con verificación en dos pasos para el inicio de sesión de administradores, lo que refuerza la seguridad de acceso. También incorpora funcionalidad de recuperación de contraseña para mejorar la accesibilidad.\nEl servidor permite a los administradores generar informes detallados en formatos PDF y XLSX, subir imágenes para registros o reportes, y enviar resúmenes directamente por correo electrónico. Gracias a su combinación de herramientas de gestión de usuarios, autenticación segura y generación de informes avanzados, representa una solución confiable para el manejo de datos y flujos de comunicación internos.',
          it: 'The Vine Centre Server è un’applicazione backend pensata per supportare un sistema di gestione interna con un forte focus sulla sicurezza e sul controllo amministrativo. Include tutte le operazioni CRUD per gli utenti e implementa l’autenticazione a due fattori per l’accesso degli amministratori, rafforzando la sicurezza durante il login. È inoltre presente una funzionalità di recupero password per garantire accessibilità e autonomia.\nIl server consente di generare report dettagliati nei formati PDF e XLSX, caricare immagini per archivi o report e inviare riepiloghi informativi direttamente via email. Coniugando gestione utenti, autenticazione sicura e funzionalità avanzate di reportistica, The Vine Centre Server è una soluzione affidabile per l’amministrazione dei dati interni e dei flussi comunicativi.',
        },
        technologies: [
          'node',
          'javascript',
          'express',
          'mongoDB',
          'mongoose',
          'jwt',
          'PDF Kit',
          'Excel JS',
        ],
        links: {
          github: 'https://github.com/FerRiv3ra/grub_hub_backend',
          docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUfh3',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197938/FerRivera%20Web/Portfolio/TheVineCentre/server/1_cnhwez.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197937/FerRivera%20Web/Portfolio/TheVineCentre/server/2_xpf1qs.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197938/FerRivera%20Web/Portfolio/TheVineCentre/server/3_vul8tj.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197939/FerRivera%20Web/Portfolio/TheVineCentre/server/4_u1sytd.webp',
        ],
      },
      {
        legacyId: '649086dc61d349f5e138a092',
        kind: 'WEB',
        name: 'The Vine Centre Manager',
        description: {
          en: "The Vine Centre Manager is a web application designed to help administrators manage visits to the community cupboard and view detailed reports.\nThe platform allows for easy registration of visits, tracking of user interactions, and generation of reports in various formats. It provides administrators with the ability to monitor the cupboard's activity, ensure resources are distributed efficiently, and generate summaries for communication purposes.\nThis intuitive web interface simplifies administrative tasks while offering insightful data and analytics for better decision-making.",
          es: 'The Vine Centre Manager es una aplicación web diseñada para ayudar a los administradores a gestionar las visitas al Community Cupboard y ver informes detallados.\nLa plataforma permite un registro fácil de las visitas, el seguimiento de interacciones con los usuarios y la generación de informes en diversos formatos. Los administradores pueden monitorear la actividad del Cupboard, asegurarse de que los recursos se distribuyan de manera eficiente y generar resúmenes para su comunicación.\nEsta interfaz web intuitiva simplifica las tareas administrativas mientras ofrece datos y análisis valiosos para una mejor toma de decisiones.',
          it: "AThe Vine Centre Manager è un'applicazione web progettata per aiutare gli amministratori a gestire le visite al Community Cupboard e visualizzare report dettagliati.\nLa piattaforma consente una facile registrazione delle visite, il monitoraggio delle interazioni con gli utenti e la generazione di report in vari formati. Gli amministratori possono monitorare l'attività del Cupboard, garantire una distribuzione efficiente delle risorse e generare riassunti per la comunicazione.\nQuesta interfaccia web intuitiva semplifica le attività amministrative offrendo al contempo dati e analisi utili per prendere decisioni più informate.",
        },
        technologies: [
          'react',
          'javascript',
          'reactRouter',
          'tailwind',
          'axios',
        ],
        links: {
          github: 'https://github.com/FerRiv3ra/vine-manager',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197937/FerRivera%20Web/Portfolio/TheVineCentre/web/1_bh0n67.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197929/FerRivera%20Web/Portfolio/TheVineCentre/web/2_x69z5v.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197936/FerRivera%20Web/Portfolio/TheVineCentre/web/3_yy9wvr.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197927/FerRivera%20Web/Portfolio/TheVineCentre/web/4_ubwqao.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197929/FerRivera%20Web/Portfolio/TheVineCentre/web/5_niadkf.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197931/FerRivera%20Web/Portfolio/TheVineCentre/web/6_esdfhh.webp',
        ],
      },
    ],
  },
  {
    slug: 'myelino',
    name: 'Myelino',
    featured: true,
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197915/FerRivera%20Web/Portfolio/projects/myelino_app_bcisxt.webp',
    tagline: {
      en: 'Social network built around fast interactions and rich media, plus its waitlist landing page.',
      es: 'Red social centrada en interacciones rápidas y contenido multimedia, con su landing de lista de espera.',
      it: "Social network basato su interazioni rapide e contenuti multimediali, con la landing per la lista d'attesa.",
    },
    parts: [
      {
        legacyId: '66ae32c88128f1c6444171c0',
        kind: 'APPMOVIL',
        name: 'Myelino',
        description: {
          en: 'Myelino is a mobile application built with React Native, Expo, and TypeScript, designed for a new generation of social networks that emphasize fast interactions and rich multimedia experiences. The app delivers a smooth and responsive experience across multiple devices. Navigation between screens is handled by React Navigation, while media playback is powered by Expo Video, ensuring high performance on both iOS and Android. Myelino also features real-time notifications to keep users informed about interactions, mentions, and content updates.\nAuthentication is managed using JWT (JSON Web Tokens), enabling secure and efficient session handling. The user interface is designed for an intuitive experience, with gesture support and smooth animations that enhance both content discovery and post creation. Built with modern technologies and a modular architecture, Myelino is a scalable platform ready to grow with its community and quickly adapt to new features.',
          es: 'Myelino es una aplicación móvil desarrollada con React Native, Expo y TypeScript, pensada para una nueva generación de redes sociales que priorizan la interacción ágil y el consumo de contenido multimedia. La app está diseñada para ofrecer una experiencia fluida y adaptable a distintos dispositivos. La navegación entre pantallas se gestiona a través de React Navigation, mientras que la reproducción de vídeos se optimiza mediante Expo Video, garantizando un rendimiento elevado en iOS y Android. Además, Myelino incorpora notificaciones en tiempo real para mantener a los usuarios informados sobre interacciones, menciones y actualizaciones de contenido.\nLa autenticación se maneja mediante JWT (JSON Web Tokens), lo que proporciona una gestión de sesiones segura y eficiente. La interfaz de usuario está pensada para ofrecer una experiencia intuitiva, con soporte para gestos y animaciones suaves, favoreciendo tanto el descubrimiento de contenido como la creación y publicación de nuevos posts. Con una arquitectura modular y tecnologías modernas, Myelino es una plataforma escalable, preparada para crecer junto con su comunidad e incorporar nuevas funcionalidades con agilidad.',
          it: 'Myelino è un’app mobile sviluppata con React Native, Expo e TypeScript, pensata per una nuova generazione di social network incentrati su interazioni rapide e contenuti multimediali. L’app garantisce un’esperienza fluida e reattiva su diversi dispositivi. La navigazione tra schermate è gestita con React Navigation, mentre la riproduzione dei contenuti multimediali è ottimizzata tramite Expo Video, offrendo alte prestazioni sia su iOS che Android. Myelino include anche notifiche in tempo reale per tenere gli utenti aggiornati su interazioni, menzioni e aggiornamenti di contenuto.\nL’autenticazione viene gestita tramite JWT (JSON Web Tokens), offrendo una gestione sicura ed efficiente delle sessioni. L’interfaccia utente è progettata per essere intuitiva, con supporto ai gesti e animazioni fluide che migliorano sia la scoperta dei contenuti sia la creazione e pubblicazione dei post. Grazie a tecnologie moderne e a un’architettura modulare, Myelino è una piattaforma scalabile pronta a crescere con la propria community e ad adattarsi rapidamente a nuove funzionalità.',
        },
        technologies: [
          'reactNative',
          'typescript',
          'expo',
          'vectorIcons',
          'reactNavigation',
          'gestureHandler',
        ],
        links: {},
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197905/FerRivera%20Web/Portfolio/myelino/app/1_up9dij.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197907/FerRivera%20Web/Portfolio/myelino/app/2_ahcyio.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197900/FerRivera%20Web/Portfolio/myelino/app/3_cq0n8j.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197896/FerRivera%20Web/Portfolio/myelino/app/4_ibykik.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197892/FerRivera%20Web/Portfolio/myelino/app/5_jwobpj.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197918/FerRivera%20Web/Portfolio/myelino/app/6_ylkwh7.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197903/FerRivera%20Web/Portfolio/myelino/app/7_jv6it4.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197901/FerRivera%20Web/Portfolio/myelino/app/8_imxoko.webp',
        ],
      },
      {
        legacyId: '653254a054105e766fc4bbbd',
        kind: 'WEB',
        name: 'Myelino web',
        description: {
          en: 'Myelino Web is the landing page for the Myelino app, where users can sign up for the waitlist to gain early access to the platform.\nThe website provides a simple and intuitive registration process for potential users. It also includes an admin dashboard where administrators can view the waitlist, manage user queries, and track emails sent by users requesting information or wishing to become vendors or sponsors.\nThis system ensures smooth communication between the platform and its users while offering an organized view of incoming requests.',
          es: 'Myelino Web es la landing page de la app Myelino, donde los usuarios pueden registrarse en la lista de espera para obtener acceso anticipado a la plataforma.\nEl sitio web ofrece un proceso de registro simple e intuitivo para los usuarios potenciales. También incluye un panel de administración donde los administradores pueden ver la lista de espera, gestionar las consultas de los usuarios y hacer un seguimiento de los correos enviados por los usuarios que solicitan información o desean convertirse en proveedores o patrocinadores.\nEste sistema asegura una comunicación fluida entre la plataforma y los usuarios, mientras ofrece una vista organizada de las solicitudes entrantes.',
          it: "Myelino Web è la landing page per l'app Myelino, dove gli utenti possono iscriversi alla lista d'attesa per ottenere un accesso anticipato alla piattaforma.\nIl sito offre un processo di registrazione semplice e intuitivo per gli utenti potenziali. Include anche un pannello di amministrazione dove gli amministratori possono visualizzare la lista d'attesa, gestire le richieste degli utenti e monitorare le email inviate dagli utenti che chiedono informazioni o desiderano diventare fornitori o sponsor.\nQuesto sistema garantisce una comunicazione fluida tra la piattaforma e gli utenti, offrendo una panoramica organizzata delle richieste in arrivo.",
        },
        technologies: ['react', 'typescript', 'nextjs', 'tailwind', 'axios'],
        links: {
          url: 'https://myelino.com/',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197912/FerRivera%20Web/Portfolio/myelino/web/1_zvnr3a.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197911/FerRivera%20Web/Portfolio/myelino/web/2_skjan1.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197910/FerRivera%20Web/Portfolio/myelino/web/3_c7gjcp.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197906/FerRivera%20Web/Portfolio/myelino/web/4_skelbg.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197904/FerRivera%20Web/Portfolio/myelino/web/5_tldxhr.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197911/FerRivera%20Web/Portfolio/myelino/web/6_sgvc8u.webp',
        ],
      },
    ],
  },
  {
    slug: 'azahares-credit-union',
    name: 'AZAHARES Credit Union',
    featured: true,
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197912/FerRivera%20Web/Portfolio/projects/azahares_devvsc.webp',
    tagline: {
      en: 'Operations platform for a credit union: members, savings, loans, interest and financial reports.',
      es: 'Plataforma de operación para una cooperativa de ahorro: socios, ahorros, préstamos, intereses y reportes financieros.',
      it: 'Piattaforma gestionale per una cooperativa di credito: soci, risparmi, prestiti, interessi e report finanziari.',
    },
    parts: [
      {
        legacyId: '653268130e9aa3262235c601',
        kind: 'WEB',
        name: 'AZAHARES Credit Union web',
        description: {
          en: 'Azahares Credit Union Web is a web application built with React, TypeScript, and Tailwind CSS, designed to provide an intuitive interface for managing the operations of a credit union. The platform allows for secure and efficient management of user and staff data, offering full CRUD functionality and tools for managing savings accounts, financial closures, and loan calculations.\nThe application generates financial reports, calculates interest rates on loans, and ensures secure access through token-based validation. With a modern and responsive design powered by Tailwind CSS, it ensures a seamless user experience across various devices. This web platform helps streamline the operations of a credit union, making essential financial services accessible with ease.',
          es: 'Azahares Credit Union Web es una aplicación web desarrollada con React, TypeScript y Tailwind CSS, pensada para ofrecer una interfaz intuitiva que facilite la gestión de las operaciones de una cooperativa de crédito. La plataforma permite la gestión segura y eficiente de los datos de usuarios y personal, con funcionalidades completas de CRUD y herramientas para la gestión de cuentas de ahorro, cierres financieros y cálculos de préstamos.\nLa aplicación genera informes financieros, calcula las tasas de interés de los préstamos y asegura un acceso seguro mediante validación con tokens. Con un diseño moderno y adaptable gracias a Tailwind CSS, garantiza una experiencia de usuario fluida en diversos dispositivos. Esta plataforma web optimiza las operaciones de una cooperativa de crédito, facilitando el acceso a servicios financieros esenciales.',
          it: "Azahares Credit Union Web è un'applicazione web sviluppata con React, TypeScript e Tailwind CSS, progettata per offrire un'interfaccia intuitiva per la gestione delle operazioni di una cooperativa di credito. La piattaforma consente una gestione sicura ed efficiente dei dati di utenti e personale, con funzionalità complete di CRUD e strumenti per la gestione dei conti di risparmio, delle chiusure finanziarie e dei calcoli dei prestiti.\nL'applicazione genera report finanziari, calcola i tassi di interesse sui prestiti e garantisce l'accesso sicuro tramite validazione con token. Con un design moderno e reattivo grazie a Tailwind CSS, garantisce un'esperienza utente fluida su diversi dispositivi. Questa piattaforma web semplifica le operazioni di una cooperativa di credito, facilitando l'accesso a servizi finanziari essenziali.",
        },
        technologies: ['react', 'typescript', 'tailwind'],
        links: {},
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197862/FerRivera%20Web/Portfolio/azahares/web/1_emcgkc.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/2_fs2y7z.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/3_nwgdkh.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197860/FerRivera%20Web/Portfolio/azahares/web/4_lsgrvu.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197864/FerRivera%20Web/Portfolio/azahares/web/5_nlnwor.webp',
        ],
      },
      {
        legacyId: '653268130e9bb3262236a601',
        kind: 'BACKEND',
        name: 'AZAHARES Credit Union',
        description: {
          en: 'Azahares Credit Union Server is the backend system designed to support the operations of a financial institution, providing secure and efficient management of user data, staff, and financial services. It includes CRUD operations for users and staff, along with robust tools for managing savings accounts, financial closures, and loan calculations.\nThe server also generates financial reports and calculates interest rates on loans, ensuring compliance and transparency. It uses token-based validation to guarantee secure access and data integrity. With a focus on security and accuracy, this backend is designed to streamline the operations of a credit union while providing essential financial services and reports.',
          es: 'Azahares Credit Union Server es el sistema backend diseñado para respaldar las operaciones de una institución financiera, proporcionando una gestión segura y eficiente de los datos de usuarios, personal y servicios financieros. Incluye operaciones completas de CRUD para usuarios y personal, junto con herramientas robustas para gestionar cuentas de ahorro, cierres financieros y cálculos de préstamos.\nEl servidor también genera informes financieros y calcula las tasas de interés de los préstamos, asegurando cumplimiento y transparencia. Utiliza validación mediante tokens para garantizar un acceso seguro y la integridad de los datos. Con un enfoque en la seguridad y la precisión, este backend está diseñado para agilizar las operaciones de una cooperativa de crédito, ofreciendo servicios financieros esenciales e informes detallados.',
          it: "Azahares Credit Union Server è il sistema backend progettato per supportare le operazioni di un'istituzione finanziaria, offrendo una gestione sicura ed efficiente dei dati degli utenti, del personale e dei servizi finanziari. Include operazioni CRUD per utenti e personale, insieme a strumenti avanzati per la gestione dei conti di risparmio, delle chiusure finanziarie e dei calcoli dei prestiti.\nIl server genera anche report finanziari e calcola i tassi di interesse sui prestiti, garantendo conformità e trasparenza. Utilizza validazione tramite token per garantire un accesso sicuro e l'integrità dei dati. Con un focus sulla sicurezza e sull'accuratezza, questo backend è progettato per semplificare le operazioni di una cooperativa di credito, offrendo servizi finanziari essenziali e report dettagliati.",
        },
        technologies: [
          'nest',
          'typescript',
          'mongoDB',
          'jwt',
          'PDF Make',
          'docker',
        ],
        links: {
          docsUrl: 'https://documenter.getpostman.com/view/11178258/2s9YRB2rbS',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197863/FerRivera%20Web/Portfolio/azahares/server/1_kyryjh.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/azahares/server/2_qrdq8l.webp',
        ],
      },
    ],
  },
  {
    slug: 'react-native-nitro-wakeword',
    name: 'react-native-nitro-wakeword',
    featured: true,
    section: 'library',
    tagline: {
      en: 'Open-source, on-device wake word detection for React Native. No cloud, no license keys.',
      es: 'Detección de palabra de activación (wake word) en el dispositivo para React Native. Open source, sin nube ni licencias.',
      it: 'Rilevamento della wake word on-device per React Native. Open source, senza cloud né chiavi di licenza.',
    },
    parts: [
      {
        kind: 'LIBRARY',
        name: 'react-native-nitro-wakeword',
        install:
          'yarn add react-native-nitro-wakeword react-native-nitro-modules',
        description: {
          en: 'react-native-nitro-wakeword is an open-source React Native library for on-device wake word detection. It runs the openWakeWord pipeline (mel spectrogram, speech embedding and keyword classifier) on ONNX Runtime, with no cloud services, no license keys and no vendor lock-in.\nAudio capture is fully native on iOS (Swift) and Android (Kotlin) and is exposed through Nitro Modules, so JavaScript only receives detection events. Several keywords can run at once over a single shared audio front-end, and an optional Silero VAD gate cuts false positives.\nIt works with Expo (config plugin) and the bare React Native CLI, offers both an imperative API and a useWakeWord hook, supports background listening, and lets you train custom keywords in any language with a free Colab notebook.',
          es: 'react-native-nitro-wakeword es una librería open source para React Native que detecta palabras de activación (wake words) directamente en el dispositivo. Ejecuta el pipeline de openWakeWord (espectrograma mel, embedding de voz y clasificador de palabra clave) sobre ONNX Runtime, sin servicios en la nube, sin llaves de licencia y sin depender de un proveedor.\nLa captura de audio es 100% nativa en iOS (Swift) y Android (Kotlin) y se expone mediante Nitro Modules, así que JavaScript solo recibe los eventos de detección. Permite escuchar varias palabras clave a la vez sobre un mismo front-end de audio e incluye un filtro opcional con Silero VAD para reducir falsos positivos.\nFunciona con Expo (config plugin) y con React Native CLI, ofrece una API imperativa y un hook useWakeWord, soporta escucha en segundo plano y permite entrenar palabras clave propias en cualquier idioma con un notebook gratuito de Colab.',
          it: "react-native-nitro-wakeword è una libreria open source per React Native che rileva le wake word direttamente sul dispositivo. Esegue la pipeline di openWakeWord (spettrogramma mel, embedding vocale e classificatore di parole chiave) su ONNX Runtime, senza servizi cloud, senza chiavi di licenza e senza vincoli verso un fornitore.\nLa cattura audio è interamente nativa su iOS (Swift) e Android (Kotlin) ed è esposta tramite Nitro Modules, quindi JavaScript riceve solo gli eventi di rilevamento. Più parole chiave possono funzionare contemporaneamente su un unico front-end audio condiviso e un filtro opzionale Silero VAD riduce i falsi positivi.\nFunziona con Expo (config plugin) e con React Native CLI, offre un'API imperativa e un hook useWakeWord, supporta l'ascolto in background e permette di addestrare parole chiave personalizzate in qualsiasi lingua con un notebook Colab gratuito.",
        },
        technologies: [
          'reactNative',
          'typescript',
          'swift',
          'kotlin',
          'ONNX Runtime',
          'Nitro Modules',
          'expo',
        ],
        links: {
          npm: 'https://www.npmjs.com/package/react-native-nitro-wakeword',
          github: 'https://github.com/FerRiv3ra/react-native-nitro-wakeword',
        },
        images: [],
      },
    ],
  },
  {
    slug: 'ifootschedule',
    name: 'iFootSchedule',
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197923/FerRivera%20Web/Portfolio/projects/iFootSchedule_jjuxlx.webp',
    tagline: {
      en: 'Football calendar to follow match results, from Qatar 2022 to La Liga, Premier League and Champions League.',
      es: 'Calendario de fútbol para seguir resultados, desde Qatar 2022 hasta LaLiga, Premier League y Champions.',
      it: 'Calendario di calcio per seguire i risultati, da Qatar 2022 a Liga, Premier League e Champions League.',
    },
    parts: [
      {
        legacyId: '649084f99ad5fb317b0512bf',
        kind: 'APPMOVIL',
        name: 'iFootSchedule',
        description: {
          en: 'iFootSchedule is a mobile app built with React Native, designed to let users save and view football match results in a clean and interactive calendar format. It was originally launched to track the matches of the Qatar 2022 World Cup, and later expanded to include major competitions like La Liga, the Premier League, and the UEFA Champions League.\nThe app also features a countdown to keep users informed of how many days remain until the next World Cup (Union 2026), keeping football fans excited for upcoming global events.',
          es: 'iFootSchedule es una aplicación móvil desarrollada en React Native que permite a los usuarios guardar y visualizar resultados de partidos de forma organizada e intuitiva. Inicialmente creada para registrar los encuentros del Mundial de Qatar 2022, la app evolucionó para incluir otras competiciones populares como La Liga Española, la Premier League, y la UEFA Champions League.\nLa aplicación también incorpora una funcionalidad de cuenta regresiva que muestra los días restantes para el próximo Mundial de 2026 (Unión 2026), lo que mantiene a los fanáticos del fútbol conectados con los eventos más importantes.',
          it: 'iFootSchedule è un’app mobile sviluppata con React Native, pensata per permettere agli utenti di salvare e visualizzare i risultati delle partite di calcio in un calendario interattivo e intuitivo. Inizialmente progettata per il Mondiale di Qatar 2022, l’app è stata successivamente ampliata per includere competizioni come La Liga, la Premier League e la UEFA Champions League.\nInclude anche una funzionalità di conto alla rovescia che mostra quanti giorni mancano al prossimo Mondiale (Union 2026), mantenendo alta l’attesa tra i tifosi.',
        },
        technologies: [
          'reactNative',
          'javascript',
          'realm',
          'i18next',
          'fontAwesome',
          'reactNavigation',
        ],
        links: {
          appstore: 'https://apps.apple.com/us/app/ifootschedule/id1637489532',
          playstore:
            'https://play.google.com/store/apps/details?id=com.ferrivera.ifootschedule',
          github: 'https://github.com/FerRiv3ra/iFootSchedule',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/iFootSchedule/1_nolyyz.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197887/FerRivera%20Web/Portfolio/iFootSchedule/2_ubcfpa.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197889/FerRivera%20Web/Portfolio/iFootSchedule/3_su3cik.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197878/FerRivera%20Web/Portfolio/iFootSchedule/4_xfhxfp.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197878/FerRivera%20Web/Portfolio/iFootSchedule/5_xg945n.webp',
        ],
      },
    ],
  },
  {
    slug: 'checkstudents',
    name: 'CheckStudents',
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197918/FerRivera%20Web/Portfolio/projects/checkstudents_aiajyp.webp',
    tagline: {
      en: 'Classroom attendance with daily-rotating QR codes for students and teachers.',
      es: 'Control de asistencia en el aula con códigos QR que cambian a diario, para alumnos y profesores.',
      it: 'Gestione delle presenze in aula con codici QR che cambiano ogni giorno, per studenti e docenti.',
    },
    parts: [
      {
        legacyId: '649085439ad5fb317b0512c2',
        kind: 'APPMOVIL',
        name: 'CheckStudents',
        description: {
          en: 'CheckStudents is a mobile app built to manage classroom attendance through the use of dynamic QR codes. Designed with both security and usability in mind, it offers tailored features for students and teachers alike.\nStudents can log in to the app and display a unique QR code that changes daily, preventing the misuse of screenshots or static codes to fake attendance.\nTeachers can create courses and manage student lists for each class, scan student QR codes using the app, and generate detailed attendance reports that are viewable within the application.\nThis application modernizes attendance management, reducing manual work and improving accuracy and reliability in classroom environments.',
          es: 'CheckStudents es una aplicación móvil diseñada para gestionar la asistencia en aulas de clase utilizando códigos QR dinámicos. Desarrollada con un enfoque en la seguridad y la eficiencia, la app permite a los estudiantes y docentes interactuar mediante funcionalidades específicas para cada rol.\nLos estudiantes pueden acceder a la app para mostrar un código QR único que cambia diariamente, lo cual previene el uso de capturas de pantalla o códigos falsos para registrar asistencia de forma fraudulenta.\nLos docentes pueden crear asignaturas y gestionar listas de estudiantes por clase, escanear los códigos QR presentados por los alumnos, y generar informes de asistencia detallados, que pueden ser visualizados desde la misma aplicación.\nEsta solución ofrece una forma práctica y moderna de llevar el control de asistencia, minimizando errores manuales y reduciendo el tiempo administrativo en el aula.',
          it: "CheckStudents è un'app mobile pensata per gestire la presenza degli studenti in aula utilizzando codici QR dinamici. L'app è progettata per garantire sicurezza ed efficienza, offrendo funzionalità distinte per studenti e insegnanti.\nGli studenti possono accedere alla propria area nell’app e mostrare un codice QR unico che cambia ogni giorno, impedendo così l’utilizzo di screenshot o codici statici per simulare la presenza.\nGli insegnanti possono creare materie e gestire elenchi di studenti per ciascun corso, scansionare i codici QR mostrati dagli studenti e generare rapporti dettagliati di presenza, consultabili direttamente all'interno dell’applicazione.\nCheckStudents offre una soluzione moderna e sicura per il controllo delle presenze, riducendo il lavoro manuale e aumentando la precisione nel contesto educativo.",
        },
        technologies: [
          'reactNative',
          'typescript',
          'axios',
          'fontAwesome',
          'reactNavigation',
          'i18next',
          'React Native Camera Kit',
          'gestureHandler',
        ],
        links: {
          appstore: 'https://apps.apple.com/us/app/checkstudents/id6443751412',
          github: 'https://github.com/FerRiv3ra/CheckStudents-student',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197875/FerRivera%20Web/Portfolio/checkStudents/1_oxlaov.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197872/FerRivera%20Web/Portfolio/checkStudents/2_wkxdg1.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197874/FerRivera%20Web/Portfolio/checkStudents/3_zqlesx.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/checkStudents/4_h1wgrm.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/checkStudents/5_zyamvx.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197876/FerRivera%20Web/Portfolio/checkStudents/6_aykkoj.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197875/FerRivera%20Web/Portfolio/checkStudents/7_p5qolq.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197867/FerRivera%20Web/Portfolio/checkStudents/8_kdysxg.webp',
        ],
      },
      {
        legacyId: '649085fb9ad5fb317b0512cb',
        kind: 'BACKEND',
        name: 'CheckStudents Server',
        description: {
          en: 'CheckStudents Server is the backend system for a QR-based classroom attendance application. It provides full CRUD operations for managing both teachers and students, supporting dynamic classroom structures and subject assignments. The server includes password recovery functionality to ensure continuous access for users.\nIt enables the generation of attendance reports in XLSX format and supports sending those reports directly via email. With a focus on simplicity and performance, this backend facilitates smooth data flow between the mobile app and administrators, ensuring reliable attendance tracking and reporting.',
          es: 'CheckStudents Server es el sistema backend de una aplicación de control de asistencias en el aula mediante códigos QR. Ofrece operaciones completas de CRUD para la gestión de docentes y estudiantes, permitiendo una organización flexible de materias y listas. También incorpora recuperación de contraseña para mantener el acceso activo en todo momento.\nEl servidor permite generar reportes de asistencia en formato XLSX y enviarlos directamente por correo electrónico. Su diseño enfocado en la simplicidad y el buen rendimiento asegura una comunicación eficiente entre la app móvil y los administradores, facilitando un registro de asistencia confiable y automatizado.',
          it: "CheckStudents Server è il backend di un'app per il controllo delle presenze in aula tramite codici QR. Include tutte le operazioni CRUD per la gestione di docenti e studenti, offrendo una struttura flessibile per l’organizzazione delle materie e delle liste. La funzione di recupero password garantisce un accesso continuo al sistema.\nIl server consente la generazione di report di presenza in formato XLSX e l’invio diretto tramite email. Con un’architettura orientata alla semplicità e alla performance, supporta un flusso di dati fluido tra l'app mobile e gli amministratori, rendendo il monitoraggio delle presenze preciso ed efficiente.",
        },
        technologies: [
          'node',
          'javascript',
          'express',
          'mongoDB',
          'mongoose',
          'jwt',
          'Excel JS',
        ],
        links: {
          docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUfmV',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197877/FerRivera%20Web/Portfolio/checkStudents/s1_lyslhk.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/checkStudents/s2_kflckn.webp',
        ],
      },
    ],
  },
  {
    slug: 'cuidados-meraki',
    name: 'Cuidados Meraki',
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197930/FerRivera%20Web/Portfolio/projects/meraki_zzzobe.webp',
    tagline: {
      en: 'Admin panel and API for a care and wellness service: coupons, campaigns and roles.',
      es: 'Panel de administración y API para un servicio de cuidados y bienestar: cupones, campañas y roles.',
      it: 'Pannello di amministrazione e API per un servizio di cura e benessere: coupon, campagne e ruoli.',
    },
    parts: [
      {
        legacyId: '649086ff61d349f5e138a095',
        kind: 'WEB',
        name: 'Cuidados Meraki',
        description: {
          en: 'Cuidados Meraki Web is a web application designed to manage services through an easy-to-use administration panel.\nThe platform enables administrators to efficiently handle the redemption and creation of coupons, offering a seamless experience for both the users and the administrators. It allows for the creation of promotional campaigns, tracking of coupon usage, and ensures that the redemption process is smooth and secure. With its intuitive interface, Cuidados Meraki Web provides all the tools needed to manage services and promotional offers effectively.',
          es: 'Cuidados Meraki Web es una aplicación web diseñada para gestionar los servicios a través de un panel de administración fácil de usar.\nLa plataforma permite a los administradores gestionar de manera eficiente el canje y la creación de cupones, ofreciendo una experiencia fluida tanto para los usuarios como para los administradores. Permite la creación de campañas promocionales, el seguimiento del uso de los cupones y garantiza que el proceso de canje sea sencillo y seguro. Con su interfaz intuitiva, Cuidados Meraki Web ofrece todas las herramientas necesarias para gestionar eficazmente los servicios y las ofertas promocionales.',
          it: "Cuidados Meraki Web è un'applicazione web progettata per gestire i servizi tramite un pannello di amministrazione facile da usare.\nLa piattaforma consente agli amministratori di gestire in modo efficiente il riscatto e la creazione di coupon, offrendo un'esperienza fluida sia per gli utenti che per gli amministratori. Permette la creazione di campagne promozionali, il monitoraggio dell'uso dei coupon e garantisce che il processo di riscatto sia semplice e sicuro. Con la sua interfaccia intuitiva, Cuidados Meraki Web fornisce tutti gli strumenti necessari per gestire efficacemente i servizi e le offerte promozionali.",
        },
        technologies: [
          'react',
          'javascript',
          'reactRouter',
          'tailwind',
          'axios',
        ],
        links: {
          url: 'https://www.cuidadosmeraki.com/',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197902/FerRivera%20Web/Portfolio/meraki/1_mdb1or.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197890/FerRivera%20Web/Portfolio/meraki/2_apxeaa.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197889/FerRivera%20Web/Portfolio/meraki/3_lsks9v.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197888/FerRivera%20Web/Portfolio/meraki/4_titumq.webp',
        ],
      },
      {
        legacyId: '6490862b9ad5fb317b0512ce',
        kind: 'BACKEND',
        name: 'Cuidados Meraki Server',
        description: {
          en: 'Cuidados Meraki Server is the backend system designed to support a personalized care and wellness service platform. It offers complete CRUD operations for user management, along with a flexible role-based access control system, enabling the assignment of different permissions and responsibilities across various user types.\nThe server includes functionality for password recovery, coupon generation for promotions or discounts, and image uploads for user profiles or service-related content. Additionally, it supports sending automated emails, streamlining communication and engagement with users. This backend provides a solid foundation for delivering personalized services while maintaining security and administrative control.',
          es: 'Cuidados Meraki Server es el sistema backend que da soporte a una plataforma de servicios de cuidado y bienestar personalizados. Ofrece operaciones completas de CRUD para la gestión de usuarios, así como un sistema flexible de gestión de roles, lo que permite asignar distintos niveles de acceso y funciones según el tipo de usuario.\nIncluye funcionalidades como la recuperación de contraseña, la generación de cupones para promociones o descuentos, la carga de imágenes (por ejemplo, para perfiles o servicios), y el envío de correos electrónicos automatizados. Este backend proporciona una base sólida para ofrecer servicios personalizados con un control administrativo seguro y eficiente.',
          it: 'Cuidados Meraki Server è il backend pensato per supportare una piattaforma di servizi personalizzati nel settore del benessere e della cura. Offre tutte le operazioni CRUD per la gestione degli utenti, insieme a un sistema flessibile di gestione dei ruoli, che consente di assegnare permessi e responsabilità in base al tipo di utente.\nIl server include la recuperazione della password, la generazione di coupon per sconti o promozioni, il caricamento di immagini (per profili o contenuti legati ai servizi) e l’invio di email automatiche, migliorando la comunicazione con gli utenti. È una soluzione solida per offrire servizi personalizzati in modo sicuro ed efficiente.',
        },
        technologies: [
          'node',
          'javascript',
          'express',
          'mongoDB',
          'mongoose',
          'jwt',
        ],
        links: {
          docsUrl: 'https://documenter.getpostman.com/view/11178258/2s93mAUzZf',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197898/FerRivera%20Web/Portfolio/meraki/s1_a1jg2a.webp',
        ],
      },
    ],
  },
  {
    slug: 'betterlists',
    name: 'BetterLists',
    section: 'product',
    cover:
      'https://res.cloudinary.com/fercloudinary/image/upload/v1744197922/FerRivera%20Web/Portfolio/projects/better_lists_qqinhs.webp',
    tagline: {
      en: 'Offline shopping and to-do lists with categories, prices and custom icons.',
      es: 'Listas de compras y de tareas offline con categorías, precios e íconos personalizados.',
      it: 'Liste della spesa e delle cose da fare offline, con categorie, prezzi e icone personalizzate.',
    },
    parts: [
      {
        legacyId: '6490858a9ad5fb317b0512c5',
        kind: 'APPMOVIL',
        name: 'BetterLists',
        description: {
          en: 'BetterLists is a mobile application designed to enhance personal organization by allowing users to create two types of lists: shopping lists and to-do lists. Each list type is tailored with features to match its specific purpose in daily life.\nIn the shopping list mode, users can add items grouped by category, assign a price to each product, and instantly view the total cost. Items can also be sorted by name or by price, making shopping preparation more efficient and organized.\nIn the to-do list mode, categories are not required. Instead, users can personalize each task with a custom icon, providing a quick and visual way to identify and manage tasks.\nBetterLists brings together simplicity and smart features, helping users stay on top of both their purchases and daily tasks from one intuitive mobile app.',
          es: 'BetterLists es una aplicación móvil desarrollada para facilitar la organización personal mediante la creación de dos tipos de listas: listas de compras y listas de tareas. Cada tipo está diseñado con funcionalidades específicas para adaptarse a diferentes necesidades del día a día.\nEn las listas de compras, los usuarios pueden añadir productos agrupándolos por categoría, asignar un precio a cada ítem y ver automáticamente el total. También es posible ordenar los productos por nombre o por precio, lo que hace que la planificación de compras sea más clara y eficiente.\nEn las listas de cosas por hacer, no es necesario agregar categorías. En su lugar, los usuarios pueden personalizar cada tarea con un ícono representativo, permitiendo una visualización rápida y amigable de las actividades pendientes.\nBetterLists combina simplicidad con funcionalidad para ayudar a los usuarios a mantener el control de sus compras y tareas cotidianas desde una sola app intuitiva.',
          it: "BetterLists è un'applicazione mobile pensata per migliorare l'organizzazione personale attraverso la creazione di due tipi di liste: liste della spesa e liste di cose da fare. Ogni tipologia è progettata con funzionalità specifiche per rispondere a esigenze diverse nella vita quotidiana.\nNella modalità lista della spesa, l’utente può aggiungere prodotti raggruppandoli per categoria, assegnare un prezzo a ciascun articolo e visualizzare automaticamente il totale. È possibile anche ordinare gli elementi per nome o per prezzo, rendendo la pianificazione degli acquisti più chiara ed efficiente.\nNella modalità lista di cose da fare, non è necessario assegnare categorie. Al contrario, ogni attività può essere personalizzata con un’icona, rendendo più semplice e immediata la visualizzazione delle attività.\nBetterLists unisce semplicità e funzionalità intelligenti, offrendo uno strumento efficace per gestire acquisti e impegni quotidiani in un’unica app intuitiva.",
        },
        technologies: [
          'reactNative',
          'typescript',
          'realm',
          'vectorIcons',
          'reactNavigation',
          'i18next',
          'gestureHandler',
        ],
        links: {
          github: 'https://github.com/FerRiv3ra/BetterList',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197866/FerRivera%20Web/Portfolio/betterLists/1_ookcii.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/betterLists/2_lt12x1.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197868/FerRivera%20Web/Portfolio/betterLists/3_hxdkuk.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197865/FerRivera%20Web/Portfolio/betterLists/4_cf9e7w.webp',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1744197866/FerRivera%20Web/Portfolio/betterLists/5_qt4koa.webp',
        ],
      },
    ],
  },
  {
    slug: 'rn-inkpad',
    name: 'RN Inkpad',
    section: 'library',
    tagline: {
      en: 'UI kit for React Native: action sheets, alerts, buttons, FABs and more.',
      es: 'Kit de UI para React Native: action sheets, alertas, botones, FABs y más.',
      it: 'Kit UI per React Native: action sheet, alert, pulsanti, FAB e altro.',
    },
    parts: [
      {
        legacyId: '663fc56101922cf5f2a28107',
        kind: 'LIBRARY',
        name: 'RN Inkpad',
        description: {
          en: 'RN Inkpad is an open-source React Native UI library that provides a wide range of ready-to-use components for building modern and interactive mobile applications. The library includes various essential components such as Action Sheets, Alerts, Buttons, Long Press Buttons, Floating Action Buttons (FAB), Radio Buttons, Inputs, Navigations, Sliders, Toasts, and more.\nThese components are highly customizable and designed to be simple to implement, saving developers time while ensuring a high-quality user interface across different mobile platforms.',
          es: 'RN Inkpad es una biblioteca open source de UI para React Native que proporciona una amplia gama de componentes listos para usar para crear aplicaciones móviles modernas e interactivas. La biblioteca incluye diversos componentes esenciales como Action Sheets, Alertas, Botones, Botones de Presión Prolongada, Botones Flotantes de Acción (FAB), Botones de Opción (Radio), Entradas de Usuario (Inputs), Navegaciones, Deslizadores, Toasts, entre otros.\nEstos componentes son altamente personalizables y están diseñados para ser fáciles de implementar, lo que ahorra tiempo a los desarrolladores mientras se asegura una interfaz de usuario de alta calidad en diferentes plataformas móviles.',
          it: "RN Inkpad è una libreria open source UI per React Native che offre una vasta gamma di componenti pronti all'uso per costruire applicazioni mobili moderne e interattive. La libreria include vari componenti essenziali come Action Sheets, Alert, Pulsanti, Pulsante Long Press, Floating Action Button (FAB), Pulsanti Radio, Input, Navigazioni, Slider, Toast, e altri.\nQuesti componenti sono altamente personalizzabili e progettati per essere facili da implementare, risparmiando tempo agli sviluppatori pur garantendo un'interfaccia utente di alta qualità su diverse piattaforme mobili.",
        },
        technologies: ['reactNative', 'typescript'],
        links: {
          url: 'https://rn-inkpad.web.app/',
          github: 'https://github.com/FerRiv3ra/rn-inkpad',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306847/packages/action-sheet/actionsheet-ios-light_fceujq.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306846/packages/action-sheet/actionsheet-android-light_n34v0f.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306860/packages/input/input-props_vofom0.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306865/packages/buttons/longpress-props_aipljn.gif',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306850/packages/navigations/drawer-props_idiebk.gif',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1716306866/packages/cards/floatingcard-props_qmhrkj.gif',
        ],
        install: 'npm i rn-inkpad',
      },
    ],
  },
  {
    slug: 'rn-custom-alert-prompt',
    name: 'RN Custom Alert and Prompt',
    section: 'library',
    tagline: {
      en: 'Customizable Alert and Prompt components with iOS or Android style. Zero dependencies.',
      es: 'Componentes Alert y Prompt personalizables con estilo iOS o Android. Sin dependencias.',
      it: 'Componenti Alert e Prompt personalizzabili in stile iOS o Android. Zero dipendenze.',
    },
    parts: [
      {
        legacyId: '65f4432b1d0b21e1bacc94d0',
        kind: 'LIBRARY',
        name: 'RN Custom Alert and Prompt',
        description: {
          en: 'RN Custom Alert and Prompt is an open-source React Native library that includes customizable Alert and Prompt components with no third-party dependencies. The library offers the flexibility to display alerts with either Android or iOS style, allowing developers to provide platform-specific consistency or show a general alert across both platforms.\nDevelopers can choose how to implement these alerts based on their app’s requirements. Additionally, the library supports both light and dark themes, with platform-specific variations to ensure a seamless user experience on different operating systems.',
          es: 'RN Custom Alert and Prompt es una biblioteca open source de React Native que incluye componentes personalizables de Alertas y Prompts sin dependencias de terceros. La biblioteca ofrece la flexibilidad de mostrar alertas con el estilo de Android o iOS, permitiendo a los desarrolladores mantener consistencia en la plataforma o mostrar una alerta general en ambos sistemas operativos.\nLos desarrolladores pueden decidir cómo implementar estas alertas según las necesidades de su aplicación. Además, la biblioteca soporta tanto temas claros como oscuros, con variaciones específicas para cada sistema operativo para asegurar una experiencia de usuario fluida en diferentes plataformas.',
          it: "RN Custom Alert and Prompt è una libreria open source per React Native che include componenti Alert e Prompt personalizzabili senza dipendenze di terze parti. La libreria offre la flessibilità di visualizzare gli alert con lo stile Android o iOS, consentendo agli sviluppatori di mantenere coerenza sulla piattaforma o di mostrare un alert generale su entrambi i sistemi operativi.\nGli sviluppatori possono decidere come implementare questi alert in base alle esigenze della loro applicazione. Inoltre, la libreria supporta sia temi chiari che scuri, con variazioni specifiche per ogni sistema operativo per garantire un'esperienza utente fluida su diverse piattaforme.",
        },
        technologies: ['reactNative', 'typescript'],
        links: {
          github: 'https://github.com/FerRiv3ra/rn-custom-alert-prompt',
          npm: 'https://www.npmjs.com/package/rn-custom-alert-prompt',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.39_relzf6.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.03_war8fz.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.54.09_holx24.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710435449/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_16.53.54_marhwv.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710438064/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.08_ude9cj.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710438061/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.39.59_iu9c2z.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710438067/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.14_q0h4xf.png',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1710438070/GitHub/Simulator_Screen_Shot_-_iPhone_13_-_2024-03-14_at_17.40.22_khhpvr.png',
        ],
        install: 'npm i rn-custom-alert-prompt',
      },
    ],
  },
  {
    slug: 'rn-segmented-tab-controls',
    name: 'RN Segmented and Tab control',
    section: 'library',
    tagline: {
      en: 'Native-feeling Segmented and Tab controls for React Native. Zero dependencies.',
      es: 'Controles Segmented y Tab con look nativo para React Native. Sin dependencias.',
      it: 'Controlli Segmented e Tab dall’aspetto nativo per React Native. Zero dipendenze.',
    },
    parts: [
      {
        legacyId: '65e32534c05f8f2dbc556318',
        kind: 'LIBRARY',
        name: 'RN Segmented and Tab control',
        description: {
          en: 'RN Segmented and Tab control is an open-source React Native library that provides customizable Segmented and Tab controls, offering developers a simple way to implement these UI elements without relying on third-party dependencies.\nThis library enables users to create flexible and user-friendly interfaces with minimal effort, while ensuring seamless integration into React Native projects.',
          es: 'RN Segmented and Tab control es una biblioteca open source de React Native que ofrece controles Segmentados y de Pestañas personalizables, lo que permite a los desarrolladores implementar fácilmente estos elementos de interfaz de usuario sin depender de bibliotecas de terceros.\nEsta biblioteca permite crear interfaces flexibles y fáciles de usar con poco esfuerzo, asegurando una integración fluida en proyectos de React Native.',
          it: "RN Segmented and Tab control è una libreria open source per React Native che fornisce controlli Segmentati e Tab personalizzabili, offrendo agli sviluppatori un modo semplice per implementare questi elementi dell'interfaccia utente senza dipendere da librerie di terze parti.\nQuesta libreria consente di creare interfacce flessibili e facili da usare con il minimo sforzo, garantendo una perfetta integrazione nei progetti React Native.",
        },
        technologies: ['reactNative', 'typescript'],
        links: {
          github: 'https://github.com/FerRiv3ra/rn-segmented-tab-controls',
          npm: 'https://www.npmjs.com/package/rn-segmented-tab-controls',
        },
        images: [
          'https://res.cloudinary.com/fercloudinary/image/upload/v1709313673/GitHub/segmentedControl_dul8fq.gif',
          'https://res.cloudinary.com/fercloudinary/image/upload/v1709313674/GitHub/tabControl_jntf6i.gif',
        ],
        install: 'npm i rn-segmented-tab-controls',
      },
    ],
  },
];
