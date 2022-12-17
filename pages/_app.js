import Head from 'next/head'

import '../styles/globals.css'
import Layout from '../components/layout/index'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <Head>
        <title>Meetups React app</title>
        <link rel='icon' href='/images/icons8-prize-48.png' type='image/x-icon' />
        <meta 
          name='React-Next-Mongo template'
          content='Full-stack app which can serve as a template for creating applications for the web'
        />
      </Head>
      
    </>

  )
}

export default MyApp
