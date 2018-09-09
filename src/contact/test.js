const micro = require('micro')
const test = require('ava')
const listen = require('test-listen')
const request = require('request-promise-native')
const contact = require('./')

test('should respond to message sent', async t => {
  const service = micro(contact)

  const uri = await listen(service)
  const body = await request({
    uri,
    method: 'POST',
    json: true,
    body: {
      name: 'Name',
      email: 'client@domain.com',
      subject: 'Project',
      message: 'Would like to work with you',
    },
  })

  t.deepEqual(body.status, 'OK')
  service.close()
})

test('should error when body is empty', async t => {
  const service = micro(contact)
  const uri = await listen(service)

  const error = await t.throwsAsync(
    request({ uri, json: true, method: 'POST' }),
  )

  t.is(error.statusCode, 400)

  service.close()
})

test('should validate message', async t => {
  const service = micro(contact)
  const uri = await listen(service)

  const error = await t.throwsAsync(
    request({
      uri,
      json: true,
      method: 'POST',
      body: {
        message: 'Message',
        subject: 'subject',
        email: 'no.at.sign',
      },
    }),
  )

  t.is(error.statusCode, 400)

  service.close()
})
