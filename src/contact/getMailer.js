const nodemailer = require('nodemailer')

module.exports = () =>
  nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'h5ywljnueofsriws@ethereal.email',
      pass: '8rHnGtpgYBzVfeG6XC',
    },
  })

// process.env.NODE_ENV === 'production'
//   ? nodemailer.createTransport(/*TODO:add production config*/)
//   : nodemailer.createTransport({
//       host: 'smtp.ethereal.email',
//       port: 587,
//       auth: {
//         user: 'h5ywljnueofsriws@ethereal.email',
//         pass: '8rHnGtpgYBzVfeG6XC',
//       },
//     })
