import {Match, Modal, Switch} from './components'
import VoteResults from './views/modals/vote-results'

import Landing from './views/landing'
import Missing from './views/missing'

const Routes = () => (
  <div>
    <Switch>
      <Match path='/' component={Landing} />
      <Match component={Missing} />
    </Switch>

    <Modal name='voteResults' title='Vote results' icon='chart-bar' component={VoteResults} />
  </div>
)

Routes.events = {
  create: ({services}) => {
    services.app.auth.rebuildSession()
  }
}

export default Routes
