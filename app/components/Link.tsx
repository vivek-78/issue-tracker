import React from 'react'
import NextLink from 'next/link';
import { Link as RadixLink } from '@radix-ui/themes';

interface Props {
    href: string,
    children: string
}
function Link({href,children}:Props) {
  return (
    <NextLink href={href} className="text-violet-600 hover:underline" passHref legacyBehavior>
        {children}
    </NextLink>
  )
}

export default Link