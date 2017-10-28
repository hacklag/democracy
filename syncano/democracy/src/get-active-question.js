import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const activeQuestion = await data
      .question
      .where('was_picked', true)
      .orderBy('picked_at', 'DESC')
      .with('author')
      .first()

    response.success(activeQuestion)
  }
  catch (err) {
    response.fail({
      message: 'Can not get active question',
    })
  }
}
