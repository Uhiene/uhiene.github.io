import React from 'react'
import ContactForm from '../components/ContactForm/ContactForm'
import Layout from '../components/Layout/Layout'

const Contact = () => {
  return (
    <Layout>
      <div className='h-screen'>
        <ContactForm />
      </div>
    </Layout>
  )
}

export default Contact