import {observable} from 'mobx'

export default observable({
  token: null,
  get isLoggedIn () {
    return Boolean(this.token)
  }
})
