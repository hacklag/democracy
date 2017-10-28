import {Match, MatchAsGuest, MatchAsMember, Switch} from './components'

import Landing from './views/landing'
import Auth from './views/auth'
import Missing from './views/missing'

const guestRoutes = [
  ['/', Landing, true],
  ['/auth', Auth]
]

const memberRoutes = [
  // ['/dashboard', Dashboard],
  // ['/flows/:id', Flows, true]
  //
]

const Routes = () => (
  <div>
    <Switch>
      {renderRoutes(guestRoutes, MatchAsGuest, '/dashboard')}
      {renderRoutes(memberRoutes, MatchAsMember, '/auth/login')}
      <Match component={Missing} />
    </Switch>
  </div>
)

Routes.events = {
  create: ({services}) => {
    services.auth.rebuildSession()
  }
}

export default Routes

function renderRoutes (items, Render, redirect) {
  return items.map(([path, component, exact], i) => (
    <Render key={i} {...{path, component, exact, redirect}} />
  ))
}
