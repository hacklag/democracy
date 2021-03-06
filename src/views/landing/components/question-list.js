import {connect} from 'zefir/utils';
import {Button, Input, Grid} from '../../../components';
import Moment from 'react-moment'

const QuestionList = ({stores, actions}) =>
  stores.app.questions.length === 0 && !stores.ui.pending.has('question:list') ?
    <div className="u-ta-c u-mt+">No pending questions. <br /> Be the first to ask question.</div>
    :
      <ul className="QuestionList">
        {stores.app.questions.map(q => (
          <li className="Question" key={q.id}>
            <div className="Question__actions">
              {q.upvoted_by.indexOf(stores.auth.user.id) === -1 &&
                stores.auth.isLoggedIn && (
                <span
                  className="Question__upvote"
                  onClick={actions.upvote}
                  data-id={q.id}
                >
                  Upvote
                </span>
              )}
              <div className="Question__points">{q.points}</div>
            </div>
            <h3>{q.content}</h3>
            <div className="Question__meta">
              <span>{q.author.full_name}</span> asked <span><Moment fromNow date={q.created_at} /></span>
            </div>
          </li>
        ))}

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

          .Question__points {
            color: #999;
          }

          .Question__points:only-child {
            margin-top: 8px;
          }

          .Question__meta span {
            color: #6b6c6f;
          }

          .Question__actions {
            position: absolute;
            right: 100%;
            font-size: 18px;
            top: 50%;
            text-align: center;
            width: 64px;
            margin-top: -22px;
          }

          .Question__upvote {
            width: 0;
            height: 0;
            font-size: 0;
            border-style: solid;
            border-width: 0 7px 8px 7px;
            border-color: transparent transparent #007bff transparent;
            display: inline-block;
            vertical-align: top;
            cursor: pointer;
          }

          .Question + .Question {
            border-top: 1px solid #e5e5e5;
            margin-top: 8px;
          }
        `}</style>
      </ul>

QuestionList.actions = {
  upvote: ({services, stores}, e) => {
    const {id} = e.target.dataset

    if (stores.auth.isLoggedIn) {
      services.app.question.upvote(id)
    } else {
      services.app.auth.login()
    }
  }
}

QuestionList.events = {
  create: ({services}) => {
    services.app.question.list()
  }
}

export default connect(QuestionList)
