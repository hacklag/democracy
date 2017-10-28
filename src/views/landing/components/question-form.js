import {connect} from 'zefir/utils'
import {Button, Input, Grid} from '../../../components'

const QuestionForm = ({fields, send}) => (
  <form onSubmit={send}>
    <Grid split>
      <Input lg full {...fields.content} />
      <div className="u-pl---">
        <Button lg primary>Ask</Button>
      </div>
    </Grid>
  </form>
)

QuestionForm.form = {
  formName: 'Question',
  fields: {
    content: {
      placeholder: 'Your question...'
    }
  }
}

QuestionForm.init = ({services, stores, form: {submit, fields}}) => ({
  send: e => {
    stores.app.isLoggedIn ?
      submit(e, services.app.question.add)
        .then(() => fields.content.value = '') :
      submit(e, services.app.auth.login)
  },
  fields,
})

export default connect(QuestionForm)
