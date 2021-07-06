import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const meuNome = 'Cristina T Iwassaki'
export const tituloSite = 'Cristina Iwassaki: Estudante de Front-End'

export default function Layout(
    {children, home}: {children: React.ReactNode, home?: boolean}
  ){
  return(
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Cristina Iwassaki"
          content="Página pessoal com informações, projetos, etc"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            tituloSite
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={tituloSite} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {home ?  
        (
          <>
            <Image
              priority
              src='/images/cris.jpg'
              height={144}
              width={144}
              alt={meuNome} />
            <h1>{meuNome}</h1>
          </>
        ):(
          <></>
        )}
      </header>

      <main>{children}</main>

      {
        !home && (
          <div>
            <Link href='/'>
              <a>← Voltar ao início</a>
            </Link>
          </div>
        )
      }
    </div>
  )
}