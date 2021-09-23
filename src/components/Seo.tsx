import Head from 'next/head'

type SeoTypes = {
  title?: string,
  description?: string,
  image?: string,
}

const name = 'Riomar McCartney'

export const Seo = ({ title, description, image }: SeoTypes) => {
  const seo = {
    title: title ? `${title} — Riomar McCartney` : name,
    description: description || 'マッカートニー 龍馬 ✹ Designer & Visual Artist. Co-founder of upcoming.studio. Currently based in Tokyo, Japan.',
    image: image || '/ogp.png',
  }

  return (
    <>
      <Head key={seo.title}>
        <title>{seo.title}</title>
        <meta name="title" content={seo.title} />
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />
      </Head>

      <Head key={seo.description}>
        <meta name="description" content={seo.description} />
        <meta property="og:description"content={seo.description} />
        <meta name="twitter:description" content={seo.description} />
      </Head>

      <Head key={seo.image}>
        <meta name="og:image" content={seo.image} />
        <meta name="twitter:image" content={seo.image} />
      </Head>

      <Head key="twitter">
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@riomarmccartney" />
        <meta name="twitter:creator" content="@riomarmccartney" />
      </Head>

      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={name} />
      </Head>
    </>
  )
}


