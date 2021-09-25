/* eslint-disable jsx-a11y/alt-text */

import Image, { ImageProps } from 'next/image'
import clsx from 'clsx'
import { useState } from 'react'

interface MyProps extends ImageProps {
  src: any,
}

export const NextImage = ({ src, ...rest }: MyProps) => {
  const [visiblity, setVisibility] = useState(false)
  const imageSrcId = src?.match(/riomar-info\/(.*?)\?/)

  const myLoader = ({ src, width, quality }: any) => {
    return `https://images.prismic.io/riomar-info/${src}?w=${width}&q=${quality || 75}&fm=auto`
  }

  return (
    <Image 
      className={clsx(visiblity ? 'opacity-100' : 'opacity-0', 'transition-opacity duration-500 delay-300')}
      loader={myLoader}
      src={imageSrcId[1]}
      layout="responsive"
      onLoad={() => setVisibility(true)} 
      {...rest}
    />
  )
}