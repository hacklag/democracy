import hello from 'hellojs'
import {action} from 'mobx'

export default class App {
  constructor (props) {
    this._hello()
  }

  @action.bound login (network) {
    const {messages} = this.stores
    const {request, ui} = this.services

    this.hello('facebook').login(
      async social => {
        const {access_token} = social.authResponse

        try {
          const res = await request('auth:social-login').post(`user-auth/social-login`, {
            network: 'facebook',
            access_token
          })

          console.log("You're in.")
        } catch (err) {
          console.log(err.message)
          messages.set('auth:login', err.message)
        }
      },
      err => {
        messages.set('auth.login', err)
      }
    )
  }

  _hello () {
    const credentials = {
      facebook: process.env.FACEBOOK_APP_ID
    }

    const options = {
      scope: 'email',
      redirect_uri: process.env.HELLO_REDIRECT_URI
    }

    hello.init(credentials, options)

    this.hello = hello.bind(hello)
  }
}
