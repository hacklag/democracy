import {observable} from 'mobx'

export default {
  pending: observable.map(),
  messages: observable.map()
}
