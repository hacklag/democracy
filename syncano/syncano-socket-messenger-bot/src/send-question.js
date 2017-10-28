import request from 'request'

export default (ctx) => {
  const sendMessage = (question, recipient) => {
    request({
      url: 'https://graph.facebook.com/v2.6/me/messages',
      qs: {access_token: ctx.config.FACEBOOK_APP_TOKEN},
      method: 'POST',
      json: {
        recipient: {
          id: recipient
        },
        message: {
          attachment: {
            type: 'template',
            payload: {
              template_type: 'button',
              text: `⁉️ *${question.text}*`,
              buttons: [
                {
                  type: 'postback',
                  title: '👍 YES',
                  payload: JSON.stringify({ questionId: question.id, answer: 'yes' })
                },
                {
                  type: 'postback',
                  title: '🚫 NO',
                  payload: JSON.stringify({ questionId: question.id, answer: 'no' })
                }
              ]
            }
          }
        }
      }
    }, function (error, response, body) {
      if (error) {
        console.log('Error sending message: ', error)
      } else if (response.body.error) {
        console.log('Error: ', response.body.error)
      }
    })
  }

  sendMessage({text: ctx.args.question, id: 123}, ctx.args.recipient)
}
