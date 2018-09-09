import React from 'react'
import { Field, Form, Formik } from 'formik'
import { Textarea as _Textarea, Input as _Input, Flex, Box } from 'rebass'
import { Submit, Textarea, RebassField } from './Inputs'

interface FormFields {
  name: string
  email: string
  subject: string
  message: string
}

interface State {
  ok: boolean
  error: any
}

export default class ContactForm extends React.Component<{}, State> {
  render() {
    return (
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

          if (values.email && !values.email.match(/.+@.+/))
            errors.email = 'Invalid email format'
          if (!values.name) errors.name = 'Please provide your name'
          if (!values.subject) errors.subject = 'Please provide subject'
          if (!values.message) errors.message = 'Write something'

          return errors
        }}
        validateOnChange={false}
        onSubmit={values =>
          fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(values),
          })
            .then(() => this.setState({ ok: true, error: null }))
            .catch(error => this.setState({ ok: false, error }))
        }
      >
        {({ isSubmitting }) => (
          <Box width={['100%', '100%', 300]}>
            <Form>
              <Field name="name" placeholder="Name" component={RebassField} />

              <Field
                name="email"
                placeholder="Email"
                type="email"
                component={RebassField}
              />

              <Field
                name="subject"
                placeholder="Subject"
                component={RebassField}
              />

              <Field
                name="message"
                render={(props: any) => (
                  <RebassField
                    component={Textarea}
                    placeholder="Message"
                    rows={5}
                    {...props}
                  />
                )}
              />

              <Flex justifyContent="flex-end">
                <Submit disabled={isSubmitting}>Send</Submit>
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    )
  }
}
