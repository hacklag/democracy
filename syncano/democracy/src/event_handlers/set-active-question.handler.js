import Syncano from 'syncano-server'

export default async ctx => {
  const {socket, response, data} = new Syncano(ctx)

  try {
    const mostScoredQuestion = await data
      .question
      .where('was_picked', false)
      .orderBy('score', 'DESC')
      .first()

    if (mostScoredQuestion != null) {
      await data.question.update(mostScoredQuestion.id, {
        was_picked: true,
        picked_at: new Date().toISOString()
      })

      await socket.post('democracy/send-question')

      console.log('message was sent')
    }
  } catch (err) {
    console.log('set-active-question:', err)
  }
}
