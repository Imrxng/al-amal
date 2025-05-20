import React from 'react'

interface HomeHadiethProps {
  containerHeight: string;
  hadieth: string;
  overgeleverd: string;
  padding: string;
}

const HomeHadieth = ({containerHeight, hadieth, overgeleverd, padding} : HomeHadiethProps ) => {
  return (
    <div id='container-al-aqsa' style={{height: containerHeight, padding: padding}}>
      <div id='image-al-aqsa'>
        <q>{hadieth}</q>
        <p>{overgeleverd}</p>
      </div>
    </div>
  )
}

export default HomeHadieth;