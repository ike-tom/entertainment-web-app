import type { NextPage } from 'next'
import Head from 'next/head'
import LoginRegisterForm from '../components/ui/LoginRegisterForm/LoginRegisterForm'

const LoginPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mooovie Sie</title>
        <meta name="description" content="Login to our wonderful movie app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginRegisterForm formType="Login" />
    </div>
  )
}

export default LoginPage
