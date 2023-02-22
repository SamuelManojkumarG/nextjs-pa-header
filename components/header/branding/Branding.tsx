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
  return (
    <div className={styles.branding}>
      <Container>
        <div className={styles['branding-wrapper']}>
          <Link className={styles['branding-logo']} href={ConstantsPaths.PATH_HOME}>
            <Image src="/logo.svg" alt="" width={130} height={40} priority={true} />
          </Link>
          <ul className={styles['branding-list']}>
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
