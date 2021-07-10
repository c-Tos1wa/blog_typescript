import Layout from '../components/layout'
import styles from '../styles/projects.module.css'

export default function Projects(){
  return(
  <Layout>
    <h2 className={styles.title}>Projetos</h2>
    <p className={styles.text}>
      Este espaço será dedicado aos projetos que já tem repositório no Github, por isso,
      além da descrição de cada um deles, também vai estar disponível o código.
      Lista de repositórios
    </p>

  </Layout>
  )
}