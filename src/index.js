import {Match, Switch} from './components'

import Landing from './views/landing'
import Missing from './views/missing'

const Routes = () => (
  <div>
    <Switch>
      <Match path='/' component={Landing} />
      <Match component={Missing} />
    </Switch>
  </div>
)

Routes.events = {
  create: ({services}) => {
    services.app.auth.rebuildSession()
  }
}

export default Routes
