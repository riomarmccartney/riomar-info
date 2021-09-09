import { createElement } from 'react'
import { Elements } from 'prismic-richtext'
import { nextLinkResolver } from './prismicHelpers'
import Image from 'next/image'

const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

let targetAttr, relAttr

export const htmlSerializer = (type, element, content, children, key) => {
  var props = {}

  switch (type) {
  // Add a class to paragraph elements
  case Elements.paragraph:
    props = { className: 'paragraph-class' }
    return createElement('p', propsWithUniqueKey(props, key), children)

    // Don't wrap images in a <p> tag
  case Elements.image:
    props = { 
      src: element.url, 
      alt: element.alt, 
      height: element.dimensions.height, 
      width: element.dimensions.width 
    }
    
    return createElement(Image, propsWithUniqueKey(props, key))

    // Add a class to hyperlinks
  case Elements.hyperlink:
    targetAttr = element.data.target
      ? { target: element.data.target }
      : {}
    relAttr = element.data.target ? { rel: 'noopener' } : {}
    props = Object.assign(
      {
        className: 'transition-all duration-150 bg-transparent border-b border-gray-400 border-solid hover:bg-black hover:text-white hover:border-black',
        href: element.data.url || nextLinkResolver(element.data),
      },
      targetAttr,
      relAttr,
    )
    return createElement('a', propsWithUniqueKey(props, key), children)

    // Return null to stick with the default behavior
  default:
    return null
  }
}
