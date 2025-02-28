import Footer from '@/components/Footer';
import FormContact from '@/components/FormContact';
import Header from '@/components/Header';
import IntroContact from '@/components/IntroContact';
import React from 'react'

const Contact = () => {

  return (
    <div>
        <Header />
        <IntroContact />
        <FormContact />
        <Footer />  
    </div>
  )
}

export default Contact;