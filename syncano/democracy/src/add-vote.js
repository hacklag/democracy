import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const {question, value} = ctx.args;

    const vote = await data.vote.create({
      author: ctx.meta.user.token,
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
