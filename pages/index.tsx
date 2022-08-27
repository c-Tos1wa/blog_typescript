import Layout, { siteTitle } from '../components/layout'
import Data from '../components/date'
import NavBar from '../components/navbar'
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
      <NavBar />
      <section className={styles.text}>
        <p>
          Formou-se em Física Médica pela Universidade Estadual Paulista "Julio de Mesquita Filho" (Unesp)
          campus de Botucatu, onde entrou em contato com algoritmo, lógica de programação.
        </p>
        <p>
          Após a faculdade, estudou para concursos públicos, sem muito sucesso, mas, por curiosidade, se manteve
          atualizada nas novas tecnologias.
          Achou interessante como os dados poderiam ser utilizados para criar padrões, detectar anomalias e predizer resultados
          por isso, se interessou em ciência de dados.
        </p>
        <p>
          Durante a pandemia, começou estudando Python, mas foi redirecionada ao desenvolvimento web, mais precisamente
          ao Fullstack em Node.
        </p>
        <p>
          Conhece, no back-end, Express, Nest.Js e as ORM Prisma e Sequelize, além de MySQL e Postgres como 
          banco de dados. No front-end, Next.Js e básico de Angular.Js, além de frameworks, como Bootstrap, Material-UI e Chakra-UI.
        </p>
        <p>
          Para se manter atualizada, continua estudando as bibliotecas e frameworks do Javascript e em paralelo,
          tenta criar portfólio relacionado a dados, estatística e ciência de dados.
        </p>
        <p>
          Este blog será direcionado aos projetos de estudo publicados no Github.
        </p>
      </section>
      <section>
        <h2 className={styles.blog}>Blog</h2>
        <ul>
          {
            posts.map( ({id, date, title}) => (
              <li className={styles.name} key={id}>
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
