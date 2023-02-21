import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from './navbar'
import styles from '../styles/layout.module.css'
import { BsArrowLeft } from 'react-icons/bs'

const name = 'Cristina Toshie Iwassaki'
export const siteTitle = 'Portfólio de Projetos'

export default function Layout(
    {children, home}: {children: React.ReactNode, home?: boolean}
  ){
  return(
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="Cristina Toshie Iwassaki"
          content="Página pessoal com informações, projetos, etc"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header>
        {
          home ?  
        (
          <div className={styles.header}>
            <Image className={styles.profile}
              priority
              src='/images/cris.jpg'
              height={200}
              width={200}
              alt={name} />
            <div className={styles.about}>
              <h1 className={styles.name}>{name}</h1>
              <Navbar />
            </div>
          </div>
        ):(
          <></>
        )}
      </header>

      <main>{children}</main>

      {
        !home && (
          <div className={styles.footer}>
            <Link href='/'>
              <a className={styles.goBack}>
                <BsArrowLeft /> Voltar ao início
              </a>
            </Link>
          </div>
        )
      }
    </div>
  )
}