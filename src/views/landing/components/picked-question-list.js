import {connect} from 'zefir/utils';
import {Button, Input, Grid,   ProgressBar} from '../../../components';
import Moment from 'react-moment'

const PickedQuestionList = ({stores: {app}}) => (
  <div>
    {app.activeQuestion && (
      <div className="CurrentQuestion">
        <h1 className="CurrentQuestion__content">
          {app.activeQuestion.content}
        </h1>
        <div className="Question__meta">
          <span>{app.activeQuestion.author.full_name}</span> asked <span><Moment fromNow date={app.activeQuestion.created_at} /></span>
        </div>
        <div className="CurrentQuestion__answers u-mt---">
          {app.activeQuestion.votes.map(v => (
            <div className="CurrentQuestion__answer">
              <div className="CurrentQuestion__answer-head">
                <span className="CurrentQuestion__key">{v.key}</span>
                <span className="CurrentQuestion__value">
                  {Math.round(100 * v.count / app.activeQuestion.total_votes)}% ({v.count})
                </span>
              </div>
              <ProgressBar total={app.activeQuestion.total_votes} value={v.count} />
            </div>
          ))}
        </div>
      </div>
    )}

    <h2 className="u-mt">Past questions</h2>

    <ul className="QuestionList u-mt---">
      {app.pickedQuestions.slice(1).map(q => (
        <li className="Question" key={q.id}>
          <h3>{q.content}</h3>
          <div className="Question__meta">
            <span>{q.author.full_name}</span> asked <span><Moment fromNow date={q.created_at} /></span>
          </div>
        </li>
      ))}
    </ul>

    <style jsx>{`
      .QuestionList {
        list-style-type: none;
      }

      .Question {
        border: 1px solid #e5e5e5;
        background-color: #fff;
        border-radius: 4px;
        padding: 16px;
        position: relative;
        box-shadow: 0 2px 4px hsla(225,2%,43%, .18);
      }

      .Question__content {
        font-size: 12px;
        margin-top: 3px;
        color: #aaa;
        font-weight: bold;
      }

      .Question__meta {
        font-size: 12px;
        margin-top: 3px;
        color: #aaa;
      }

      .Question__meta span {
        color: #6b6c6f;
      }

      .Question + .Question {
        border-top: 1px solid #e5e5e5;
        margin-top: 8px;
      }

      .CurrentQuestion {
        justify-content: space-between;
        border: 1px solid #e5e5e5;
        padding: 32px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 4px hsla(225,2%,43%, .18);
      }

      .CurrentQuestion__content {
        font-size: 24px;
        font-weight: 400;
        align-self: center;
      }

      .CurrentQuestion__answers > * + * {
        margin-top: 8px;
      }

      .CurrentQuestion__answer {
        font-size: 12px;
        font-weight: bold;
      }

      .CurrentQuestion__answer-head {
        display: flex;
        justify-content: space-between;
      }
    `}</style>
  </div>
)

PickedQuestionList.events = {
  create: ({services}) => {
    services.app.question.listPicked()
  }
}

export default connect(PickedQuestionList)
