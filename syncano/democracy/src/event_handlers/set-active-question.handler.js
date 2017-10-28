import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const mostScoredQuestion = await data
      .question
      .where('was_picked', false)
      .where('score', '>', 0)
      .orderBy('score', 'DESC')
      .fields('id')
      .first()

    if (mostScoredQuestion != null) {
      await data.question.update(mostScoredQuestion.id, {
        was_picked: true,
        picked_at: new Date().toISOString()
      })
    }

  }
  catch (err) {
    response.fail({
      message: 'Can not get active question',
    })
  }
}
