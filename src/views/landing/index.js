import {
  Centered,
  MatchAsMember,
  Wrapper,
  Input,
  Nav,
  Head,
  Page,
  Link,
  MatchAsGuest
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
          <h1 className="CurrentQuestion__content">
            Lorem ipsum?
          </h1>

          <div className="CurrentQuestion__answers">
            <div className="CurrentQuestion__answer">YES: 112</div>
            <div className="CurrentQuestion__answer">NO: 12</div>
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
      }

      .CurrentQuestion__content {
        font-size: 24px;
        align-self: center;
      }
    `}</style>
  </Page>
)

export default Landing
