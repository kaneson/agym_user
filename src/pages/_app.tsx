import '../styles/globals.css'
import 'react-loading-skeleton/dist/skeleton.css'
import type { AppProps } from 'next/app'

import { HelmetProvider } from 'react-helmet-async'
import TransitionScreen from './TransitionScreen'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Component {...pageProps} />
    </HelmetProvider>
  )
}

export default MyApp
