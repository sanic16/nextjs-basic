import Link from 'next/link'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function StoreLayout(props: Props) {
  return (

    <>
        <nav>
            <h3>Store Section</h3>
            <ul>
                <li><Link href={'/store/categories'}>Coffee</Link></li>
                <li><Link href={'/store/categories/computers'}>Juices</Link></li>
                <li><Link href={''}>desserts</Link></li>
            </ul>
        </nav>
        {props.children}
    </>
  )
}
