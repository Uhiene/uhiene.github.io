import React from 'react'
import Navbar from '../components/Header/Navbar'
import Hero from '../components/Hero/Hero'
import About from '../components/About'
import Layout from '../components/Layout/Layout'

const page = () => {
  return (
    <Layout>
        <Hero/>
        <About/>
    </Layout>
  )
}

export default page