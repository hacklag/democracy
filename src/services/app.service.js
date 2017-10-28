import hello from 'hellojs'
import {action} from 'mobx'

export default class App {
  constructor (props) {
    this._hello()
  }

  question = {
    list: action.bound(async () => {
      let questions = []

      try {
        questions = await this.services
          .request('questiion:list')
          .get('democracy/get-questions')
      } catch(err) {

      }

      this.store.questions.replace([
        {
          id: 1,
          content: 'Should we go out tonight?',
          author: {
            username: 'johndoe',
            name: 'John Doe'
          },
          points: 90
        },
        {
          id: 2,
          content: 'Should we build todo app?',
          author: {
            username: 'johndoe',
            name: 'John Doe'
          },
          points: 140
        }
      ])
    }),

    upvote: action.bound(question =>
      this.services
        .request('question:upvote')
        .post('democracy/upvote-question', {question})
    ),

    add: action.bound(data =>
      this.services
        .request('question:add')
        .post('democracy/add-question', {
          content: data.content
        })
    )
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
