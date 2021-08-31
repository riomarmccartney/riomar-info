import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { createResolver } from 'next-slicezone/resolver'


class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    
    /* In development, generate an sm-resolver.js file
    that will map slices to components */
    if (process.env.NODE_ENV === 'development') {
      await createResolver()
    }
    return { ...initialProps }
  }
  

  render():ReactElement {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Inter&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument