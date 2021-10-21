import React, { ReactElement } from 'react'
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render():ReactElement {
    return (
      <Html className="bg-gray-100" lang="en">
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Inter&display=swap'
            rel='preload'
            as='font'
            type='font/woff2'
            crossOrigin='true'
          />

          <link 
            rel="icon" 
            type="image/png" 
            href="/favicon.png"   
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