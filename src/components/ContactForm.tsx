import React from 'react'
import { Field, Form, Formik, FieldProps } from 'formik'
import styled from 'styled-components'
import {
  Text,
  Textarea as _Textarea,
  Input as _Input,
  Flex,
  Box,
  Button,
} from 'rebass'

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

interface RebassFieldProps extends FieldProps {
  component: React.ComponentType
}

const Input: any = styled(_Input).attrs({
  borderColor: 'black',
  boxShadow: 'none',
  borderRadius: 0,
  border: '1px solid !important',
  px: 3,
})``

const Textarea: any = styled(_Textarea).attrs({
  borderColor: 'black',
  boxShadow: 'none',
  borderRadius: 0,
  border: '1px solid !important',
  px: 3,
})``

const Submit = styled(Button).attrs({
  type: 'submit',
  color: 'white',
  bg: 'black',
  borderRadius: 0,
  px: 4,
})`
  text-transform: uppercase;
`

const RebassField: React.SFC<RebassFieldProps> = ({
  component: Component = Input,
  field: { name },
  form: { errors, touched },
  ...props
}) => (
  <>
    <Component {...props} mt={2} mb={3} />
    {errors[name] && touched[name] && <Text color="red">{errors[name]}</Text>}
  </>
)

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
          if (!values.name) errors.name = 'Please provide your name'
          if (!values.subject) errors.subject = 'Please provide subject'
          if (!values.message) errors.message = 'Write something in message'

          return errors
        }}
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
                render={(props: any) => (
                  <RebassField
                    component={Textarea}
                    {...props}
                    name="message"
                    placeholder="Message"
                    rows={5}
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
