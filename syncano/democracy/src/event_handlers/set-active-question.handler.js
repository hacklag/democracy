import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  const mostScoredQuestion = await data
    .question
    .where([['was_picked', false], ['score', '>', 0]])
    .orderBy('score', 'DESC')
    .first()

  if (mostScoredQuestion != null) {
    await data.question.update(mostScoredQuestion.id, {
      was_picked: true,
      picked_at: new Date().toISOString()
    })
  }
}
