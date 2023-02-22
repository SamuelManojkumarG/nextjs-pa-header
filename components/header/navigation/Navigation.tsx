// components/header/navigation/Navigation.tsx

// next
import Link from 'next/link'
import { useRouter } from 'next/router'

// components
import Container from '../../container/Container'

// constants
import * as ConstantsPaths from '/constants/paths'

// styles
import styles from './Navigation.module.scss'

function NavigationLink({ className, path, name }) {
  const router = useRouter();

  return (
    <Link href={path} className={`${className} ${(router.pathname == path || router.asPath === path) ? styles.active : ''}`}>
      <span>{name}</span>
      <i />
    </Link>
  );
}

export default function Navigation() {
  return (
    <div className={styles.navigation}>
      <Container>
        <ul className={styles['navigation-list']}>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-one']} path={ConstantsPaths.PATH_HOME} name="Home" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-two']} path={ConstantsPaths.PATH_NHS_GP_SERVICES} name="NHS GP services" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-three']} path={ConstantsPaths.PATH_HEALTH_ADVICE} name="Health advice" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-four']} path={ConstantsPaths.PATH_PRODUCTS_AND_SERVICES} name="Products & services" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-five']} path={ConstantsPaths.PATH_CLINICAL_RESEARCH} name="Clinical research" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-six']} path={ConstantsPaths.PATH_COMMUNITY_FORUMS} name="Community forums" />
          </li>
          <li className={styles['navigation-item']}>
            <NavigationLink className={styles['navigation-seven']} path={ConstantsPaths.PATH_CONTENTFUL_HOME} name="Contentful" />
          </li>
        </ul>
      </Container>
    </div>
  );
}
