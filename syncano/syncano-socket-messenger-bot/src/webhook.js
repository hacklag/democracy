import Server from 'syncano-server'

export default async (ctx) => {
  const {users, event, logger, response} = Server(ctx)
  const {debug} = logger('webhook')

  if (ctx.args['hub.mode'] === 'subscribe') {
    if (ctx.args['hub.verify_token'] === 'messenger-bot') {
      response(ctx.args['hub.challenge'])
    } else {
      response('Wrong token!', 400)
    }
  }

  try {
    debug('Checking new-user')
    if (ctx.args.entry[0].messaging && ctx.args.entry[0].messaging[0].postback.payload === 'GET_STARTED') {
      debug('Sending event new user')
      const sender = ctx.args.entry[0].messaging[0].sender.id
      event.emit('message-send', {text: 'Welcome! Now you can have real impact on your future!', sender})

      await users
        .fields('id', 'user_key', 'full_name')
        .firstOrCreate(
        {
          username: sender
        },
        {
          username: sender,
          password: Math.random().toString(36).slice(-8),
          type: 'messenger'
        }
      )
    }
  } catch (err) {
    // console.log('Error', err)
  }

  try {
    debug('Checking question-response-received')
    if (ctx.args.entry[0].messaging && ctx.args.entry[0].messaging[0].postback.payload) {
      const sender = ctx.args.entry[0].messaging[0].sender.id
      const payload = JSON.parse(ctx.args.entry[0].messaging[0].postback.payload)
      debug('PAYLOAD', {payload, sender})
      return event.emit('question-response-received', {payload, sender})
    }
  } catch (err) {
    // console.log('Error', err)
  }

  if (ctx.args.entry && ctx.args.entry[0] && ctx.args.entry[0].messaging) {
    const messagingEvents = ctx.args.entry[0].messaging
    for (let i = 0; i < messagingEvents.length; i++) {
      const fbEvent = messagingEvents[i]
      const sender = fbEvent.sender.id
      if (fbEvent.message && fbEvent.message.text) {
        const text = fbEvent.message.text
        debug('Sending event', {text, sender})
        return event.emit('message-received', {text, sender})
      }
    }
  }
}
