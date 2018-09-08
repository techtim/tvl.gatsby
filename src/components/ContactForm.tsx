import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Text } from 'rebass'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

const ContactForm: React.SFC = () => (
  <Formik
    initialValues={{
      name: '',
      email: '',
      subject: '',
      message: '',
    }}
    validate={values => {
      const errors: Partial<FormFields> = {}

      if (!values.email) errors.email = 'You must provide email'
      if (!values.name) errors.name = 'Please provide your name'
      if (!values.subject) errors.subject = 'Please provide subject'
      if (!values.message) errors.message = 'Write something in message'

      return errors
    }}
    onSubmit={values => {
      // fetch('/api/contact', { method: 'POST', body: JSON.stringify(values) })
      alert(JSON.stringify(values))
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <Field name="name" placeholder="Name" />
        {errors.name && touched.name && <Text color="red">{errors.name}</Text>}
        <Field name="email" placeholder="Email" type="email" />
        {errors.email &&
          touched.email && <Text color="red">{errors.email}</Text>}
        <Field name="subject" placeholder="Subject" />
        {errors.subject &&
          touched.subject && <Text color="red">{errors.subject}</Text>}
        <Field name="message" placeholder="Message" component="textarea" />
        {errors.message &&
          touched.message && <Text color="red">{errors.message}</Text>}
        <button type="submit" disabled={isSubmitting}>
          Send
        </button>
      </Form>
    )}
  </Formik>
)

export default ContactForm
