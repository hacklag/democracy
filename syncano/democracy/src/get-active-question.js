import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const activeQuestion = await data.question_history.first()

    response.success(activeQuestion)
  } catch (err) {
    response.fail({
      message: 'Can not get active question'
    })
  }
}
