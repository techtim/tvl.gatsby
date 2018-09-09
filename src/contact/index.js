const nodemailer = require('nodemailer')
const { json, send, createError } = require('micro')

const makeText = message => `
  Создано ${new Date().toLocaleTimeString('ru-RU')} MSK.

  ${message}
`

module.exports = async (req, res) => {
  try {
    const { message, email, subject, name } = await json(req)

    // validate input
    if (!message || !email || !subject || !name || !email.match(/.+@.+/)) {
      throw createError(400, 'Invalid input')
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'h5ywljnueofsriws@ethereal.email',
        pass: '8rHnGtpgYBzVfeG6XC',
      },
    })

    // const transporter =
    //   process.env.NODE_ENV === 'production'
    //     ? nodemailer.createTransport({
    //         /*TODO:add production config*/
    //       })
    //     : nodemailer.createTransport({
    //         host: 'smtp.ethereal.email',
    //         port: 587,
    //         auth: {
    //           user: 'h5ywljnueofsriws@ethereal.email',
    //           pass: '8rHnGtpgYBzVfeG6XC',
    //         },
    //       })

    try {
      await transporter.sendMail({
        from: `${name} <${email}>`,
        to: 'tvl@tvl.io',
        subject,
        text: makeText(message),
      })

      send(res, 201, { status: 'OK' })
    } catch (error) {
      // Something wrong with email
      sendError(500, 'Something went wrong')
    }
  } catch (err) {
    // JSON parsing failed
    send(res, 400, err.message)
  }
}
