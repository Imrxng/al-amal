import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HomeHadieth from '@/components/HomeHadieth';
import InfoHome from '@/components/InfoHome';
import Intro from '@/components/Intro';
import OverOns from '@/components/OverOns';
import React from 'react'

const Index = () => {
  return (
    <div>
        <Header />
        <Intro />
        <OverOns />
        <InfoHome />
        <HomeHadieth />
        <Footer />
    </div>
  )
}

export default Index;