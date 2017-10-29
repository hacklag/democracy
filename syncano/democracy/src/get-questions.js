import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const questions = await data
      .question
      .where('was_picked', false)
      .with('author')
      .orderBy('score', 'desc')
      .list()

    response.success(questions)
  } catch (err) {
    response.fail({
      err,
      message: 'Can not list questions'
    })
  }
}
