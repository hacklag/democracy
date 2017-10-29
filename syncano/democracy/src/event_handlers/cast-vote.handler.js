import Syncano from 'syncano-server'

export default async ctx => {
  const {socket, data} = new Syncano(ctx)
  const {payload: {questionId: id, answer}, sender} = ctx.args

  socket.post('democracy/add-vote', {
    sender,
    question: id,
    value: answer === 'yes'
  })
}
