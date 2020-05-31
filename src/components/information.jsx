import React, { useState } from "react"
import { StaticQuery, graphql } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"


const Information = () => {
    const [showInformation, setShowInformation] = useState(false);
    return (
      <StaticQuery
        query={query}
        render={data => (
          <section className="grid row-gap-4">
            <p><span className="hidden md:inline-block">Riomar McCartney is a </span> British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphics, and media arts.</p>

            {showInformation ?
              <>
                <p>He is co-founder of <OutboundLink href="https://upcoming.studio" target="_blank" rel="noopener noreferrer" className="link-underline">upcoming.studio</OutboundLink> along with his partner-in-crime, <OutboundLink href="https://cyruskorn.com" target="_blank" rel="noopener noreferrer" className="link-italic">Cyrus Korn</OutboundLink>. Before establishing upcoming.studio, Riomar was part of the founding team and Design Lead at <OutboundLink href="https://ookami.tokyo" target="_blank" rel="noopener noreferrer" className="link-underline">ookami.tokyo</OutboundLink>, working on strategy, processes, and the product connecting sports teams and patrons with the sports app <OutboundLink href="https://web.playerapp.tokyo" target="_blank" rel="noopener noreferrer" className="link-italic">Player!</OutboundLink>. <br/> With experience working for various creative agencies as well as ventures, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
                <br/>
                <p> Curriculum vitae & portfolio available upon request.<br />Please feel free to contact me if you are interested in collaborating, working on something new or for any more additional information.</p>
                <ul className="pl-8">
                    {data.site.siteMetadata.connect.map((connect) => {
                      return connect.analytics ? (
                        <li className="link"><OutboundLink key={connect.id} href={connect.path} target="_blank" rel="noopener noreferrer">{connect.type} ╱ {connect.userName}</OutboundLink></li>
                      ) : (
                        <li className="link"><a key={connect.id} href={connect.path} target="_blank" rel="noopener noreferrer">{connect.type} ╱ {connect.userName}</a></li>
                      )
                    })}
                </ul>
              </>
            : <button className="link-underline text-left text-small" onClick={() => setShowInformation(!showInformation)}>Read more ↓</button>}

          </section>
        )}
      />
    )
}

export default Information

const query = graphql`
  query connect{
    site {
      siteMetadata {
        connect {
          type
          userName
          analytics
          path
          id
        }
      }
    }
  }
`
