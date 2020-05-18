import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import Layout from "../components/layout"
import Nav from "../components/nav"
import SEO from "../components/SEO"
import Img from "gatsby-image"


export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "grid.png" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
        <SEO />
        <Nav coverDesign/>
        <section className="pt-0 md:pt-6 pb-4 grid md:grid-cols-12 col-gap-2 md:col-gap-4 row-gap-8 md:row-gap-4">
            <section className="md:row-start-1 md:col-start-7 md:col-end-12 md:pt-32">
              <Img className="grid" fluid={data.file.childImageSharp.fluid} />
            </section>

            <section className="md:row-start-1 md:col-start-1 md:col-end-6">
                <section className="grid row-gap-4 pb-8 md:pb-12">
                    <p>Riomar McCartney is a British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphic design, and media arts.</p>
                    <p>Riomar is the co-founder of <OutboundLink href="https://upcoming.studio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">upcoming.studio</OutboundLink> with his partner-in-crime, <OutboundLink href="https://cyruskorn.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">Cyrus Korn</OutboundLink>. Before establishing upcoming.studio, Riomar was part of the founding team and the Design Lead at <OutboundLink href="https://ookami.tokyo" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">ookami.tokyo</OutboundLink>, working on connecting teams, players, and patrons with the sports app "Player!".</p>
                    <p>Working for various creative agencies as well as technology companies, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
                </section>
                <section className="grid row-gap-4 pb-8 md:pb-12">
                    <p>Stay tuned for more coming soon.</p>
                </section>
                <section className="grid row-gap-4">
                    <h3 className="font-medium">Elsewhere online</h3>
                    <ul>
                        <li className="hover:opacity-50"><OutboundLink href="https://are.na/riomar-mccartney" target="_blank" rel="noopener noreferrer">Are.na <span className="text-tiny">↗︎</span></OutboundLink></li>
                        <li className="hover:opacity-50"><OutboundLink href="http://instagram.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Instagram <span className="text-tiny">↗︎</span></OutboundLink></li>
                        <li className="hover:opacity-50"><OutboundLink href="http://twitter.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Twitter <span className="text-tiny">↗︎</span></OutboundLink></li>
                    </ul>
                </section>
            </section>
        </section>
    </Layout>
  )
}
