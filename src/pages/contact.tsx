import React from 'react'
import { Heading, Lead, Text } from 'rebass'
import ContactForm from '../components/ContactForm'
import Layout from '../components/Layout'

const Contacts: React.SFC = () => (
  <Layout>
    <Lead>ready to make something amazing?</Lead>
    <Heading>Contact</Heading>
    <Text>timvisuals@gmail.com</Text>
    <ContactForm />
  </Layout>
)

export default Contacts
