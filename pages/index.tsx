import Layout, { siteTitle } from '../components/layout'
import Data from '../components/date'
import Head from 'next/head'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { getPostsByDate } from '../lib/posts'
import styles from '../styles/home.module.css'

export default function Home({ posts }: {
  posts: {
    date: string;
    title: string;
    id: string;
  }[]
}) 

{
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.text}>
        <div>
          <p>
            Formou-se em Física Médica pela Universidade Estadual Paulista "Júlio de Mesquita Filho" (Unesp)
            campus de Botucatu, onde conheceu algoritmo e lógica de programação.
            Após a faculdade, estudou para concursos públicos, sem muito sucesso, mas, por curiosidade, se manteve
            atualizada nas novas tecnologias.
          </p>
          <p>
            Achou interessante como os dados poderiam ser utilizados para criar padrões, detectar anomalias e predizer resultados
            por isso, se interessou em ciência de dados.
          </p>
        </div>
        <div>
          <p>
            Durante a pandemia, estudou desenvolvimento web e conhece, no back-end, Express, Nest.Js e as ORM Prisma e Sequelize, além de MySQL e Postgres como 
            banco de dados. No front-end, React.Js, Next.Js e básico de Angular.Js, além de Bootstrap, Material-UI, Chakra-UI e styled-components.
          </p>
          <p>
            Atualmente, estuda Python direcionado à análise e ciência de dados.
          </p>
        </div>
      </section>
      <section className={styles.projects}>
        <h2 className={styles.blog}>Portfólio</h2>
        <ul>
          {
            posts.map( ({id, date, title}) => (
              <li className={styles.post} key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Data dataString={date} />
                </small>
              </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const posts = getPostsByDate();
  return{
    props: {
      posts
    }
  }
  
}
