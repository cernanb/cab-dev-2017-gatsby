import React from 'react'
import Link from 'gatsby-link'

const Navbar = () =>
  <div
    style={{
      margin: '0 auto',
      padding: '1.45rem 1.0875rem',
      display: 'flex',
      justifyContent: 'space-between'
    }}
  >
    <h1 style={{ margin: 0, display: 'inline-block' }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
        CaB
      </Link>
    </h1>

    <Link to="/skills" style={{ color: 'white', textDecoration: 'none' }}>
      Skills
    </Link>
  </div>

export default Navbar
