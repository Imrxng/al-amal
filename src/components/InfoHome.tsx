import React from 'react'
import { FaDonate, FaLongArrowAltRight, FaQuran } from "react-icons/fa";
import Link from 'next/link';

const InfoHome = () => {
  return (
    <>
        <div id='info-home-container'>
        <div className='info-home'>
            <div className='info-home-text'>
                <h3>Wat kunt u doen?</h3>
                <h2>Bijdragen</h2>
                <Link href={'/doneren'} className='button-white-bg'>DONEREN &nbsp;<FaLongArrowAltRight /></Link>
            </div>
            <FaDonate className='icon'/>
        </div>
        <div className='info-home'>
            <div className='info-home-text'>
                <h3>Leeftijd van 6-16 jaar</h3>
                <h2>Workshop taal en cultuur</h2>
                <Link href={'/onderwijs'} className='button-white-bg'>LEES MEER &nbsp;<FaLongArrowAltRight /></Link>

            </div>
            <FaQuran className='icon'/>
        </div>
    </div>
    </>
  )
}

export default InfoHome;