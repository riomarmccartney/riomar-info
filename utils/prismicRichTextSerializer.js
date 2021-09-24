import { createElement } from 'react'
import { Elements } from 'prismic-richtext'
import { nextLinkResolver } from './prismicHelpers'
import { NextImage } from 'src/components/UI/NextImage'
import { Hyperlink } from 'src/components/UI/Hyperlink'


const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

export const htmlSerializer = (type, element, content, children, key) => {
  var props = {}

  switch (type) {
  // Add a class to paragraph elements
  case Elements.paragraph:
    props = { className: 'whitespace-pre-wrap' }
    return createElement('p', propsWithUniqueKey(props, key), children)

    // Don't wrap images in a <p> tag
  case Elements.image:
    props = { 
      src: element.url, 
      alt: element.alt, 
      height: element.dimensions.height, 
      width: element.dimensions.width,
    }
    
    return <NextImage {...propsWithUniqueKey(props, key)} />

  case Elements.hyperlink:
    props = {
      className: 'transition-all duration-150 bg-transparent border-b border-gray-400 border-solid hover:bg-black hover:text-white hover:border-black',
      href: element.data.url || nextLinkResolver(element.data),
      target: element.data.target || '',
      rel:element.data.target ? 'noopener' : ''
    }

    return <Hyperlink {...propsWithUniqueKey(props, key)}>{children}</Hyperlink>

    // Return null to stick with the default behavior
  default:
    return null
  }
}
