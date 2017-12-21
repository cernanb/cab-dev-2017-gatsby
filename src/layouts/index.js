import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'
import Navbar from '../components/Navbar'

const Header = () =>
  <div
    style={{
      marginBottom: '1rem'
    }}
  >
    <Navbar />
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
