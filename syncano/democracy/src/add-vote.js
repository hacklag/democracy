import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  const questionsList = await data.vote
    .where('question', '=', ctx.args.question).list()

  let canVote = true

  questionsList.forEach(item => {
    if (ctx.meta.user.id === item.author) {
      canVote = false
      break
    }
  })

  if(!canVote) {
    response.fail({
      message: 'You have already voted',
    })
    process.exit(0)
  }

  try {
    const {question, value} = ctx.args;

    const vote = await data.vote.create({
      author: ctx.meta.user.id,
      question,
      value
    })
    response.success(vote)
  }
  catch (err) {
    response.fail({
      message: 'Can not add vote',
    })
  }
}
