import React from 'react'
import visGrid from '../assets/temp-grid.png'
import Layout from '../components/layout'
import Nav from "../components/nav"

const IndexPage = () => {
    return (
        <Layout>
            <positionException className="md:absolute"><Nav/></positionException>
            <section className="pt-0 md:pt-6 pb-4 grid md:grid-cols-12 col-gap-2 md:col-gap-4 row-gap-8 md:row-gap-4">
                <img className="md:row-start-1 md:col-start-7 md:col-end-12 md:pt-32"  src={visGrid} alt="Logo" />
                <section className="md:row-start-1 md:col-start-1 md:col-end-6">
                    <section className="grid row-gap-4 pb-8 md:pb-12">
                        <p>Riomar McCartney is a British Japanese designer & visual artist based in Tokyo, Japan. His work consists of combining expression, interaction, and engineering through the mediums of product designs, graphics, and media arts.</p>
                        <p>He is Co-Founder of <a href="https://upcoming.studio" target="_blank" rel="noopener noreferrer" className="hover:opacity-50">UPCOMING.STUDIO</a>, a design studio founded with his partner in crime, Cyrus Korn. Before co-founding the studio, Riomar was a Design Lead at ookami.tokyo and part of the founding team, working on bringing sports teams, fans, and patrons together with Player!.</p>
                        <p>Working for various creative agencies as well as technology companies, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
                    </section>
                    <section className="grid row-gap-4 pb-8 md:pb-12">
                        <p>More information coming soon to the website...</p>
                    </section>
                    <section className="grid row-gap-4">
                        <h3 className="font-medium">Elsewhere online</h3>
                        <ul>
                            <li className="hover:opacity-50"><a href="https://are.na/riomar-mccartney" target="_blank" rel="noopener noreferrer">Are.na <span className="text-tiny">↗︎</span></a></li>
                            <li className="hover:opacity-50"><a href="http://instagram.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Instagram <span className="text-tiny">↗︎</span></a></li>
                            <li className="hover:opacity-50"><a href="http://twitter.com/riomarmccartney" target="_blank" rel="noopener noreferrer">Twitter <span className="text-tiny">↗︎</span></a></li>
                        </ul>
                    </section>
                </section>
            </section>
        </Layout>
    )
}

export default IndexPage
