import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const upvotedQuestion = await data.question.update(ctx.agrs.question, {
      upvoted_by: ctx.meta.user.token,
    })
    response.success(upvotedQuestion)
  }
  catch (err) {
    response.fail({
      message: 'Can not upvote qestion',
    })
  }
}
