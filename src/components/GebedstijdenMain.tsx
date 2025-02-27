import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import LinkButton from './LinkButton';

const GebedstijdenMain = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div id='gebedstijden-container' style={{ paddingTop: isScrolled ? '10rem' : '14rem' }}>
        <div id='gebedstijden-intro'>
          <h1>Gebedstijden ECC De Hoop</h1>
          <p>Hieronder vind u onze gebedstijden. U kunt deze gebedstijden downloaden en afprinten!</p>
        </div>

      </div>
      <div id='gebedstijden-content'>
        <div id='gebedstijden-widget'>
          <h2>Vandaag</h2>
          <iframe src="https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0" frameBorder="0" scrolling="no" style={{width: '100%', height: '550px', border: 'none', overflow: 'hidden'}} className="widget"></iframe>
        </div>
        <div id='gebedstijden-download'>
          <h2>Deze maand</h2>
          <Link href='/downloads/1.pdf' target='_blank' >
            Download gebedstijden
          </Link>
        </div>
      </div>
    </>
  )
}

export default GebedstijdenMain;