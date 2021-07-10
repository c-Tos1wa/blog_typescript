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
        <p>Olá! <br />Neste blog vou escrever sobre
          os projetos em andamento (porque projeto está sempre 
          em andamento), aprendizados e hobbies. <br/>
          Conheça meu <a target='_blank' href="https://www.linkedin.com/in/cristina-iwassaki/">Linkedin</a>
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
