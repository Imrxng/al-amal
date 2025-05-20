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
        <HomeHadieth padding={'5rem 3rem'} containerHeight={'35rem'} hadieth={'Iedere keer dat iemand naar de moskee gaat, zal Allah zal voor hem een plaats gereedmaken in het Paradijs.'} overgeleverd={'Overgeleverd door Al-Bukhari en Muslim'} />
        <Footer />
    </div>
  )
}

export default Index;