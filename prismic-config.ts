export const apiEndpoint = process.env.NEXT_PUBLIC_PRISMIC_API_URL
export const accessToken = process.env.NEXT_PUBLIC_PRISMIC_API_TOKEN

type docType = {
  type: string
  uid: string
}

export const linkResolver = (doc: docType) => {
  if (doc.type === 'note') {
    return `/note/${doc.uid}`
  }
  return '/'
}

// Additional helper function for Next/Link components
export const hrefResolver = (doc: docType) => {
  if (doc.type === 'note') {
    return '/note/[uid]'
  }
  return '/'
}