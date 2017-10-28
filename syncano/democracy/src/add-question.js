import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const question = await data.question.create({
      author: ctx.meta.user.token,
      content: ctx.args.content,
    })
    response.success(question)
  }
  catch (err) {
    response.fail({
      message: 'Can not add question',
    })
  }
}
