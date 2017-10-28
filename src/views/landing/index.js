import {
  Centered,
  MatchAsMember,
  Wrapper,
  Input,
  Nav,
  Head,
  Page,
  Link,
  MatchAsGuest,
  ProgressBar
} from '../../components'

import QuestionForm from './components/question-form'
import QuestionList from './components/question-list'

const Landing = ({logout}) => (
  <Page>
    <Head>
      <title>hackyeah</title>
    </Head>

    <Wrapper>
      <div className="Main">
        <div className="CurrentQuestion">
          <div>
            <div className="CurrentQuestion__title">
              Current question
            </div>

            <h1 className="CurrentQuestion__content">
              Should we do that or that?
            </h1>
          </div>

          <div className="CurrentQuestion__answers">
            <div className="CurrentQuestion__title">
              Results
            </div>
            <div className="CurrentQuestion__answer">
              <div className="CurrentQuestion__answer-head">
                <span className="CurrentQuestion__key">Yes</span>
                <span className="CurrentQuestion__value">{Math.round(100 * 20 / 124)}%</span>
              </div>
              <ProgressBar total={124} value={20} />
            </div>
            <div className="CurrentQuestion__answer">
              <div className="CurrentQuestion__answer-head">
                <span className="CurrentQuestion__key">No</span>
                <span className="CurrentQuestion__value">{Math.round(100 * 104 / 124)}%</span>
              </div>
              <ProgressBar total={124} value={104} />
            </div>
          </div>
        </div>

        <div className="u-mt">
          <QuestionForm />
        </div>

        <h2 className="u-mt">Hot questions</h2>
        <div className="u-mt---">
          <QuestionList />
        </div>
      </div>
    </Wrapper>

    <style jsx>{`
      .Main {
        padding: 30px 0;
      }

      .CurrentQuestion {
        display: flex;
        justify-content: space-between;
        border: 1px solid #e5e5e5;
        padding: 32px;
        border-radius: 4px;
        background: #fff;
        box-shadow: 0 2px 4px hsla(225,2%,43%, .18);
      }

      .CurrentQuestion__content {
        font-size: 24px;
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
  </Page>
)

export default Landing
