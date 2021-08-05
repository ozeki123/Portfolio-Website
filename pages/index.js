import Head from 'next/head'
import styles from '../styles/index.module.scss'
import Layout from '../components/Layout/Layout'
import Stride from '../components/projects/stride/stride'
import Navbar from '../components/Navbar/navbar'
import Main from '../components/Main/main'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Andrew Ozeki Portfolio</title>
      </Head>
      <Main/>
    </div>
  )
}
