import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'
import '../styles/timeline.css'

export class Navbar extends Component {
  render() {
    return (
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          
        }}
      >
        <div
          style={{
            width: rhythm(24),
            maxWidth: 400,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            // style={{}}
          }}
        >
          <Link className='link home' to={'/'}>Home</Link>
          <Link  className='link portfolio' to={'/portfolio'}>Portfolio</Link>
          <Link   className='link about' to={'/about'}>About</Link>
          <Link  className='link contact' to={'/contact'}>Contact</Link>
        </div>
      </div>
    )
  }
}

export default Navbar
