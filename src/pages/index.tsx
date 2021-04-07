import { GetStaticProps, InferGetStaticPropsType } from 'next'
import React, { useEffect, useState, ReactElement } from 'react'
import SEO from '@/components/SEO'
import { Container } from '@/styles/pages/Home'

// interface HomeStaticProps {}

// type HomeProps = InferGetStaticPropsType<GetStaticProps<HomeStaticProps>>

export default function Home(): ReactElement {
  return (
    <Container>
      <SEO title="Home" description={'Olá eu sou a description'} />
      <h1>Olá</h1>
    </Container>
  )
}

// export const getStaticProps: GetStaticProps<HomeStaticProps> = async () => {
//   return {
//     revalidate: 86400,
//     props: {}
//   }
// }
