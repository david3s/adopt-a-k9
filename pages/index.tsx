import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <article>
        <h1>Welcome</h1>
      </article>
    </Layout>
  )
}

export default Home
