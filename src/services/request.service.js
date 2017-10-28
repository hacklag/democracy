import {action} from 'mobx'
import Syncano from 'syncano-client'

const syncano = new Syncano(process.env.SYNCANO_PROJECT_INSTANCE, {
  host: process.env.SPACE_HOST
})

class Request {
  @action.bound request (name) {
    const {ui} = this.stores
    syncano.setToken(window.localStorage.getItem('token'))

    ui.pending.set(name)
    ui.messages.delete(name)

    const handleError = this.handleError.bind(this, name)
    const handleSuccess = this.handleSuccess.bind(this, name)

    return {
      get: (endpoint, data, options) =>
        syncano
          .get(endpoint, data, options)
          .then(handleSuccess)
          .catch(handleError),
      post: (endpoint, data, options) =>
        syncano
          .post(endpoint, data, options)
          .then(handleSuccess)
          .catch(handleError),
      delete: (endpoint, data, options) =>
        syncano
          .delete(endpoint, data, options)
          .then(handleSuccess)
          .catch(handleError),
      put: (endpoint, data, options) =>
        syncano
          .put(endpoint, data, options)
          .then(handleSuccess)
          .catch(handleError),
      patch: (endpoint, data, options) =>
        syncano
          .patch(endpoint, data, options)
          .then(handleSuccess)
          .catch(handleError)
    }
  }

  handleSuccess (name, res) {
    const {ui} = this.stores

    setTimeout(() => {
      action(`${name} - remove pending flag`, () => {
        ui.pending.delete(name)
      })()
    }, 0)

    return res
  }

  handleError (name, err) {
    const {ui} = this.stores

    setTimeout(() => {
      action(`${name} - remove pending flag`, () => {
        ui.pending.delete(name)
      })()
    }, 0)

    err.setError = error => ui.messages.set(name, error)
    err.data = err.response.data

    throw err
  }
}

const r = new Request()

export default stores => {
  r.stores = stores

  return r.request.bind(r)
}
