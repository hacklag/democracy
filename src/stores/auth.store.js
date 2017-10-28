import {observable} from 'mobx'

export default observable({
  token: null,
  user: observable({
    id: null,
    full_name: null
  }),
  get isLoggedIn () {
    return Boolean(this.token)
  }
})
