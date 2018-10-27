import React from 'react'
import { FieldProps } from 'formik'
import styled from 'styled-components'
import { Text, Box, Button } from 'rebass'

export interface RebassFieldProps extends FieldProps {
  component: React.ComponentType
}

export const Input: any = styled.input.attrs({
  boxShadow: 'none',
  borderRadius: 0,
  px: 3,
})``

export const Textarea: any = styled.textarea.attrs({
  boxShadow: 'none',
  borderRadius: 0,
  px: 3,
})``

export const RebassField: React.SFC<RebassFieldProps> = ({
  component: Component = Input,
  field,
  form: { errors, touched },
  ...props
}) => {
  const didError = errors[field.name] && touched[field.name]

  return (
    <Box mt={2} mb={3}>
      <Component
        {...props}
        {...field}
        border={`1px solid ${didError ? 'red' : 'black'} !important`}
      />
      {didError && (
        <Text color="red" fontSize={1}>
          {errors[field.name] || ''}
        </Text>
      )}
    </Box>
  )
}

export const Submit = styled(Button).attrs<any>({
  type: 'submit',
  color: 'white',
  bg: 'black',
  borderRadius: 0,
  px: 4,
})`
  text-transform: uppercase;
`
