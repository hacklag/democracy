import Syncano from 'syncano-server'

export default async ctx => {
  const {logger, users, event, data} = new Syncano(ctx)
  const {debug} = logger('send-question')

  try {
    const question = await data.question
      .where('was_picked', true)
      .orderBy('picked_at', 'DESC')
      .first()
    const allUsers = await users.where('type', 'messenger').list()

    debug('allUsers', allUsers.length)
    allUsers.forEach(async (u) => {
      const params = {
        questionId: question.id,
        questionText: question.content,
        recipient: u.username
      }
      debug('sending question', params)
      await event.emit('messenger_bot.send-question', params)
    })
  } catch (err) {
    console.log('error!', err)
  }
}
