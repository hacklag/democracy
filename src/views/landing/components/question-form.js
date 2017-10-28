import {connect} from 'zefir/utils'
import {Button, Input, Grid} from '../../../components'

const QuestionForm = ({
  form: {fields}
}) => (
  <form>
    <Grid split>
      <Input lg full {...fields.content} />
      <div className="u-pl">
        <Button lg primary>Ask</Button>
      </div>
    </Grid>
  </form>
)

QuestionForm.form = {
  formName: 'Question',
  fields: {
    content: {
      placeholder: 'Ask question...'
    }
  }
}

export default connect(QuestionForm)
