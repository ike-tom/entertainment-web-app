import Link from 'next/link'
import Image from 'next/image'
import styles from './LoginRegisterForm.module.scss'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

interface IFormInput {
  email: String
  password: String
  repeatPassword: String
}

const LoginRegisterForm = (props: { formType: string }) => {
  const { formType } = props

  const schema = yup.object({
    email: yup.string().required(),
    password: yup
      .string()
      .required('Password is required')
      .min(4, 'Password length should be at least 4 characters')
      .max(12, 'Password cannot exceed more than 12 characters'),
    repeatPassword:
      formType === 'Sign Up'
        ? yup
            .string()
            .required('Confirm Password is required')
            .min(4, 'Password length should be at least 4 characters')
            .max(12, 'Password cannot exceed more than 12 characters')
            .oneOf([yup.ref('password')], 'Passwords do not match')
        : yup.string(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  })

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data))
  }

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
      <form className={styles.loginWrapper} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={styles.header}>{formType}</h1>

        <input
          {...register('email')}
          className={styles.emailInput}
          type="email"
          required
          placeholder="Email address"
        />
        <p>{errors.email?.message}</p>
        <input
          className={styles.passwordInput}
          type="password"
          required
          placeholder="Password"
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        {formType === 'Sign Up' ? (
          <>
            <input
              className={styles.passwordInput}
              type="password"
              required
              placeholder="Repeat password"
              {...register('repeatPassword')}
            />
            <p>{errors.repeatPassword?.message}</p>
          </>
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
