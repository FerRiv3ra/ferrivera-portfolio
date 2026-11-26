import Link from "next/link";
import { ReactNode } from "react";
import { lato } from "@/ui/fonts";

type Lang = "en" | "es";

type Section = { title: string; body: ReactNode };

type Content = {
  title: string;
  updated: string;
  intro: ReactNode;
  sections: Section[];
  otherLanguage: { label: string; href: string };
};

const CONTACT_EMAIL = "ferriv3ra.dev@gmail.com";

const LAST_UPDATED = { en: "November 26, 2026", es: "26 de noviembre de 2026" };

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
    title: "Life in the UK Prep — Privacy Policy",
    updated: `Last updated: ${LAST_UPDATED.en}`,
    intro: (
      <>
        <p>
          Life in the UK Prep is an app for iOS and Android that helps you
          prepare for the Life in the UK test with lessons, the handbook text,
          practice questions and mock tests. It is an independent app, not
          affiliated with the Home Office. It is developed by Fernando Rivera
          (&quot;I&quot;, &quot;me&quot;), who is the data controller for the
          information described here. This policy explains what information the
          app handles and why.
        </p>
        <p>
          In short: there are no accounts and I do not run any server that
          receives your answers or progress; they stay on your device. The free
          version shows ads from Google AdMob (non-personalised only). Purchases
          go through Apple or Google and RevenueCat. Anonymous crash reports
          (Sentry) and anonymous usage statistics (PostHog) help me fix problems
          and improve the app; you can turn the usage statistics off.
        </p>
      </>
    ),
    sections: [
      {
        title: "Information stored on your device",
        body: (
          <>
            <p>The app keeps the following on your device only:</p>
            <ul>
              <li>
                Your study progress: lessons completed, your answers, mock test
                and topic test results, mistakes to review and your estimated
                chance of passing.
              </li>
              <li>
                Your preferences: app language, theme, handbook reading
                language, listening speed and your choice about usage
                statistics.
              </li>
              <li>
                Extra mock tests unlocked by watching an ad, to apply the daily
                limit.
              </li>
            </ul>
            <p>
              This information is not sent to me. It is deleted when you
              uninstall the app. Your device&apos;s own backup (iCloud or
              Google) may include it, according to your device settings.
            </p>
          </>
        ),
      },
      {
        title: "Listening to lessons and the handbook",
        body: (
          <p>
            Lessons and the handbook can be read aloud by your device&apos;s own
            text-to-speech voice. The text is passed to your device&apos;s
            speech engine (for example, Apple&apos;s voices or Google or Samsung
            text-to-speech on Android) and never to me. Your device maker&apos;s
            own policy applies to that engine. The app does not use your
            microphone.
          </p>
        ),
      },
      {
        title: "Advertising (Google AdMob)",
        body: (
          <>
            <p>
              The free version shows banner, full-screen and optional rewarded
              ads provided by Google AdMob. Premium removes all ads. The app
              requests <strong>non-personalised ads only</strong>: ads are not
              based on your interests or on what you do in other apps. To serve
              and measure ads, limit how often you see the same ad and prevent
              fraud, Google may still collect:
            </p>
            <ul>
              <li>
                Your IP address and an approximate location derived from it.
              </li>
              <li>
                Device and app information, such as model, operating system,
                language and app version, and identifiers for this purpose (on
                Android, the advertising ID; on iOS the app does not ask to
                track you, so your advertising identifier is not shared).
              </li>
              <li>
                Interactions with ads (for example, views and taps) and
                diagnostic data.
              </li>
            </ul>
            <p>
              Google handles this data under its own policy; see{" "}
              <A href="https://policies.google.com/technologies/partner-sites">
                How Google uses information from sites or apps that use its
                services
              </A>{" "}
              and the{" "}
              <A href="https://policies.google.com/privacy">
                Google Privacy Policy
              </A>
              .
            </p>
            <p>Your choices:</p>
            <ul>
              <li>
                <strong>Consent.</strong> Where the law requires it (the United
                Kingdom, the European Economic Area and Switzerland),
                Google&apos;s consent form appears before any ad is requested,
                and you can consent, manage options or not consent. You can
                change your choice at any time in More › About › Ad privacy
                choices.
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
        title: "Purchases (Apple, Google and RevenueCat)",
        body: (
          <p>
            Premium is bought through the App Store or Google Play; I never see
            your payment details. To know whether Premium is active, the app
            uses RevenueCat, which receives an anonymous identifier created for
            your installation, your purchase history for this app (product,
            dates, store and country), device and app information and, like any
            internet request, your IP address. See the{" "}
            <A href="https://www.revenuecat.com/privacy">
              RevenueCat Privacy Policy
            </A>
            , and Apple&apos;s or Google&apos;s policy for the payment itself.
          </p>
        ),
      },
      {
        title: "Crash reports (Sentry)",
        body: (
          <p>
            When the app crashes or something important fails (for example, the
            study content cannot be opened or a purchase fails), it sends a
            technical report to Sentry, hosted in the European Union. The report
            contains the error, the screens and steps that led to it, device
            model, operating system, app version and a random identifier for
            your installation; Sentry may derive an approximate location from
            the IP address of the request. It contains no name, email or study
            answers. Reports are used only to find and fix bugs. See the{" "}
            <A href="https://sentry.io/privacy/">Sentry Privacy Policy</A>.
          </p>
        ),
      },
      {
        title: "Usage statistics (PostHog)",
        body: (
          <>
            <p>
              To understand which parts of the app are useful, the app sends
              anonymous usage statistics to PostHog, hosted in the European
              Union: the screens you open and events such as finishing the
              introduction, completing a lesson, starting listening, starting or
              finishing a test (with its score), watching a rewarded ad, opening
              the Premium screen and buying or restoring Premium, together with
              the app language, whether you have Premium, app version, device
              type and operating system. They are linked to a random identifier
              created for your installation, not to you, and an approximate
              location (country and city) is derived from the IP address of the
              request. There is no session recording.
            </p>
            <p>
              You can turn this off at any time in More › About › Share
              anonymous usage data. See the{" "}
              <A href="https://posthog.com/privacy">PostHog Privacy Policy</A>.
            </p>
          </>
        ),
      },
      {
        title: "App updates",
        body: (
          <p>
            The app checks for and downloads small updates from Expo&apos;s
            update service. These requests include the app version, the
            platform, the update channel and a random identifier created for
            your installation, and, like any internet request, your IP address.
            They are used only to deliver the right update. See the{" "}
            <A href="https://expo.dev/privacy">Expo Privacy Policy</A>.
          </p>
        ),
      },
      {
        title: "Legal bases (UK GDPR)",
        body: (
          <ul>
            <li>
              <strong>Ads:</strong> your consent where it is required, given in
              Google&apos;s consent form.
            </li>
            <li>
              <strong>Purchases:</strong> to provide the Premium you bought
              (performance of a contract).
            </li>
            <li>
              <strong>Crash reports, usage statistics and updates:</strong> my
              legitimate interest in keeping the app working and improving it,
              using only anonymous data; you can turn the usage statistics off.
            </li>
          </ul>
        ),
      },
      {
        title: "Where data is processed and for how long",
        body: (
          <p>
            Sentry and PostHog process data in the European Union. Google and
            RevenueCat may process data in other countries, including the United
            States, under their own safeguards. Crash reports are kept by Sentry
            for up to 90 days and usage statistics by PostHog for up to one
            year. Data kept by Google, Apple and RevenueCat follows their own
            policies.
          </p>
        ),
      },
      {
        title: "What the app does not do",
        body: (
          <ul>
            <li>It does not require or offer accounts or sign-in.</li>
            <li>
              It does not ask for access to your contacts, photos, camera,
              microphone or precise location.
            </li>
            <li>It does not track you across other apps or websites.</li>
            <li>I do not sell your personal information.</li>
            <li>
              The study content is included in the app; studying needs no
              connection.
            </li>
          </ul>
        ),
      },
      {
        title: "Children",
        body: (
          <p>
            Life in the UK Prep is meant for adults preparing for the Life in
            the UK test and is not directed at children under 13. I do not
            knowingly collect personal information from children.
          </p>
        ),
      },
      {
        title: "Your rights",
        body: (
          <p>
            Under UK and EU data protection law you can ask to access, correct
            or delete personal data, object to its use and complain to a
            supervisory authority (in the UK, the{" "}
            <A href="https://ico.org.uk/make-a-complaint/">
              Information Commissioner&apos;s Office
            </A>
            ). I hold no data that identifies you: your progress is only on your
            device, and crash reports and statistics use a random identifier.
            You can delete your progress in the app or by uninstalling it, turn
            off usage statistics in More, and manage ad choices as described
            above. For anything else, write to me.
          </p>
        ),
      },
      {
        title: "Changes to this policy",
        body: (
          <p>
            If this policy changes, I will update this page and the date at the
            top.
          </p>
        ),
      },
      {
        title: "Contact",
        body: (
          <p>
            Fernando Rivera — <Email />
          </p>
        ),
      },
    ],
    otherLanguage: {
      label: "Leer en español",
      href: "/life-in-uk/privacidad",
    },
  },
  es: {
    title: "Life in the UK Prep — Política de privacidad",
    updated: `Última actualización: ${LAST_UPDATED.es}`,
    intro: (
      <>
        <p>
          Life in the UK Prep es una app para iOS y Android que te ayuda a
          preparar el examen Life in the UK con lecciones, el texto del manual,
          preguntas de práctica y exámenes de prueba. Es una app independiente,
          sin relación con el Home Office. La desarrolla Fernando Rivera
          (&quot;yo&quot;), responsable del tratamiento de la información que se
          describe aquí. Esta política explica qué información maneja la app y
          por qué.
        </p>
        <p>
          En resumen: no hay cuentas y no tengo ningún servidor que reciba tus
          respuestas o tu progreso; se quedan en tu dispositivo. La versión
          gratuita muestra anuncios de Google AdMob (solo no personalizados).
          Las compras se hacen a través de Apple o Google y RevenueCat. Los
          informes de errores anónimos (Sentry) y las estadísticas de uso
          anónimas (PostHog) me ayudan a corregir fallos y mejorar la app;
          puedes desactivar las estadísticas de uso.
        </p>
      </>
    ),
    sections: [
      {
        title: "Información guardada en tu dispositivo",
        body: (
          <>
            <p>La app guarda lo siguiente solo en tu dispositivo:</p>
            <ul>
              <li>
                Tu progreso: lecciones completadas, tus respuestas, resultados
                de exámenes de prueba y de tema, errores para repasar y tu
                probabilidad estimada de aprobar.
              </li>
              <li>
                Tus preferencias: idioma de la app, tema, idioma de lectura del
                manual, velocidad de lectura en voz alta y tu elección sobre las
                estadísticas de uso.
              </li>
              <li>
                Los exámenes extra desbloqueados viendo un anuncio, para aplicar
                el límite diario.
              </li>
            </ul>
            <p>
              Esta información no se me envía. Se borra al desinstalar la app.
              La copia de seguridad de tu dispositivo (iCloud o Google) puede
              incluirla, según tu configuración.
            </p>
          </>
        ),
      },
      {
        title: "Escuchar las lecciones y el manual",
        body: (
          <p>
            Las lecciones y el manual se pueden leer en voz alta con la voz de
            tu propio dispositivo. El texto se pasa al motor de voz de tu
            dispositivo (por ejemplo, las voces de Apple o la síntesis de voz de
            Google o Samsung en Android) y nunca a mí. A ese motor se le aplica
            la política del fabricante de tu dispositivo. La app no usa tu
            micrófono.
          </p>
        ),
      },
      {
        title: "Publicidad (Google AdMob)",
        body: (
          <>
            <p>
              La versión gratuita muestra anuncios de banner, de pantalla
              completa y anuncios con recompensa opcionales de Google AdMob.
              Premium quita todos los anuncios. La app pide{" "}
              <strong>solo anuncios no personalizados</strong>: no se basan en
              tus intereses ni en lo que haces en otras apps. Para mostrar y
              medir los anuncios, limitar cuántas veces ves el mismo anuncio y
              prevenir fraudes, Google puede recopilar igualmente:
            </p>
            <ul>
              <li>
                Tu dirección IP y una ubicación aproximada derivada de ella.
              </li>
              <li>
                Información del dispositivo y de la app, como modelo, sistema
                operativo, idioma y versión de la app, e identificadores para
                este fin (en Android, el ID de publicidad; en iOS la app no pide
                permiso para rastrearte, así que tu identificador de publicidad
                no se comparte).
              </li>
              <li>
                Interacciones con los anuncios (por ejemplo, vistas y toques) y
                datos de diagnóstico.
              </li>
            </ul>
            <p>
              Google trata estos datos según su propia política; consulta{" "}
              <A href="https://policies.google.com/technologies/partner-sites?hl=es">
                Cómo utiliza Google la información de los sitios web o
                aplicaciones que utilizan sus servicios
              </A>{" "}
              y la{" "}
              <A href="https://policies.google.com/privacy?hl=es">
                Política de privacidad de Google
              </A>
              .
            </p>
            <p>Tus opciones:</p>
            <ul>
              <li>
                <strong>Consentimiento.</strong> Donde la ley lo exige (el Reino
                Unido, el Espacio Económico Europeo y Suiza), el formulario de
                consentimiento de Google aparece antes de pedir ningún anuncio,
                y puedes aceptar, gestionar las opciones o no dar tu
                consentimiento. Puedes cambiar tu elección cuando quieras en Más
                › Acerca de › Privacidad de los anuncios.
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
        title: "Compras (Apple, Google y RevenueCat)",
        body: (
          <p>
            Premium se compra a través de la App Store o Google Play; nunca veo
            tus datos de pago. Para saber si Premium está activo, la app usa
            RevenueCat, que recibe un identificador anónimo creado para tu
            instalación, tu historial de compras de esta app (producto, fechas,
            tienda y país), información del dispositivo y de la app y, como toda
            solicitud por internet, tu dirección IP. Consulta la{" "}
            <A href="https://www.revenuecat.com/privacy">
              política de privacidad de RevenueCat
            </A>{" "}
            (en inglés), y la de Apple o Google para el pago en sí.
          </p>
        ),
      },
      {
        title: "Informes de errores (Sentry)",
        body: (
          <p>
            Cuando la app se cierra inesperadamente o falla algo importante (por
            ejemplo, no se puede abrir el contenido de estudio o falla una
            compra), envía un informe técnico a Sentry, alojado en la Unión
            Europea. El informe contiene el error, las pantallas y pasos que lo
            provocaron, el modelo del dispositivo, el sistema operativo, la
            versión de la app y un identificador aleatorio de tu instalación;
            Sentry puede derivar una ubicación aproximada de la dirección IP de
            la solicitud. No contiene nombre, email ni tus respuestas de
            estudio. Los informes solo se usan para encontrar y corregir fallos.
            Consulta la{" "}
            <A href="https://sentry.io/privacy/">
              política de privacidad de Sentry
            </A>{" "}
            (en inglés).
          </p>
        ),
      },
      {
        title: "Estadísticas de uso (PostHog)",
        body: (
          <>
            <p>
              Para saber qué partes de la app son útiles, la app envía
              estadísticas de uso anónimas a PostHog, alojado en la Unión
              Europea: las pantallas que abres y eventos como terminar la
              introducción, completar una lección, empezar a escuchar, empezar o
              terminar un examen (con su resultado), ver un anuncio con
              recompensa, abrir la pantalla Premium y comprar o restaurar
              Premium, junto con el idioma de la app, si tienes Premium, la
              versión de la app, el tipo de dispositivo y el sistema operativo.
              Se asocian a un identificador aleatorio creado para tu
              instalación, no a ti, y se deriva una ubicación aproximada (país y
              ciudad) de la dirección IP de la solicitud. No se graban sesiones.
            </p>
            <p>
              Puedes desactivarlo cuando quieras en Más › Acerca de › Compartir
              datos de uso anónimos. Consulta la{" "}
              <A href="https://posthog.com/privacy">
                política de privacidad de PostHog
              </A>{" "}
              (en inglés).
            </p>
          </>
        ),
      },
      {
        title: "Actualizaciones de la app",
        body: (
          <p>
            La app busca y descarga pequeñas actualizaciones desde el servicio
            de actualizaciones de Expo. Estas solicitudes incluyen la versión de
            la app, la plataforma, el canal de actualización y un identificador
            aleatorio creado para tu instalación y, como toda solicitud por
            internet, tu dirección IP. Solo se usan para entregar la
            actualización correcta. Consulta la{" "}
            <A href="https://expo.dev/privacy">
              política de privacidad de Expo
            </A>{" "}
            (en inglés).
          </p>
        ),
      },
      {
        title: "Bases legales (RGPD del Reino Unido)",
        body: (
          <ul>
            <li>
              <strong>Anuncios:</strong> tu consentimiento donde se exige, dado
              en el formulario de consentimiento de Google.
            </li>
            <li>
              <strong>Compras:</strong> darte el Premium que compraste
              (ejecución de un contrato).
            </li>
            <li>
              <strong>
                Informes de errores, estadísticas de uso y actualizaciones:
              </strong>{" "}
              mi interés legítimo en mantener la app funcionando y mejorarla,
              usando solo datos anónimos; puedes desactivar las estadísticas de
              uso.
            </li>
          </ul>
        ),
      },
      {
        title: "Dónde se tratan los datos y durante cuánto tiempo",
        body: (
          <p>
            Sentry y PostHog tratan los datos en la Unión Europea. Google y
            RevenueCat pueden tratarlos en otros países, incluido Estados
            Unidos, con sus propias garantías. Sentry guarda los informes de
            errores hasta 90 días y PostHog las estadísticas de uso hasta un
            año. Los datos que guardan Google, Apple y RevenueCat siguen sus
            propias políticas.
          </p>
        ),
      },
      {
        title: "Lo que la app no hace",
        body: (
          <ul>
            <li>No pide ni ofrece cuentas o inicio de sesión.</li>
            <li>
              No pide acceso a tus contactos, fotos, cámara, micrófono ni
              ubicación precisa.
            </li>
            <li>No te rastrea en otras apps ni sitios web.</li>
            <li>No vendo tu información personal.</li>
            <li>
              El contenido de estudio viene incluido en la app; estudiar no
              necesita conexión.
            </li>
          </ul>
        ),
      },
      {
        title: "Menores",
        body: (
          <p>
            Life in the UK Prep está pensada para adultos que preparan el examen
            Life in the UK y no está dirigida a menores de 13 años. No recopilo
            a sabiendas información personal de menores.
          </p>
        ),
      },
      {
        title: "Tus derechos",
        body: (
          <p>
            Según la normativa de protección de datos del Reino Unido y de la UE
            puedes pedir acceder a tus datos personales, corregirlos o
            borrarlos, oponerte a su uso y reclamar ante una autoridad de
            control (en el Reino Unido, la{" "}
            <A href="https://ico.org.uk/make-a-complaint/">
              Information Commissioner&apos;s Office
            </A>
            ). No guardo datos que te identifiquen: tu progreso solo está en tu
            dispositivo, y los informes de errores y las estadísticas usan un
            identificador aleatorio. Puedes borrar tu progreso en la app o
            desinstalándola, desactivar las estadísticas de uso en Más y
            gestionar los anuncios como se explica arriba. Para cualquier otra
            cosa, escríbeme.
          </p>
        ),
      },
      {
        title: "Cambios a esta política",
        body: (
          <p>
            Si esta política cambia, actualizaré esta página y la fecha de
            arriba.
          </p>
        ),
      },
      {
        title: "Contacto",
        body: (
          <p>
            Fernando Rivera — <Email />
          </p>
        ),
      },
    ],
    otherLanguage: {
      label: "Read in English",
      href: "/life-in-uk/privacy",
    },
  },
};

export const LifeInUkPrivacy = ({ lang }: { lang: Lang }) => {
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
