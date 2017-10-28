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

QuestionForm.init = ({services, form: {submit, fields}}) => ({
  send: e => submit(e, services.app.question.add),
  fields,
})

export default connect(QuestionForm)
