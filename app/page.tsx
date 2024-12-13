import { Metadata } from 'next'
import Image from 'next/image'

export default function Home() {
  const links = [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/riomar.mccartney/',
    },
    {
      name: 'Are.na',
      url: 'https://www.are.na/riomar-mccartney',
    },
    {
      name: 'Email',
      url: 'mailto:riomar@riomar.studio',
    },
  ]
  return (
    <main className="grid grid-flow-row-dense grid-cols-1 gap-4 p-2 text-sm min-h-dvh">
      <div>
        <h1>Riomar McCartney — マッカートニー龍馬</h1>
        <p>Designer, Programmer, and Art Director based in Tokyo.</p>
      </div>
      <div>
        <p className="max-w-prose">
          Riomar is a was born in Japan in 1996. Growing up, he was immersed in
          various genres and lifestyles due to his musician and artist-oriented
          parents. This exposure to different mediums and cultures across Japan
          and Europe allowed him to develop a unique taste for blending
          different genres and perspectives. This ability to craft distinctive
          directions and ideas has enabled him to stand out in his expression
          and communication through design and direction.
          <br />
          <br />
          Currently, He is working on{' '}
          <a className="underline" href="https://upcoming.studio">
            upcoming.studio
          </a>
          , a design collective that partners with artists and brands to
          approach ideas through graphics, editorial, and art direction.
          <br />
          <br />
          Links:{' '}
          {links.map((link, index) => (
            <>
              <a key={link.name} className="underline" href={link.url}>
                {link.name}
              </a>
              {index < links.length - 1 && ', '}
            </>
          ))}
        </p>
      </div>

      <div className="relative row-span-3">
        <Image
          src="/riomar-mccartney-desk.jpg"
          alt="Riomar's desk"
          sizes="(max-width: 768px) 100vw, 50vw"
          fill={true}
          className="object-contain object-left-bottom"
        />
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Riomar McCartney',
  description:
    'Riomar McCartney (マッカートニー 龍馬) is a designer, programmer, and art director based in Tokyo. He is founder of upcoming.studio',
}
