import {connect} from 'zefir/utils'
import {Input, Link, Button, InputList} from '../../../components'

const RegisterForm = ({stores: {ui}, form, actions}) => (
  <form onSubmit={actions.register}>
    <InputList errors={ui.messages.get('auth.register')}>
      <Input
        {...form.fields.username}
        full
        disabled={ui.pending.has('auth.register')}
      />
      <Input
        {...form.fields.password}
        full
        disabled={ui.pending.has('auth.register')}
      />
      <Button primary full disabled={ui.pending.has('auth.register')}>
        Sign up
      </Button>
    </InputList>

    <div className='u-mt- u-ta-l'>
      Already have account? <Link to='/auth/login'>Sign in</Link>.
    </div>
  </form>
)

RegisterForm.actions = {
  register: ({form, services: {auth}}, e) =>
    form.submit(e).then(auth.register).then(() => {
      form.setValue('username', '')
      form.setValue('password', '')
    })
}

RegisterForm.form = {
  formName: 'RegisterForm',
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

export default connect(RegisterForm)
