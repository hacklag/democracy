import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const activeQestion = await data.question_history.first()

    response.success(activeQestion)
  }
  catch (err) {
    response.fail({
      message: 'Can not get active question',
    })
  }
}
