import {defineMatch} from 'zefir/router'

const isGuest = ({stores}) => !stores.auth.isLoggedIn
const MatchAsGuest = defineMatch(isGuest)

export default MatchAsGuest
