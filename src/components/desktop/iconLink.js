import * as React from 'react'
import { Link } from 'gatsby'
import { contentLinkGroup, contentLinkDescription } from './iconLink.module.scss'
import { PropTypes } from 'prop-types'

const IconLink = ({ link, imagePath, description }) => {
  return (<Link className={contentLinkGroup} to={link}>
    <img src={imagePath} alt={''}/>
      <p className={contentLinkDescription}>{description}</p>
  </Link>)
}

IconLink.propTypes = {
  link: PropTypes.node.isRequired,
  imagePath: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired
}
export default IconLink
