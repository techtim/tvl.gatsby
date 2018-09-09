import React from 'react'
import styled from 'styled-components'
import { Heading, Lead, Text, Box } from 'rebass'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const MailTo = styled(Text).attrs({ is: 'a', color: 'gray' })`
  text-decoration: none;
`

const Contacts: React.SFC = () => (
  <Layout>
    <Box px={4}>
      <Lead fontSize={5} mb={4}>
        ready to make something amazing?
      </Lead>
      <Heading fontSize={4} fontWeight="medium" mb={2}>
        Contact me
      </Heading>
      <Box mb={4}>
        <MailTo href="mailto:timvisuals@gmail.com">timvisuals@gmail.com</MailTo>
      </Box>
      <ContactForm />
    </Box>
  </Layout>
)

export default Contacts
