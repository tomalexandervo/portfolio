import React, { Component } from 'react'
import { Link } from 'gatsby'

import { rhythm } from './../utils/typography'
import contactData from './../data/contact'

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
            
          }}
        >
          <Link className='link home' to={'/'}>Home</Link>
          <Link className='link portfolio' to={'/portfolio'}>Portfolio</Link>
          <Link className='link about' to={'/about'}>About</Link>
          <Link className='link contact' to={'/contact'}>Contact</Link>
          <a className="resume"target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1dhJjNOJaT5UMQTNoiC0ygXW4OJL1uw6ptrTnnnEnim4/edit?usp=sharing">Resume</a>
        </div>
      </div>
    )
  }
}

export default Navbar
