import {observable} from 'mobx'

export default observable({
  questions: observable.array(),
  token: null,
  user: observable({
    id: null,
    full_name: null
  }),
  get isLoggedIn () {
    return Boolean(this.token)
  }
})
