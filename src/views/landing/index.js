import {
  Centered,
  MatchAsMember,
  Wrapper,
  Input,
  Nav,
  Head,
  Page,
  Grid,
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
        <h2 className="Main__title u-pt+++">Democracy 3.0</h2>

        <div className="u-mt+++">
          <QuestionForm />
        </div>

        <Grid spacing="md">
          <div className="u-1/1">
            <h2 className="u-mt">Pending questions</h2>
            <div className="u-mt---">
              <QuestionList />
            </div>
          </div>
          <div className="u-1/1">
            <h2 className="u-mt">Asked questions</h2>
            <div className="u-mt---">
              <div className="CurrentQuestion">
                <h1 className="CurrentQuestion__content">
                  Should we do that or that?
                </h1>

                <div className="CurrentQuestion__answers u-mt---">
                  <div className="CurrentQuestion__answer">
                    <div className="CurrentQuestion__answer-head">
                      <span className="CurrentQuestion__key">Yes</span>
                      <span className="CurrentQuestion__value">{Math.round(100 * 20 / 124)}% (20)</span>
                    </div>
                    <ProgressBar total={124} value={20} />
                  </div>
                  <div className="CurrentQuestion__answer">
                    <div className="CurrentQuestion__answer-head">
                      <span className="CurrentQuestion__key">No</span>
                      <span className="CurrentQuestion__value">{Math.round(100 * 104 / 124)}% (104)</span>
                    </div>
                    <ProgressBar total={124} value={104} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </div>
    </Wrapper>

    <style jsx>{`
      .Main {
        padding-bottom: 30px;
      }

      .Main__title {
        text-align: center;
        font-size: 48px;
        font-weight: 300;
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
  </Page>
)

export default Landing
