import {observable} from 'mobx'

export default observable({
  pending: observable.map(),
  messages: observable.map(),
  modal: null
})
