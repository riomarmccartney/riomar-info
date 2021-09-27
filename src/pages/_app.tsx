/* eslint-disable no-unused-vars */

import '../styles/globals.css'
import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'

type NextPageWithLayout = NextPage & {
  withLayout?: (page: ReactElement, notes: any) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const withLayout = Component.withLayout ?? ((page) => page) 
  const { notes } = pageProps

  return withLayout(<Component {...pageProps} />, notes)
}