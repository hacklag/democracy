import {connect} from 'zefir/utils'
import Nav from '../nav'

const UserNav = ({services: {auth: {logout}}}) => (
  <Nav>
    <a onClick={logout}>Sign out</a>
  </Nav>
)

export default connect(UserNav)
