import React from 'react'
import Layout from '../components/layout'
import AboutMeImage from '../components/about-me-image'
const AboutMePage = () => (
  <Layout>
    <section />
    <section
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 2fr',
        gridColumnGap: '20px',
        alignItems: 'center',
      }}
    >
      <AboutMeImage />
      <div>
        <h1 style={{ borderBottom: '1px solid white' }}>About Me.</h1>
        <div>
          I’m a passionate web developer and technology enthusiast with 4+ years
          of experience developing and designing web sites and applications. I
          love learning, which makes me right at home in the world of web and
          software development. Every year, every month even, there is something
          new to learn or utilize for growth and improvement.
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutMePage
