import Link from 'next/link'
import React from 'react'

interface ContainerTitleProps {
    title: string;
    link: string;
}

const ContainerTitle = ( {title, link} : ContainerTitleProps ) => {
    return (
        <div className='container-title'>
            <h1>{title}</h1>
            <div id='links-back'>
                <Link href={'/'}>Home</Link>
                <p>&#8594;</p>
                <Link href={link}>{title}</Link>
            </div>
        </div>
    )
}

export default ContainerTitle