import {runInAction} from 'mobx'

export default class {
  modals = ['voteResults'].reduce(
    (all, modalName) => ({
      ...all,
      [modalName]: {
        open: () =>
          runInAction('open modal', () => {
            this.store.modal = modalName
          }),
        close: () =>
          runInAction('close modal', () => {
            this.store.modal = null
          }),
        toggle: () =>
          runInAction('toggle modal', () => {
            this.store.modal = this.store.modal === modalName ? null : modalName
          })
      }
    }),
    {}
  )
}
