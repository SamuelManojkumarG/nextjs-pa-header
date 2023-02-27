// components/header/branding/Branding.tsx
import React, { useState, useEffect } from 'react';
// next
import Link from 'next/link'
import Image from 'next/image'

// components
import Container from '../../container/Container'

// svg
import { IconAvatar, IconChevronDown, IconCog, IconSearch } from '/svg/icon'

// constants
import * as ConstantsPaths from '/constants/paths'

// styles
import styles from './Branding.module.scss'

export default function Branding() {

  const [receivedFlag, setReceivedFlag] = useState(false);
  const [counter, setCounter] = useState(0);

  function btnSendiframeMsg() {
    const message = {
      "id": Math.floor(Math.random() * 100),
      "name": "Lisa White",
      "username": "lisa",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    };
    const iframe = document.querySelector("#iframe-pa");
    const url = "https://pa3poc.patientaccess.com/";
    iframe.contentWindow.postMessage(message, url);
  }

  useEffect(() => {
    const handler = event => {
      console.log(event, event.data);
      const data = event.data;
      console.log("Message from iframe - ", data);
      setReceivedFlag(!receivedFlag);
      setCounter(Math.floor(Math.random() * 100));
    }

    window.addEventListener("message", handler)

    // clean up
    return () => window.removeEventListener("message", handler)
  }, [])

  return (
    <div className={styles.branding}>
      <Container>
        <div className={styles['branding-wrapper']}>
          <Link className={styles['branding-logo']} href={ConstantsPaths.PATH_HOME}>
            <Image src="/logo.svg" alt="" width={130} height={40} priority={true} />
          </Link>
          <ul className={styles['branding-list']}>
            <li className={styles['branding-item']}>
              <button onClick={() => { btnSendiframeMsg() }}>Send message to iframe</button>
            </li>
            {receivedFlag && 
              <li className={styles['branding-item']}>
                <span>Counter: {counter}</span>
              </li>    
            }
            <li className={styles['branding-item']}>
                <i><IconSearch /></i>
              </li>  
            <li className={styles['branding-item']}>
              <i><IconCog /></i>
            </li>
            <li className={styles['branding-item']}>
              <i><IconAvatar /></i>
              <span>Sign in/Register</span>
              <i><IconChevronDown /></i>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}
