import Syncano from 'syncano-server'

export default async ctx => {
  const {response, users, data} = new Syncano(ctx)

  try {
    const question = await data.question.create({
      author: ctx.meta.user.id,
      content: ctx.args.content,
      points: 1,
      score: 0,
      upvoted_by: [ctx.meta.user.id],
      was_picked: false,
    })
    const author = await users.fields('full_name', 'id').find(ctx.meta.user.id)

    response.success({
      ...question,
      author,
      upvoted_by: question.upvoted_by.value
    })
  } catch (err) {
    response.fail({
      message: 'Can not add question'
    })
  }
}
