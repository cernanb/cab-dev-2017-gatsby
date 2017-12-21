import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const Header = () =>
  <div
    style={{
      marginBottom: '1rem'
    }}
  >
    <div
      style={{
        margin: '0 auto',
        padding: '1.45rem 1.0875rem'
      }}
    >
      <h1
        style={{
          margin: 0,
          display: 'inline-block'
        }}
      >
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          CaB
        </Link>
      </h1>
      <Link
        to="/skills"
        style={{
          color: 'white',
          textDecoration: 'none',
          float: 'right'
        }}
      >
        Skills
      </Link>
    </div>
  </div>

const TemplateWrapper = ({ children }) =>
  <div
    style={{
      height: '100vh'
    }}
  >
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' }
      ]}
    />
    <Header />
    <div
      style={{
        margin: '0 auto',
        position: 'relative',
        width: '1300px',
        minHeight: '100%',
        maxWidth: '75%',
        boxSizing: 'border-box'
      }}
    >
      {children()}
    </div>
  </div>

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
