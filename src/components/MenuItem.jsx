import Link from 'next/link'
import React from 'react'

export default function MenuItem({title, address, Icon}) {
  return (
    <Link href={address}>
        <Icon />
        <p>{title}</p>
    </Link>
  );
}
