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
                    <p><span className="hidden md:inline-block">Riomar McCartney is a </span> British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphic design, and media arts.</p>
                    <p>He is co-founder of <OutboundLink href="https://upcoming.studio" target="_blank" rel="noopener noreferrer" className="linkin-hero">upcoming.studio</OutboundLink> with his partner-in-crime, <OutboundLink href="https://cyruskorn.com" target="_blank" rel="noopener noreferrer" className="linkin-text">Cyrus Korn</OutboundLink>. Before establishing upcoming.studio, Riomar was part of the founding team and the design lead at <OutboundLink href="https://ookami.tokyo" target="_blank" rel="noopener noreferrer" className="linkin-hero">ookami.tokyo</OutboundLink>, working on connecting teams, players, and patrons with the sports app <OutboundLink href="https://web.playerapp.tokyo" target="_blank" rel="noopener noreferrer" className="linkin-text">Player!</OutboundLink>. Working for various creative agencies as well as technology companies with over six years of experience, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
                    <p className="mt-16">Curriculum vitae & portfolio available upon request. Please feel free to contact me if you are interested in collaborating, working on something new or for any more additional information.</p>
                    <ul>
                        <li className="link"><a href="mailto:business@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A">Email: business@riomar.co</a></li>
                        <li className="link"><a href="tel:+8170-2665-2366">Phone: +81 (0) 70 2665 2366</a></li>
                        <li className="link "><OutboundLink href="http://instagram.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Instagram: @riomarmccartney</OutboundLink></li>
                        <li className="link"><OutboundLink href="http://twitter.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Twitter: @riomarmccartney</OutboundLink></li>
                        <li className="link"><OutboundLink href="https://are.na/riomar-mccartney" target="_blank" rel="noopener noreferrer">Are.na: riomar-mccartney</OutboundLink></li>
                    </ul>
                    <p className="mt-16">Stay tuned for more coming soon.</p>
                </section>

                © 2020
            </section>
        </section>
    </Layout>
  )
}
