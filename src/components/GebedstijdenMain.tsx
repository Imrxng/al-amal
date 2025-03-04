import Link from 'next/link';
import React from 'react'

const GebedstijdenMain = () => {
  return (
    <>
      <div id='gebedstijden-container'>
        <div id='gebedstijden-intro'>
          <h1>Gebedstijden ECC De Hoop</h1>
          <p>Hieronder vind u onze gebedstijden. U kunt deze gebedstijden downloaden en afprinten!</p>
        </div>

      </div>
      <div id='gebedstijden-content'>
        <div id='gebedstijden-widget'>
          <h2>Vandaag</h2>
          <iframe src="https://mawaqit.net/nl/w/alamal-antwerpen?showOnly5PrayerTimes=0" frameBorder="0" scrolling="no" className="widget"></iframe>
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