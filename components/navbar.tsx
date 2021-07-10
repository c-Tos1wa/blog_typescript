import Link from 'next/link'
import styles from '../styles/navbar.module.css'

export default function NavBar(){
  return(
      <nav className={styles.navbar}>
        <Link href='/projects'>
          <a className={styles.anchor}>Projetos</a>
        </Link>
        <Link href='/hobbies'>
          <a className={styles.anchor}>Hobbies</a>
        </Link>
    </nav>
  )
}




