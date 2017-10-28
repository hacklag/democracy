import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const question = await data.question.delete(ctx.args.question)

    response.success(question)
  }
  catch (err) {
    response.fail({
      message: 'Can not delete question',
    })
  }
}
