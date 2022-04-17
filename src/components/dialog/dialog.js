import React from 'react'
import PropTypes from 'prop-types'

function Dialog({ children, title, isOpen, onClose }) {
  return (
    <div>Dialog</div>
  )
}

Dialog.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}


export default Dialog