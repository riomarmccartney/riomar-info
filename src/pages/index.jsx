import React from 'react'
import Layout from '../components/layout'
import Nav from "../components/nav"

const IndexPage = () => {
    return (
        <Layout>
            <navigationException className="md:absolute"><Nav /></navigationException>
            <section className="pt-0 md:pt-4 pb-4 grid col-gap-2 md:col-gap-4 row-gap-8 md:row-gap-4 grid-cols-12">
                <intro className="col-start-1 col-end-13 md:col-end-6">
                    Riomar McCartney is a British Japanese designer & visual artist based in Tokyo, Japan. 
                    His work focuses on meeting expression, interaction design, and engineering together through product design, graphic communications, and media arts. 
                </intro>
                <intro className="col-start-1 col-end-13 md:col-end-6">
                    He is Co-Founder of upcoming.studio, a design studio founded with his partner in crime, Cyrus Korn. Before co-founding upcoming.studio, Riomar worked as Chief Design Officer for ookami.tokyo, designing Player!, and worked independently as a product designer for various creative agencies as well as technology companies, with work recognized by Forbes Japan, Good Design Awards and Apple App Store.
                </intro>
            </section>
            
        </Layout>
    )
}

export default IndexPage
