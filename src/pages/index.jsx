import React from 'react'
import Layout from '../components/layout'
import Nav from "../components/nav"

const IndexPage = () => {
    return (
        <Layout>
            <positionException className="md:absolute"><Nav/></positionException>
            <section className="pt-0 md:pt-4 pb-4 grid md:grid-cols-12 col-gap-2 md:col-gap-4 row-gap-8 md:row-gap-4">
                <section className="md:row-start-1 md:col-start-7 md:col-end-13">
                    
                </section>
                <section className="md:row-start-1 md:col-start-1 md:col-end-6 grid row-gap-8 md:row-gap-4">
                <p>Riomar McCartney is a British Japanese designer & visual artist based in Tokyo, Japan. His work consists of combining stories, interaction, and engineering through the mediums of product designs, graphics, and media arts.</p>
                <p>He is Co-Founder of UPCOMING.STUDIO, a design studio founded with his partner in crime, Cyrus Korn. Before co-founding the studio, Riomar was a Design Lead at ookami.tokyo and part of the founding team, working on bringing sports teams, fans, and patrons together with Player!.</p>
                <p>Working for various creative agencies as well as technology companies, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
                </section>
            </section>
        </Layout>
    )
}

export default IndexPage
