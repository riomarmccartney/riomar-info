import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Clock from 'react-live-clock'


const Nav = () => {
    const [links] = useState([
        {
            title: 'Riomar McCartney',
            betweenPages: true,
            path: '/',
            style: 'col-start-1 md:col-start-1 row-start-1',
            id: 1
        },
        {
            title: 'Vis Bank',
            betweenPages: true,
            path: '/visualbank/',
            style: 'col-start-10 md:col-start-11 row-start-1',
            id: 2
        },
        {
            title: 'Contact',
            betweenPages: false,
            path: 'mailto:contact@riomar.co?subject=Question%20about%20your%20work%20/%20Quote%20request%20/%20Work%20proposal&body=Hi%20Riomar,%0D%0A%0D%0A',
            style: 'col-start-10 md:col-start-11 row-start-2',
            id: 3
        }
    ]);

    return (
        <nav className="py-4 grid grid-cols-12 grid-rows-2 col-gap-2 md:col-gap-4 whitespace-no-wrap">
            <span className="col-start-7 md:col-start-8 row-start-1"><Clock format={'HH:mm'} timezone={'Asia/Tokyo'} /><span style={{fontSize: '9px'}}> [東京] </span></span>
            {links.map(link => {
                if (link.betweenPages) {
                    return ( <Link key={link.id} to={link.path} className={link.style}>{link.title}</Link> )
                } else {
                    return ( <a key={link.id} href={link.path} className={link.style}>{link.title}</a> )
                }
            })}
            
        </nav>
    )
}

Nav.propTypes = {
    children: PropTypes.element.isRequired
}

export default Nav