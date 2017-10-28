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
  MatchAsGuest
} from '../../components'

import QuestionForm from './components/question-form'
import QuestionList from './components/question-list'
import PickedQuestionList from './components/picked-question-list'

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
            <h2 className="u-mt">Active question</h2>
            <div className="u-mt---">
              <PickedQuestionList />
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
    `}</style>
  </Page>
)

export default Landing
