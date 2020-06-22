import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import classNames from "classnames"
import Clock from "react-live-clock"

import Caption from "./Caption"

const Navigation = props => {
    const [links] = useState([
        {
            title: "Riomar McCartney",
            betweenPages: true,
            path: "/",
            className: classNames("col-start-1 md:col-start-1", (props.hideName && "block md:hidden"))
        },
        {
            title: "Contact",
            betweenPages: false,
            path: "mailto:contact@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A",
            className: "col-start-10 md:col-start-11",
        }
    ])

    return (
        <div className="w-full relative">
          <nav className={classNames(props.className, "grid grid-cols-12 grid-rows-1 col-gap-2 md:col-gap-4 whitespace-no-wrap w-full")}>
              <span className="col-start-7 md:col-start-8 row-start-1"><Clock format={"HH:mm"} timezone={"Asia/Tokyo"} /><Caption label="東京" /></span>

              {links.map(link => {
                return link.betweenPages ? (
                  <Link key={link.id} to={link.path} className={link.className}> {link.title}</Link>
                ) : (
                  <a key={link.id} href={link.path} className={classNames("link row-start-1", link.className)}> {link.title}</a>
                )
              })}
          </nav>
        </div>
    )
}

export default Navigation

Navigation.propTypes = {
  className: PropTypes.string,
}
