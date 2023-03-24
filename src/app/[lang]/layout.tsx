/* eslint-disable @next/next/no-page-custom-font */

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import {
  getDictionaryHead,
  getDictionaryHeader
} from '@/util/functions/i18n/get-dictionary'
import { i18n, Locale } from '@/util/functions/i18n/i18n-config'
import { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'

type LocaleParams = {
  params: { lang: Locale }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

export async function generateMetadata({
  params
}: LocaleParams): Promise<Metadata> {
  const dictionary = await getDictionaryHead(params.lang)

  {
    /*
  Esses daqui são metadados padrões quando usamos esse tipo de abordagem

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1"> /
*/
  }

  return {
    title: {
      default: dictionary.title,
      template: `%s | ${dictionary.title}` // Todos os títulos serão: "alguma | Felipe Sc..."
    },
    description: 'Portifolio do Felipe Scherer',
    generator: 'Next.js',
    applicationName: 'Portifolio Felipe Scherer',
    referrer: 'origin-when-cross-origin',
    keywords: ['Next.js', 'React', 'JavaScript'],
    authors: [
      { name: 'Felipe Scherer', url: 'https://github.com/ofelipescherer.com' }
    ],
    colorScheme: 'dark',
    creator: 'Felipe Scherer',
    publisher: 'Felipe Scherer',

    //When running in a browser on a mobile phone, <meta name="format-detection"/> determines whether or not telephone numbers in the HTML content will appear as hypertext links. The user can click a link with a telephone number to initiate a phone call to that phone number.
    formatDetection: {
      email: false,
      address: false,
      telephone: false
    },

    // Gera uma preview dos sites quando o link é compartilhado
    openGraph: {
      title: 'Portifolio do Felipe Scherer',
      description: 'Portifolio do Felipe Scherer',
      url: 'https://felipescherer.com',
      siteName: 'Felipe Scherer',
      images: [
        {
          url: 'https://felipescherer.com/example.png',
          width: 800,
          height: 600
        },
        {
          url: 'https://felipescherer.com/example.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt'
        }
      ],
      locale: 'pt-BR',
      type: 'website'
    },

    alternates: {
      canonical: 'https://felipescherer.com',
      languages: {
        'pt-BR': 'https://felipescherer.com/pt',
        'en-US': 'https://felipescherer.com/en'
      }
    },

    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: false,
        noimageindex: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },

    //  /favicon.ico
    icons: {
      icon: [{ url: '/icon.png' }, new URL('/icon.png', 'https://example.com')],
      shortcut: ['/shortcut-icon.png'],
      apple: [
        { url: '/apple-icon.png' },
        { url: '/apple-icon-x3.png', sizes: '180x180', type: 'image/png' }
      ],
      other: [
        {
          rel: 'apple-touch-icon-precomposed',
          url: '/apple-touch-icon-precomposed.png'
        }
      ]
    },

    // themeColor: [
    //   { media: '(prefers-color-scheme: light)', color: '#85586f' },
    //   { media: '(prefers-color-scheme: dark)', color: '#613f58' }
    // ],

    twitter: {
      card: 'app',
      title: 'Next.js',
      description: 'The React Framework for the Web',
      siteId: '1467726470533754880',
      creator: '@nextjs',
      creatorId: '1467726470533754880',
      images: {
        url: 'https://nextjs.org/og.png',
        alt: 'Next.js Logo'
      },
      app: {
        name: 'twitter_app',
        id: {
          iphone: 'twitter_app://iphone',
          ipad: 'twitter_app://ipad',
          googleplay: 'twitter_app://googleplay'
        },
        url: {
          iphone: 'https://iphone_url',
          ipad: 'https://ipad_url'
        }
      }
    },

    // Default Values
    viewport: {
      width: 'device-width',
      initialScale: 1,
      maximumScale: 1
    },

    // PROCURAR MAIS SOBRE
    verification: {
      google: 'google',
      yandex: 'yandex',
      yahoo: 'yahoo',
      other: {
        me: ['my-email', 'my-link']
      }
    },

    // PROCURAR MAIS SOBRE
    itunes: {
      appId: 'myAppStoreID',
      appArgument: 'myAppArgument'
    },
    appleWebApp: {
      title: 'Apple Web App',
      statusBarStyle: 'black-translucent',
      startupImage: [
        '/assets/startup/apple-touch-startup-image-768x1004.png',
        {
          url: '/assets/startup/apple-touch-startup-image-1536x2008.png',
          media: '(device-width: 768px) and (device-height: 1024px)'
        }
      ]
    },

    // PROCURAR MAIS SOBRE
    appLinks: {
      ios: {
        url: 'https://nextjs.org/ios',
        app_store_id: 'app_store_id'
      },
      android: {
        package: 'com.example.android/package',
        app_name: 'app_name_android'
      },
      web: {
        url: 'https://nextjs.org/web',
        should_fallback: true
      }
    },

    // PROCURAR MAIS SOBRE
    archives: ['https://nextjs.org/13'],
    assets: ['https://nextjs.org/assets'],
    bookmarks: ['https://nextjs.org/13'],
    category: 'technology'
  }
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionaryHeader(params.lang)

  return (
    <html lang={params.lang}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          rel="preconnect"
          href="https://user-images.githubusercontent.com"
        />
        <link
          rel="dns-prefetch"
          href="https://user-images.githubusercontent.com"
        />

        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="cyan"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </head>

      <body className="font-sans text-primary min-h-screen bg-background selection:bg-[#DA858C]">
        <Header translate={dictionary}></Header>
        <main className="min-h-[calc(100vh-170px)]">{children}</main>
        <Footer></Footer>
      </body>
      <Script id="theme-script-load">
        {`
        if (window.matchMedia &&
        window.matchMedia('(prefers-color-scheme:dark)').matches)
        {
          document.documentElement.setAttribute("data-theme", "dark")
        }
        else {
          document.documentElement.setAttribute("data-theme", "light")
        }
  `}
      </Script>
    </html>
  )
}
