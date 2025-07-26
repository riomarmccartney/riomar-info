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
      url: 'mailto:hello@riomar.studio',
    },
  ]
  return (
    <main className="grid grid-flow-row-dense grid-cols-1 gap-4 p-2 text-sm min-h-dvh">
      <div>
        <h1>
          Riomar McCartney —{' '}
          <span className="font-mincho">マッカートニー龍馬</span>
        </h1>
        <p>Designer, Programmer, and Art Director based in Tokyo.</p>
      </div>
      <div>
        <p className="max-w-prose">
          <br />I run{' '}
          <a className="underline" href="https://upcoming.studio">
            upcoming.studio
          </a>
          , a graphic design and publishing studio collabrating with artists and brands on graphics,
          editorial, and art direction.
          <br />
          <br />
          Find me on:{' '}
          {links.map((link, index) => (
            <>
              <a key={link.name} className="underline" href={link.url}>
                {link.name}
              </a>
              {index < links.length - 1 && ', '}
            </>
          ))}
          <br />
          <br />
          Last updated: Dec 26, 2024
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
