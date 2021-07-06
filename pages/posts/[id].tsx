import Head from 'next/head'
import { GetStaticProps, GetStaticPaths } from 'next'
import Layout from '../../components/layout'
import Data from '../../components/date'
import { getIds, getPostsText } from '../../lib/posts'

export default function Post( {
  postIdentifier
  }:{ postIdentifier:{
        title: string
        date: string
        textHtml: string
      }
    })
{
  return(
    <Layout>
      <Head>
        <title>{postIdentifier.title}</title>
      </Head>
      <article>
        <h1>{postIdentifier.title}</h1>
        <div>
          <Data dataString = {postIdentifier.date} />
        </div>
        <div dangerouslySetInnerHTML={{__html: postIdentifier.textHtml}} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const caminhos = getIds();

  return{
    paths: caminhos,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
  const postIdentifier = await getPostsText(params.id as string)

  return{
    props:{
      postIdentifier
    }
  }
}