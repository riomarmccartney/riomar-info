/* eslint-disable no-unused-vars */

import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import * as gtag from 'utils/gtag'

type NextPageWithLayout = NextPage & {
  withLayout?: (page: ReactElement, notes: any) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  const withLayout = Component.withLayout ?? ((page) => page) 
  const { notes } = pageProps

  return withLayout(<Component {...pageProps} />, notes)
}