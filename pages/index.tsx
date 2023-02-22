import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Iframe from 'react-iframe'
import React from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const btnSendiframeMsg = () => {
    
  }

  React.useEffect(() => {
    const handler = event => {
      const data = JSON.parse(event.data)
      console.log("Hello World?", data)
    }

    window.addEventListener("message", handler)

    // clean up
    return () => window.removeEventListener("message", handler)
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>

        <div>
          <button onClick={btnSendiframeMsg()}>Send message to iframe</button>
        </div>
        
        <div  className={styles.iframeContainer_inactive}>
          <iframe className={styles.iframe} src='http://localhost:3001/'></iframe>
        </div>

        <div  className={styles.iframeContainer}>
          <iframe id='iframe-pa' className={styles.iframe} src='https://pa3poc.patientaccess.com/dashboard'></iframe>
        </div>

        <div  className={styles.iframeContainer_inactive}>
          <Iframe url="https://pa3poc.patientaccess.com/nhs-gp-services"
              width="640px"
              height="320px"
              id="Iframe-pa-web"
              className=""
              display="block"
              position="relative"/>
        </div>
      </main>
    </>
  )
}