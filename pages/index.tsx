import Layout, { tituloSite } from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import Data from '../components/date'
import { GetStaticProps } from 'next'
import { getPostsByDate } from '../lib/posts'

export default function Home({ dadosDosPosts }: {
  dadosDosPosts: {
    date: string;
    title: string;
    id: string;
  }[]
}) 

{
  return (
    <Layout home>
      <Head>
        <title>{tituloSite}</title>
      </Head>
      <section>
        <p>Olá, como você está? <br />Neste blog vou escrever sobre
          os projetos em andamento - porque projeto é algo que está sempre
          em andamento - gostos, ideias e como me encontrar nesse mundão 
          chamado internet.
        </p>
      </section>
      <section>
        <h2>Blog</h2>
        <ul>
          {
            dadosDosPosts.map( ({id, date, title}) => (
              <li key={id}>
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
  const dadosDosPosts = getPostsByDate();
  return{
    props: {
      dadosDosPosts
    }
  }
  
}
