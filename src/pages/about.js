import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'

import Layout from '../components/Layout'
import DisplayImage from './../assets/images/3.jpg'
import Avatar from './../assets/images/2.jpg'





class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )

    return (
      <Layout>
        <Helmet>
          <title>{siteTitle}</title>
          <meta name="description" content={siteDescription} />
        </Helmet>
     <h2>About me!</h2>
     <br></br>

     <div className='co'> <img className="avatar"src={Avatar} alt={siteTitle} /> </div>
      <br></br>
        <p>
        I'm Tom, a recent graduate from the University of Washington majoring in Geography with a minor in Informatics.
        I am passionate about creating things that look either pretty, simple, and functional. I believe things should look visually appealing while also holding on to the concept of simplicity.
        </p>
        <p> I am currently seeking work! I'm focused in full-stack development, and if there's anything I don't know, I will learn.</p>
        <p> Aside from coding I care about things such as diversity, inclusion, education, music, geography, community, tea, and cats.</p>
        <p>My hobbies include working out, building keyboards for others, cooking, hiking, and petting cats!🐈 </p>


      </Layout>
    );
  }
}

export default About;

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
