import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  const question = await data.question
    .where('id', '=', ctx.args.question).first()

  const {upvoted_by, points, created_at} = question

  if (upvoted_by.indexOf(ctx.meta.user.id) > -1) {
    response.fail({
      message: 'You have already upvoted'
    })
    process.exit(0)
  }

  try {
    const itemHoursAge = new Date(created_at).getHours()

    const upvotedQuestion = await data.question.update(ctx.args.question, {
      upvoted_by: upvoted_by.concat(ctx.meta.user.id),
      points: question.points + 1,
      score: (question.points - 1) / Math.pow((itemHoursAge + 2), 1.8)
    })

    response.success({
      ...upvotedQuestion,
      upvoted_by: upvotedQuestion.upvoted_by.value
    })
  } catch (err) {
    response.fail({
      message: 'Can not upvote qestion'
    })
  }
}
