import Syncano from 'syncano-server'

export default async ctx => {
  const {response, data} = new Syncano(ctx)

  const questionsList = await data.question.fields('id', 'points', 'created_at').list()

  const updatedQuestionsList = questionsList.reduce((newQestionsArray, item) => {
    const itemHoursAge = new Date(item.created_at).getHours()

    const newScore = (item.points - 1) / Math.pow((itemHoursAge + 2), 1.8)
    newQestionsArray.push([item.id, {score: newScore}])

    return newQestionsArray
  },[])

  data.question.update(updatedQuestionsList)
}
