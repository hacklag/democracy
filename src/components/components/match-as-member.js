import {defineMatch} from 'zefir/router'

const isMember = ({stores}) => stores.app.isLoggedIn
const MatchAsMember = defineMatch(isMember)

export default MatchAsMember
