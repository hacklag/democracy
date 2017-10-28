import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  try {
    const activeQuestions = await data
      .question
      .where('was_picked', true)
      .orderBy('picked_at', 'DESC')
      .with('author')
      .list()

    const votes = await data.vote
      .where('question', 'in', activeQuestions.map(q => q.id))
      .list()

    const questionsWithVotes = activeQuestions.map(q => ({
      ...q,
      total_votes: votes.filter(v => v.question === q.id).length,
      votes: [
        {
          key: 'Yes',
          count: votes.reduce((all, v) => {
            return v.question === q.id && v.value === true ? all + 1 : all
          }, 0)
        },
        {
          key: 'No',
          count: votes.reduce((all, v) => {
            return v.question === q.id && v.value === false ? all + 1 : all
          }, 0)
        }
      ]
    }))

    response.success(questionsWithVotes)
  } catch (err) {
    response.fail({
      message: 'Can not get active question'
    })
  }
}
