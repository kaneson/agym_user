import '../styles/globals.css'
import '../styles/global.css'
import 'react-loading-skeleton/dist/skeleton.css'
import type { AppProps } from 'next/app'

import { HelmetProvider } from 'react-helmet-async'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <div className='flex-1 dark:bg-[#121212] bg-gray-100 h-[100vh]'>
        <Component {...pageProps} />
      </div>
    </HelmetProvider>
  )
}

export default MyApp
