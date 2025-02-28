import dynamic from 'next/dynamic';
import React from 'react'

const FormContact = () => {
    const DynamicMap = dynamic(() => import("@/components/Map"), { ssr: false });

  return (
    <div style={{minHeight: '700px', padding: '5rem 8rem 5rem 8rem', backgroundColor: '#f9f9f9'}}>
              <DynamicMap />
    </div>
  )
}

export default FormContact;