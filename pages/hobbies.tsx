import Layout from '../components/layout'
import styles from '../styles/hobbies.module.css'

export default function Hobbies(){
  return(
    <Layout>
      <h2 className={styles.nome}>Hobbies</h2>
      <p className={styles.paragraph}>Esta seção será reservada a livros, filmes e séries, não exatamente nesta ordem.</p>
    </Layout>
  )
}