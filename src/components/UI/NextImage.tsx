/* eslint-disable jsx-a11y/alt-text */

import Image, {ImageProps} from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'

export const NextImage = (props: ImageProps) => {
  const [visiblity, setVisibility] = useState(false)

  return (
    <Image 
      className={clsx(visiblity ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-500 delay-300')}
      onLoad={() => setVisibility(true)} 
      {...props}
    />
  )
}