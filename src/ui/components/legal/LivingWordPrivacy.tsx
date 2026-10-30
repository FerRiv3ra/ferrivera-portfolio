import Link from 'next/link';
import { ReactNode } from 'react';
import { lato } from '@/ui/fonts';

type Lang = 'en' | 'es';

type Section = { title: string; body: ReactNode };

type Content = {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: Section[];
  otherLanguage: { label: string; href: string };
};

const CONTACT_EMAIL = 'ferriv3ra.dev@gmail.com';

const LAST_UPDATED = { en: 'October 30, 2026', es: '30 de octubre de 2026' };

const A = ({ href, children }: { href: string; children: ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-white underline underline-offset-2 hover:text-[#FD6F00]"
  >
    {children}
  </a>
);

const Email = () => <A href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</A>;

const CONTENT: Record<Lang, Content> = {
  en: {
    title: 'Living Word — Privacy Policy',
    updated: `Last updated: ${LAST_UPDATED.en}`,
    intro: (
      <>
        <p>
          Living Word (called Palabra Viva in Spanish) is an app for iOS and
          Android that turns a Bible verse into an image you can share. It is
          developed by Fernando Rivera (&quot;I&quot;, &quot;me&quot;). This
          policy explains what information the app handles and why.
        </p>
        <p>
          In short: there are no accounts, and I do not run any server that
          receives your data. Your saved verses and settings stay on your
          device. The app is free because it shows ads from Google AdMob, and
          Google collects some information to serve them.
        </p>
      </>
    ),
    sections: [
      {
        title: 'Information stored on your device',
        body: (
          <>
            <p>The app keeps the following on your device only:</p>
            <ul>
              <li>The verses you save (their references, such as John 3:16).</li>
              <li>Your preferences: language, theme and card font.</li>
              <li>
                A count of how many images you have shared, used only to space
                out ads.
              </li>
            </ul>
            <p>
              The app never sends this information to me or anyone else. It is
              deleted when you uninstall the app. Your device&apos;s own backup
              (iCloud or Google) may include it, according to your device
              settings.
            </p>
          </>
        ),
      },
      {
        title: 'Images you create',
        body: (
          <p>
            Images are generated on your device. They leave it only when you
            choose to share them through your system&apos;s share sheet, and
            only to the app or person you pick; that app&apos;s own privacy
            policy then applies. Living Word does not ask for access to your
            photos, camera, contacts, location or microphone.
          </p>
        ),
      },
      {
        title: 'Advertising (Google AdMob)',
        body: (
          <>
            <p>
              The app shows banner and full-screen ads provided by Google
              AdMob. To serve and measure ads and to prevent fraud, Google may
              collect:
            </p>
            <ul>
              <li>
                Your device&apos;s advertising identifier (on iOS, only if you
                allow tracking).
              </li>
              <li>
                Your IP address and an approximate location derived from it.
              </li>
              <li>
                Device and app information, such as model, operating system,
                language and app version.
              </li>
              <li>
                Interactions with ads (for example, views and taps) and
                diagnostic data.
              </li>
            </ul>
            <p>
              Where you allow it, Google may also use this information to show
              personalized ads. Google handles this data under its own policy;
              see{' '}
              <A href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites or apps that use its
                services
              </A>{' '}
              and the{' '}
              <A href="https://policies.google.com/privacy">
                Google Privacy Policy
              </A>
              .
            </p>
            <p>Your choices:</p>
            <ul>
              <li>
                <strong>Consent.</strong> Where the law requires it (for
                example, in the European Economic Area, the United Kingdom and
                Switzerland), Google&apos;s consent form appears the first time
                you open the app. You can change your choice at any time in
                Settings › Ads › Ad privacy.
              </li>
              <li>
                <strong>iOS.</strong> The app asks for permission to track. If
                you decline, your advertising identifier is not shared and you
                will see less personalized ads. You can change this in
                Settings › Privacy &amp; Security › Tracking.
              </li>
              <li>
                <strong>Android.</strong> You can reset or delete your
                advertising ID in your device&apos;s ads settings.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'App updates',
        body: (
          <p>
            The app checks for and downloads small updates from Expo&apos;s
            update service. These requests include the app version, the
            platform, the update channel and a random identifier created for
            your installation, and, like any internet request, your IP address.
            They are used only to deliver the right update. See the{' '}
            <A href="https://expo.dev/privacy">Expo Privacy Policy</A>.
          </p>
        ),
      },
      {
        title: 'What the app does not do',
        body: (
          <ul>
            <li>It does not require or offer accounts or sign-in.</li>
            <li>It does not include analytics of its own.</li>
            <li>
              I do not sell or share your personal information; I do not
              receive any.
            </li>
            <li>
              The Bible text is included in the app; reading it needs no
              connection.
            </li>
          </ul>
        ),
      },
      {
        title: 'Children',
        body: (
          <p>
            Living Word is meant for a general audience and is not directed at
            children under 13. I do not knowingly collect personal information
            from children.
          </p>
        ),
      },
      {
        title: 'Your rights',
        body: (
          <p>
            Because I do not hold personal information about you, there is
            nothing for me to access, correct or delete. You can delete the
            data stored on your device by removing your saved verses or
            uninstalling the app. For data collected by Google for ads, use the
            options above or Google&apos;s own tools. If you have any question,
            write to me.
          </p>
        ),
      },
      {
        title: 'Changes to this policy',
        body: (
          <p>
            If this policy changes, I will update this page and the date at the
            top.
          </p>
        ),
      },
      {
        title: 'Contact',
        body: (
          <p>
            Fernando Rivera — <Email />
          </p>
        ),
      },
    ],
    otherLanguage: {
      label: 'Leer en español',
      href: '/living-word/privacidad',
    },
  },
  es: {
    title: 'Palabra Viva — Política de privacidad',
    updated: `Última actualización: ${LAST_UPDATED.es}`,
    intro: (
      <>
        <p>
          Palabra Viva (Living Word en inglés) es una app para iOS y Android
          que convierte un versículo de la Biblia en una imagen para compartir.
          La desarrolla Fernando Rivera (&quot;yo&quot;). Esta política explica
          qué información maneja la app y por qué.
        </p>
        <p>
          En resumen: no hay cuentas y no tengo ningún servidor que reciba tus
          datos. Tus versículos guardados y tus ajustes se quedan en tu
          dispositivo. La app es gratuita porque muestra anuncios de Google
          AdMob, y Google recopila cierta información para mostrarlos.
        </p>
      </>
    ),
    sections: [
      {
        title: 'Información guardada en tu dispositivo',
        body: (
          <>
            <p>La app guarda lo siguiente solo en tu dispositivo:</p>
            <ul>
              <li>
                Los versículos que guardas (su referencia, como Juan 3:16).
              </li>
              <li>Tus preferencias: idioma, tema y tipografía de la tarjeta.</li>
              <li>
                Cuántas imágenes has compartido, solo para espaciar los
                anuncios.
              </li>
            </ul>
            <p>
              La app nunca me envía esta información ni a nadie más. Se borra
              al desinstalar la app. La copia de seguridad de tu dispositivo
              (iCloud o Google) puede incluirla, según tu configuración.
            </p>
          </>
        ),
      },
      {
        title: 'Imágenes que creas',
        body: (
          <p>
            Las imágenes se generan en tu dispositivo. Solo salen de él cuando
            decides compartirlas con el menú de compartir del sistema, y solo
            hacia la app o persona que eliges; a partir de ahí aplica la
            política de privacidad de esa app. Palabra Viva no pide acceso a
            tus fotos, cámara, contactos, ubicación ni micrófono.
          </p>
        ),
      },
      {
        title: 'Publicidad (Google AdMob)',
        body: (
          <>
            <p>
              La app muestra anuncios de banner y de pantalla completa de
              Google AdMob. Para mostrar y medir los anuncios y prevenir
              fraudes, Google puede recopilar:
            </p>
            <ul>
              <li>
                El identificador de publicidad de tu dispositivo (en iOS, solo
                si permites el rastreo).
              </li>
              <li>Tu dirección IP y una ubicación aproximada derivada de ella.</li>
              <li>
                Información del dispositivo y de la app, como modelo, sistema
                operativo, idioma y versión de la app.
              </li>
              <li>
                Interacciones con los anuncios (por ejemplo, vistas y toques) y
                datos de diagnóstico.
              </li>
            </ul>
            <p>
              Si lo permites, Google también puede usar esta información para
              mostrarte anuncios personalizados. Google trata estos datos según
              su propia política; consulta{' '}
              <A href="https://policies.google.com/technologies/partner-sites?hl=es">
                Cómo utiliza Google la información de los sitios web o
                aplicaciones que utilizan sus servicios
              </A>{' '}
              y la{' '}
              <A href="https://policies.google.com/privacy?hl=es">
                Política de privacidad de Google
              </A>
              .
            </p>
            <p>Tus opciones:</p>
            <ul>
              <li>
                <strong>Consentimiento.</strong> Donde la ley lo exige (por
                ejemplo, en el Espacio Económico Europeo, el Reino Unido y
                Suiza), el formulario de consentimiento de Google aparece la
                primera vez que abres la app. Puedes cambiar tu elección cuando
                quieras en Ajustes › Anuncios › Privacidad de anuncios.
              </li>
              <li>
                <strong>iOS.</strong> La app pide permiso para rastrear. Si no
                lo das, tu identificador de publicidad no se comparte y verás
                anuncios menos personalizados. Puedes cambiarlo en Ajustes ›
                Privacidad y seguridad › Rastreo.
              </li>
              <li>
                <strong>Android.</strong> Puedes restablecer o borrar tu ID de
                publicidad en los ajustes de anuncios de tu dispositivo.
              </li>
            </ul>
          </>
        ),
      },
      {
        title: 'Actualizaciones de la app',
        body: (
          <p>
            La app busca y descarga pequeñas actualizaciones desde el servicio
            de actualizaciones de Expo. Estas solicitudes incluyen la versión
            de la app, la plataforma, el canal de actualización y un
            identificador aleatorio creado para tu instalación y, como toda
            solicitud por internet, tu dirección IP. Solo se usan para entregar
            la actualización correcta. Consulta la{' '}
            <A href="https://expo.dev/privacy">política de privacidad de Expo</A>{' '}
            (en inglés).
          </p>
        ),
      },
      {
        title: 'Lo que la app no hace',
        body: (
          <ul>
            <li>No pide ni ofrece cuentas o inicio de sesión.</li>
            <li>No incluye analítica propia.</li>
            <li>
              No vendo ni comparto tu información personal; no recibo ninguna.
            </li>
            <li>
              El texto bíblico viene incluido en la app; leerlo no necesita
              conexión.
            </li>
          </ul>
        ),
      },
      {
        title: 'Menores',
        body: (
          <p>
            Palabra Viva está pensada para el público general y no está
            dirigida a menores de 13 años. No recopilo a sabiendas información
            personal de menores.
          </p>
        ),
      },
      {
        title: 'Tus derechos',
        body: (
          <p>
            Como no guardo información personal tuya, no hay nada que pueda
            consultar, corregir o borrar. Puedes borrar los datos guardados en
            tu dispositivo quitando tus versículos guardados o desinstalando la
            app. Para los datos que Google recopila para los anuncios, usa las
            opciones de arriba o las herramientas de Google. Si tienes
            cualquier pregunta, escríbeme.
          </p>
        ),
      },
      {
        title: 'Cambios a esta política',
        body: (
          <p>
            Si esta política cambia, actualizaré esta página y la fecha de
            arriba.
          </p>
        ),
      },
      {
        title: 'Contacto',
        body: (
          <p>
            Fernando Rivera — <Email />
          </p>
        ),
      },
    ],
    otherLanguage: {
      label: 'Read in English',
      href: '/living-word/privacy',
    },
  },
};

export const LivingWordPrivacy = ({ lang }: { lang: Lang }) => {
  const content = CONTENT[lang];

  return (
    <main
      lang={lang}
      className={`${lato.className} container mx-auto max-w-3xl px-4 pt-28 pb-16 text-[#BABABA]`}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-2xl xl:text-4xl font-bold text-white">
          {content.title}
        </h1>
        <Link
          href={content.otherLanguage.href}
          className="text-sm text-[#959595] underline underline-offset-2 hover:text-white"
        >
          {content.otherLanguage.label}
        </Link>
      </div>
      <p className="mt-2 text-sm text-[#959595]">{content.updated}</p>

      <div className="mt-8 flex flex-col gap-4 leading-relaxed">
        {content.intro}
      </div>

      {content.sections.map((section) => (
        <section
          key={section.title}
          className="mt-10 flex flex-col gap-3 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2"
        >
          <h2 className="text-xl font-bold text-white">{section.title}</h2>
          {section.body}
        </section>
      ))}
    </main>
  );
};
