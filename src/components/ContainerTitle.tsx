import Link from 'next/link'
import React from 'react'
import { FaChevronRight } from 'react-icons/fa6';

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
                <FaChevronRight />
                <Link href={link}>{title}</Link>
            </div>
        </div>
    )
}

export default ContainerTitle