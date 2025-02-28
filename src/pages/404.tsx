import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LinkButton from '@/components/LinkButton';
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <Header />
        <div id='not-found'>
            <p>Pagina niet gevonden</p>
            <h1 style={{}}>Error 404 <span>.</span></h1>
            <p id='not-found-text'>De pagina die u zoekt bestaat niet of is verplaatst.</p>
            <LinkButton href='/' content='Terug naar home' width={200} />
        </div>
        <Footer />
    </div>
  )
}

export default NotFound;