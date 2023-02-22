import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
// layouts
import Layout from '/layouts/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
  )
}
