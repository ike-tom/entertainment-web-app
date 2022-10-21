import type { NextPage } from 'next'
import Head from 'next/head'
import LoginRegisterForm from '../components/ui/LoginRegisterForm/LoginRegisterForm'

const RegisterPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Mooovie Sie</title>
        <meta
          name="description"
          content="Register to our wonderful movie app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginRegisterForm formType="Sign Up" />
    </div>
  )
}

export default RegisterPage
