import React from 'react'
import styled from 'styled-components'
import { Heading, Text, Box } from 'rebass'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const MailTo = styled(Text).attrs<any>({ as: 'a', color: 'gray' })`
  text-decoration: none;
`

const Contacts: React.SFC = () => (
  <Layout>
    <Box px={4}>
      <Heading fontSize={5} mb={4} fontWeight="medium">
        ready to make something amazing?
      </Heading>
      <Heading fontSize={4} fontWeight="medium" mb={2}>
        Contact me
      </Heading>
      <Box mb={4}>
        <MailTo href="mailto:tim@tvl.io">tim@tvl.io</MailTo>
      </Box>
      {/* <ContactForm /> */}
    </Box>
  </Layout>
)

export default Contacts
