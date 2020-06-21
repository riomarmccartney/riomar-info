import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import BioIntro from "../components/BioIntro"
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
        <Navigation hideName className="md:absolute md:static"/>

        <section alt="page" className="pt-0 md:pt-6 pb-4 grid md:grid-cols-12 col-gap-2 md:col-gap-4 row-gap-8 md:row-gap-4">
          <section alt="right" className="row-start-1 md:col-start-7 md:col-end-12 md:pt-32">
            <Img className="grid" fluid={data.file.childImageSharp.fluid} />
          </section>

          <section className="md:row-start-1 md:col-start-1 md:col-end-6">
              <BioIntro />
          </section>
        </section>
    </Layout>
  )
}
