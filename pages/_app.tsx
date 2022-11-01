import { CssBaseline, GeistProvider } from '@geist-ui/core'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themeType='dark'>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}



