import {defineMatch} from 'zefir/router'

const isMember = ({stores}) => stores.auth.isLoggedIn
const MatchAsMember = defineMatch(isMember)

export default MatchAsMember
