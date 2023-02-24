// components/header/branding/Branding.tsx

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

  function btnSendiframeMsg() {
    const message = {
      "id": "123456789",
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
    const url = "https://poc.patientaccess.com/";
    iframe.contentWindow.postMessage(message, url);
  }

  return (
    <div className={styles.branding}>
      <Container>
        <div className={styles['branding-wrapper']}>
          <Link className={styles['branding-logo']} href={ConstantsPaths.PATH_HOME}>
            <Image src="/logo.svg" alt="" width={130} height={40} priority={true} />
          </Link>
          <ul className={styles['branding-list']}>
            <li className={styles['branding-item']}>
              <button onClick={() => {btnSendiframeMsg()}}>Send message to iframe</button>
            </li>
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
