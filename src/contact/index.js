const { json, send, createError } = require('micro')
const getMailer = require('./getMailer')

const makeText = message => `
  Создано ${new Date().toLocaleTimeString('ru-RU')} MSK.

  ${message}
`

module.exports = async (req, res) => {
  try {
    const body = await json(req)

    const { message, email, subject, name } = body

    if (!message || !email || !subject || !name || !email.match(/.+@.+/)) {
      throw createError(400, 'Invalid input')
    }

    const transporter = getMailer()

    try {
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: 'tvl@tvl.io',
        subject,
        text: makeText(message),
      })

      send(res, 201, { status: 'OK' })
    } catch (error) {
      sendError(500, 'Something went wrong')
    }
  } catch (err) {
    send(res, 400, err.message)
  }
}
