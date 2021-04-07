import dynamic from 'next/dynamic'
import { AppProps } from 'next/app'
import { useEffect } from 'react'

import { PageTransition } from '@/components/PageTransition'

import Layout from '@/components/Layout'
import Context from '@/context'

export default function App({
  Component: SsrComponent,
  pageProps: ssrPageProps
}: AppProps) {
  useEffect(() => {
    import('@/utils/NewHTMLElementFeatures')
    console.log(
      '%cSolrachix',
      'color: blue; font-size: 120px; font-weight: 900;'
    )
  }, [])

  return (
    <Context>
      <PageTransition>
        {({ Component, pageProps }) => {
          return Component ? (
            <Component {...pageProps} />
          ) : (
            <SsrComponent {...ssrPageProps} />
          )
        }}
      </PageTransition>
    </Context>
  )
}
