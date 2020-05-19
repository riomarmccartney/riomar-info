import React, { useState } from "react"
import { OutboundLink } from "gatsby-plugin-google-analytics"


const Information = () => {
    const [showInformation, setShowInformation] = useState(false);
    const [contacts] = useState([
      {
          Type: "Email",
          Name: "business@riomar.co",
          analytics: false,
          path: "mailto:business@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A",
          id: 1
      },
      {
          Type: "Mobile",
          Name: "+81 (0) 70 2665 2366",
          analytics: false,
          path: "tel:+8170-2665-2366",
          id: 2
      },
      {
          Type: "Instagram",
          Name: "@riomarmccartney",
          analytics: true,
          path: "https://instagram.com/riomarmccartney",
          id: 3
      },
      {
          Type: "Twitter",
          Name: "@riomarmccartney",
          analytics: true,
          path: "https://twitter.com/riomarmccartney",
          id: 4
      },
      {
          Type: "Are.na",
          Name: "riomar-mccartney",
          analytics: true,
          path: "https://are.na/riomar-mccartney",
          id: 5
      }
    ]);
    return (
      <section className="grid row-gap-4 pb-8 md:pb-12">
        <p><span className="hidden md:inline-block">Riomar McCartney is a </span> British Japanese designer and visual artist based in Tokyo, Japan. His work combines expression, interaction, and engineering explored through product design, graphics, and media arts.</p>

        {showInformation ?
          <>
            <p>He is co-founder of <OutboundLink href="https://upcoming.studio" target="_blank" rel="noopener noreferrer" className="link-underline">upcoming.studio</OutboundLink> along with his partner-in-crime, <OutboundLink href="https://cyruskorn.com" target="_blank" rel="noopener noreferrer" className="link-italic">Cyrus Korn</OutboundLink>. Before establishing upcoming.studio, Riomar was part of the founding team and Design Lead at <OutboundLink href="https://ookami.tokyo" target="_blank" rel="noopener noreferrer" className="link-underline">ookami.tokyo</OutboundLink>, working on strategy, processes, and the product connecting sports teams and patrons with the sports app <OutboundLink href="https://web.playerapp.tokyo" target="_blank" rel="noopener noreferrer" className="link-italic">Player!</OutboundLink>. <br/> With experience working for various creative agencies as well as ventures, his work has been recognized by press and awards like Forbes Japan, Good Design Awards, and Apple App Store.</p>
            <br/>
            <p> Curriculum vitae & portfolio available upon request.<br />Please feel free to contact me if you are interested in collaborating, working on something new or for any more additional information.</p>
            <ul>
                {contacts.map(contact => {
                  return contact.analytics ? (
                    <li className="link"><OutboundLink key={contact.id} href={contact.path} target="_blank" rel="noopener noreferrer">{contact.Type}: {contact.Name}</OutboundLink></li>
                  ) : (
                    <li className="link"><a key={contact.id} href={contact.path} target="_blank" rel="noopener noreferrer">{contact.Type}: {contact.Name}</a></li>
                  )
                })}
            </ul>
          </>
        : <button className="link-underline text-left text-small" onClick={() => setShowInformation(!showInformation)}>Read more ↓</button>}

      </section>
    )
}

export default Information
