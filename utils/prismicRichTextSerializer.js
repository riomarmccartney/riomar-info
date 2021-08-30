import { Elements } from 'prismic-richtext'
import { nextLinkResolver } from './prismicHelpers'

const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key })
}

const htmlSerializer = (type, element, content, children, key) => {
  var props = {}

  switch (type) {
    // Add a class to paragraph elements
    case Elements.paragraph:
      props = { className: 'paragraph-class' }
      return React.createElement('p', propsWithUniqueKey(props, key), children)

    // Don't wrap images in a <p> tag
    case Elements.image:
      props = { src: element.url, alt: element.alt || '' }
      return React.createElement('img', propsWithUniqueKey(props, key))

    // Add a class to hyperlinks
    case Elements.hyperlink:
      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {}
      const relAttr = element.data.target ? { rel: 'noopener' } : {}
      props = Object.assign(
        {
          className: 'link-class',
          href: element.data.url || nextLinkResolver(element.data),
        },
        targetAttr,
        relAttr,
      )
      return React.createElement('a', propsWithUniqueKey(props, key), children)

    // Return null to stick with the default behavior
    default:
      return null
  }
}

export default htmlSerializer
