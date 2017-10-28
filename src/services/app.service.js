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

      this.store.questions.replace(questions)
    }),

    upvote: action.bound(question =>
      this.services
        .request('question:upvote')
        .post('democracy/upvote-question', {question})
        .then(() => {
          this.stores.questions.replace(
            this.stores.questions.map(item => item.id !== question.id ? item : {
              ...item,
              points: item.points + 1
            })
          )
        })
    ),

    add: action.bound(data =>
      this.services
        .request('question:add')
        .post('democracy/add-question', {
          content: data.content
        })
        .then(question => {
          this.store.questions.push(question)
        })
    )
  }

  auth =  {
    login: action.bound(network => {
      const {messages} = this.stores
      const {request, ui} = this.services

      this.hello('facebook').login(
        async social => {
          const {access_token} = social.authResponse

          try {
            const res = await request('auth:social-login')
              .post(`user-auth/social-login`, {
                network: 'facebook',
                access_token
              })
            const token = res.user_key
            const user = {
              id: res.id,
              full_name: res.full_name
            }

            this.store.token = token
            this.store.token = token
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('user', JSON.stringify(user))
          } catch (err) {
            console.log(err.message)
            messages.set('auth:login', err.message)
          }
        },
        err => {
          messages.set('auth.login', err)
        }
      )
    }),

    logout: action.bound(() => {
      this.store.token = null
      this.services.syncano.setToken(null)
      this.router.history.push('/')
      window.localStorage.removeItem('token')
    }),

    rebuildSession:  action.bound(() => {
      this.store.token = window.localStorage.getItem('token')
      this.store.user = JSON.parse(window.localStorage.getItem('user') || "{}")
    })
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
