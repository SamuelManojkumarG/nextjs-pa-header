// components/header/Header.tsx

// styles
import styles from './Header.module.scss'

// components
import Navigation from './navigation/Navigation'
import Branding from './branding/Branding'

export default function Header() {
  return (
    <header className={styles.header}>
      <Branding />
      <Navigation />
    </header>
  );
}
