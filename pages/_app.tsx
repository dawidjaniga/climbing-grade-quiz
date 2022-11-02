import { CssBaseline, GeistProvider, Themes } from '@geist-ui/core'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const myTheme1 = Themes.createFromDark({
  type: 'coolTheme',
  palette: {
    success: '#4FBF26',
  },
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GeistProvider themes={[myTheme1]} themeType='coolTheme'>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  )
}



