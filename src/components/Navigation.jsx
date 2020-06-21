import React, { useState } from "react"
import { Link } from "gatsby"
import Clock from "react-live-clock"


const Nav = ({coverDesign}) => {
    const [links] = useState([
        {
            title: "Riomar McCartney",
            betweenPages: true,
            path: "/",
            style: `link col-start-1 md:col-start-1 row-start-1 ${coverDesign ? "md:hidden" : "md:block"}`,
            id: 1
        },
        /* {
            title: "Vis Bank",
            betweenPages: true,
            path: "/visualbank/",
            style: "col-start-10 md:col-start-11 row-start-1",
            id: 2
        }, */
        {
            title: "Contact",
            betweenPages: false,
            path: "mailto:contact@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A",
            style: "link col-start-10 md:col-start-11 row-start-1",
            id: 3
        }
    ]);
    return (
        <div className="w-full relative">
          <nav className={`py-6 grid grid-cols-12 grid-rows-2 col-gap-2 md:col-gap-4 whitespace-no-wrap w-full ${coverDesign ? "md:absolute" : "md:static"}`}>
              <span className="col-start-7 md:col-start-8 row-start-1"><Clock format={"HH:mm"} timezone={"Asia/Tokyo"} /><span className="text-small ml-1">[<span className="text-xs">東京</span>]</span></span>
              {links.map(link => {
                return link.betweenPages ? (
                  <Link key={link.id} to={link.path} className={link.style}> {link.title}</Link>
                ) : (
                  <a key={link.id} href={link.path} className={link.style}> {link.title}</a>
                )
              })}
          </nav>
        </div>
    )
}

export default Nav
