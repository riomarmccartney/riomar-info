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
        <p>Designer, Art Director, and Programmer based in Tokyo.</p>
      </div>
      <div>
        <p className="max-w-prose">
          <br />
          Born in Kochi, Japan in 1996, raised in France, now based in Tokyo. I
          consider myself a designer at heart, working across languages and
          media and moving between roles: graphic design, art direction,
          editing, programming, and organising events. I trust intuition over a
          fixed process, love to sweat the details and embrace random and chaos,
          like playing an improvised session, solo or together.
          <br />
          <br />
          I&rsquo;m co-founder and running{' '}
          <a className="underline" href="https://upcoming.studio">
            upcoming.studio
          </a>
          , a design studio and publishing practice. We work with artists and
          brands, initiate our own projects, and challenge conventional
          frameworks and culture.
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
          Last updated: Aug 20, 2026
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
    'Riomar McCartney (マッカートニー龍馬) is a designer, art director, and programmer based in Tokyo, and co-founder of upcoming.studio, a design studio and publishing practice.',
}
