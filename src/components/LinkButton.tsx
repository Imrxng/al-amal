import Link from 'next/link';
import React from 'react'

interface LinkButtonProps {
    href: string;
    content: string;
    width?: number;
}

const LinkButton = ({href, content, width} : LinkButtonProps) => {
  return (
    <Link href={href} className="button" style={{width: width ? `${width}px` : '150px',  padding: 20}}>{content}</Link>
  )
}

export default LinkButton;