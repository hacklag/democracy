import {connect} from 'zefir/utils'
import {Input, Link, Button, InputList} from '../../../components'

const Login = ({stores: {ui}, form, actions}) => (
  <form className='Form' onSubmit={actions.login}>
    <InputList errors={ui.messages.get('auth.login')}>
      <Input
        {...form.fields.username}
        full
        disabled={ui.pending.has('auth.login')}
      />
      <Input
        {...form.fields.password}
        full
        disabled={ui.pending.has('auth.login')}
      />
      <Button primary full disabled={ui.pending.has('auth.login')}>
        Sign in
      </Button>
    </InputList>

    <div className='u-mt- u-ta-l'>
      Don't have account? <Link to='/auth/register'>Sign up</Link>.
    </div>
  </form>
)

Login.actions = {
  login: ({form, services: {auth}}, e) =>
    form.submit(e).then(auth.login).then(() => {
      form.setValue('username', '')
      form.setValue('password', '')
    })
}

Login.form = {
  formName: 'LoginForm',
  fields: {
    username: {
      autoFocus: true,
      name: 'username',
      placeholder: 'Your email...'
    },
    password: {
      type: 'password',
      name: 'password',
      placeholder: 'Your password...'
    }
  }
}

export default connect(Login)
