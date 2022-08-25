import Link from 'next/link'
import styles from '../styles/navbar.module.css'

import { SiLinkedin, SiGithub } from 'react-icons/si'

export default function NavBar(){
  return(
      <nav className={styles.navbar}>
        Contatos: 
        <Link href='https://www.linkedin.com/in/cristina-iwassaki/'>
          <a target='_blank' className={styles.anchor}>
            <SiLinkedin />
          </a>
        </Link>
        e
        <Link href='https://github.com/c-Tos1wa'>
          <a target='_blank' className={styles.anchor}>
            <SiGithub />
          </a>
        </Link>
    </nav>
  )
}




