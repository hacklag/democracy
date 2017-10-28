import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const questions = await data.question.list()

    response.success(questions)
  }
  catch (err) {
    response.fail({
      message: 'Can not list questions',
    })
  }
}
