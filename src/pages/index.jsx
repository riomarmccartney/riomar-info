import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/Layout"
import Navigation from "../components/Navigation"
import BioIntro from "../components/BioIntro"
import SEO from "../components/SEO"

import Img from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(SharpQuery)

  return (
    <Layout showGrid>
        <SEO />
        <Navigation hideName className="mb-8 md:mb-0 md:absolute"/>

        <div className="grid md:grid-cols-12 col-gap-2 md:col-gap-4">
          <section alt="right" className="row-start-1 md:col-start-7 md:col-end-12 mb-8 md:mb-0 md:py-32">
            <Img className="grid" fluid={data.file.childImageSharp.fluid} />
          </section>

          <section className="md:row-start-1 md:col-start-1 md:col-end-6">
              <BioIntro className="grid row-gap-4 md:row-gap-8" />

              <div className="font-medium mt-12 mb-2">Archive directory</div>

              <div className="pl-8">
                <div>
                  <span className="text-left">ookami / Visual identity</span>
                  <span className="text-left text-xs ml-1"><span className="text-small">[</span>NOV 2013<span className="text-small">]</span></span>
                </div>
              </div>
          </section>
        </div>
    </Layout>
  )
}

export default Index

const SharpQuery = graphql`
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
`
