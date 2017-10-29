import hello from 'hellojs'
import {action, runInAction, observable} from 'mobx'

export default class App {
  constructor (props) {
    this._hello()
  }

  question = {
    list: action.bound(async () => {
      const questions = await this.services
        .request('question:list')
        .get('democracy/get-questions')

      this.store.questions.replace(questions)
    }),

    listPicked: action.bound(async () => {
      const questions = await this.services
        .request('question:list')
        .get('democracy/get-active-questions')

      this.store.pickedQuestions.replace(questions)
    }),

    upvote: action.bound(async question => {
      const res = await this.services
        .request('question:upvote')
        .post('democracy/upvote-question', {question})

      console.log(this.store.questions)
      this.store.questions.replace(
        this.store.questions.map(item =>
          item.id === res.id ? {
            ...item,
            points: res.points,
            upvoted_by: res.upvoted_by
          } : item
        )
      )
    }),

    add: action.bound(async data => {
      const question = await this.services
        .request('question:add')
        .post('democracy/add-question', {
          content: data.content
        })

        runInAction('add question', () => {
          this.store.questions.push(question)
        })
    })
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

            this.stores.auth.token = token
            this.stores.auth.user = observable(user)
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
      this.stores.auth.token = null
      this.services.syncano.setToken(null)
      this.router.history.push('/')
      window.localStorage.removeItem('token')
    }),

    rebuildSession:  action.bound(() => {
      this.stores.auth.token = window.localStorage.getItem('token')
      this.stores.auth.user = JSON.parse(window.localStorage.getItem('user') || "{}")
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
