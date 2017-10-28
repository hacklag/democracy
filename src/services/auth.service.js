import {action} from 'mobx'
import {when} from 'zefir/utils'

export default class {
  @action.bound async rebuildSession () {
    this.store.token = window.localStorage.getItem('token')
  }

  @action.bound async login (credentials) {
    try {
      const {user_key: token} = await this.services
        .request('auth.login')
        .post('user-auth/login', credentials)

      this.handleValidAuth(token)
    } catch ({setError, data}) {
      setError(data.message)
    }
  }

  @action.bound async register (credentials) {
    try {
      const {user_key: token} = await this.services
        .request('auth.register')
        .post('user-auth/register', credentials)

      this.handleValidAuth(token)
    } catch ({setError, data}) {
      setError(data)
    }
  }

  @when('logout')
  @action.bound
  logout () {
    this.store.token = null
    this.services.syncano.setToken(null)
    this.router.history.push('/')
    window.localStorage.removeItem('token')
  }

  @action.bound async handleValidAuth (token) {
    this.store.token = token
    this.services.syncano.setToken(token)
    window.localStorage.setItem('token', token)
  }
}
