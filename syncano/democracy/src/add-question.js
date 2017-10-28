import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const question = await data.question.create({
      author: ctx.meta.user.id,
      content: ctx.args.content,
      points: 1,
      score: (0 / Math.pow(2, 1.8)),
      upvoted_by: [ctx.meta.user.id]
    })
    response.success(question)
  }
  catch (err) {
    response.fail({
      message: 'Can not add question',
    })
  }
}
