import Link from 'next/link'
import Image from 'next/image'

import styles from './LoginRegisterForm.module.scss'
import { FormEvent, useState } from 'react'

const LoginRegisterForm = (props: { formType: string }) => {
  const { formType } = props

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState('');

  // const onSubmit = async (e: FormEvent) => {
  //     e.preventDefault();
  //     setIsSubmitting(true);
  //     setError('');

  //     try {
  //     await login(email, password);
  //     // redirect to the home page
  //     } catch (error) {
  //     setError(error.message);
  //     } finally {
  //     setIsSubmitting(false);
  //     }
  // };

  return (
    <main className={styles.main}>
      <div className={styles.logoWrapper}>
        <Image
          className={styles.logo}
          src="/logo.svg"
          alt="Logo"
          width={32}
          height={26}
        />
      </div>
      <form className={styles.loginWrapper}>
        <h1 className={styles.header}>{formType}</h1>

        <input
          className={styles.emailInput}
          type="email"
          required
          placeholder="Email address"
        />
        <input
          className={styles.passwordInput}
          type="password"
          required
          placeholder="Password"
        />
        {formType === 'Sign Up' ? (
          <input
            className={styles.passwordInput}
            type="password"
            required
            placeholder="Repeat password"
          />
        ) : null}
        <button className={styles.loginButton}>
          {formType === 'Sign Up'
            ? 'Create an account'
            : 'Login to your account'}
        </button>

        <div className={styles.createAccountLinkWrapper}>
          <p className={styles.createAccountLinkDescription}>
            {formType === 'Sign Up'
              ? 'Already have an account?'
              : 'Don’t have an account?'}
          </p>
          {formType === 'Sign Up' ? (
            <Link href="/login">
              <a className={styles.createAccountLink}>Login</a>
            </Link>
          ) : (
            <Link href="/register">
              <a className={styles.createAccountLink}>Sign Up</a>
            </Link>
          )}
        </div>
      </form>
    </main>
  )
}

export default LoginRegisterForm
