import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from '@next/font/local'

const myFont = localFont({ src: './fonts/MonumentExtended-Regular.woff2' })
const myFont2 = localFont({ src: './fonts/Satoshi-Bold.woff2' })
const myFont3 = localFont({ src: './fonts/Satoshi-Regular.woff2' })
const myFont4 = localFont({ src: './fonts/Satoshi-Medium.woff2' })

const combinedFontClassNames = `${myFont.className} ${myFont2.className} ${myFont3.className} ${myFont4.className}`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={combinedFontClassNames}>
  <Component {...pageProps} />
  </div>
  )
}
