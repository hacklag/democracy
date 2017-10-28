import {Match, Head, PageHead, Page, Centered} from '../../components'

import LoginForm from './components/login-form'
import RegisterForm from './components/register-form'

const AuthView = () => (
  <Page>
    <Head>
      <title>hackyeah</title>
    </Head>

    <PageHead />

    <Centered>
      <Match path={'/auth/login'}>
        <div className='Form'>
          <h1 className='u-mb'>Welcome back</h1>
          <LoginForm />
        </div>
      </Match>
      <Match path={'/auth/register'}>
        <div className='Form'>
          <h1 className='u-mb'>Create account</h1>
          <RegisterForm />
        </div>
      </Match>
    </Centered>

    <style jsx>{`
      .Form {
        max-width: 400px;
        margin-left: auto;
        margin-right: auto;
      }

      .Form h1 {
        font-weight: 600;
      }
    `}</style>
  </Page>
)

export default AuthView
