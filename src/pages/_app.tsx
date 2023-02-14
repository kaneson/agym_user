import '../styles/globals.css'
import '../styles/global.css'

import 'react-loading-skeleton/dist/skeleton.css'

import type { AppProps } from 'next/app'

import { HelmetProvider } from 'react-helmet-async'
import { Provider } from 'react-redux'

import { AuthGoogleProvider } from '../context/authGoogle'

import store from '../utils/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HelmetProvider>
      <Provider store={store}>
        <AuthGoogleProvider>
          <div className='flex-1 w-[100%] overscroll-x-hidden dark:bg-[#121212] bg-[#F8F9FC] h-[100vh]'>
            <Component {...pageProps} />
          </div>
        </AuthGoogleProvider>
      </Provider>
    </HelmetProvider>
  )
}

export default MyApp
