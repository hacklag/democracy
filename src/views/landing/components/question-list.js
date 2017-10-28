import {connect} from 'zefir/utils'
import {Button, Input, Grid} from '../../../components'

const QuestionList = ({
  actions
}) => (
  <ul className="QuestionList">
    {[{
      id: 1,
      content: 'Should we go out tonight?',
      author: {
        username: 'johndoe',
        name: 'John Doe'
      },
      points: 90
    },{
      id: 2,
      content: 'Should we build todo app?',
      author: {
        username: 'johndoe',
        name: 'John Doe'
      },
      points: 140
    }].map(q =>
      <li className="Question" key={q.id}>
        <div className="Question__actions">
          <span className="Question__upvote" onClick={actions.upvote} data-id={q.id}>Upvote</span>
          <div className="Question__points">{q.points}</div>
        </div>
        <h3>{q.content}</h3>
        <div className="Question__meta">
          <Grid>
              <div className="Question__author">{q.author.name}</div>
              <div className="Question__date u-ml---">asked 3h ago</div>
          </Grid>
        </div>
      </li>
    )}

    <style jsx>{`
      .QuestionList {
        list-style-type: none;
        padding-left: 64px;
      }

      .Question {
        border: 1px solid #e5e5e5;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .07);
      }

      .Question__actions {
        position: absolute;
        right: 100%;
        font-size: 18px;
        top: 50%;
        text-align: center;
        width: 64px;
        margin-top: -10px;
        transform: translateY(-50%);
      }

      .Question__upvote {
        width: 0;
        height: 0;
        font-size: 0;
        border-style: solid;
        border-width: 0 8px 10px 8px;
        border-color: transparent transparent #007bff transparent;
        display: inline-block;
        margin-bottom: 4px;
      }

      .Question + .Question {
        border-top: 1px solid #e5e5e5;
        margin-top: 8px;
      }
    `}</style>
  </ul>
)

QuestionList.form = {
  formName: 'Question',
  fields: {
    content: {
      placeholder: 'Ask question...'
    }
  }
}

QuestionList.actions = {
  upvote: ({services}, e) => {
    const {id} = e.target.dataset

    services
      .request('question:upvote')
      .post('democracy/upvote-question', {
        question: id
      })
  }
}

export default connect(QuestionList)
