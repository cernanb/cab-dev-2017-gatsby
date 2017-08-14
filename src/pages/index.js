import React from 'react'
import Link from 'gatsby-link'
import Typewriter from '../components/Typewriter'

const IndexPage = () => (
  <div >
    <div style={{
      position: 'absolute',
      left: 0,
      top: '20%',
      zIndex: 10000,
      fontSize: '40px',
      fontSize: '2.5rem',
      width: '60%',
      color: 'white',
    }}>
      <h1>Hi people</h1>
      <h2 style={{ color: '#6E7783' }}>My name is <span style={{ color: 'white' }}>Cernan Bernardo</span> and I <Typewriter /></h2>
    </div>
  </div>
)

export default IndexPage
