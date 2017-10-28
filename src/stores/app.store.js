import {observable} from 'mobx'

export default {
  questions: observable.array(),
  pickedQuestions: observable.array(),
  get activeQuestion () {
    return this.pickedQuestions.length >= 1 ? this.pickedQuestions[0] : null
  }
}
