import {observable} from 'mobx'

export default observable({
  questions: observable.array(),
  selected: null,
  get question() {
    return this.pickedQuestions.find(i => i.id === this.selected) || {}
  },
  pickedQuestions: observable.array(),
  get activeQuestion () {
    return this.pickedQuestions.length >= 1 ? this.pickedQuestions[0] : null
  }
}
)
