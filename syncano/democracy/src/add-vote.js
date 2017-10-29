import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const alreadyVoted = await data.vote
    .where('question', ctx.args.question)
    .where('sender', ctx.args.sender)
    .first()

  if (alreadyVoted) {
    console.log('already voted')
    process.exit(0)
  }

  const {question, value, sender} = ctx.args

  await data.vote.create({
    sender,
    question,
    value
  })
  } catch (error) {
    console.log(error, error.message)
  }
}
