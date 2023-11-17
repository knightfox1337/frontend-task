import React from 'react'
import styles from './styles'

const Image = ({ imgData: { imgCaption, imgUrl } }) => {
  return (
    <img
      src={imgUrl}
      style={styles}
      alt={imgCaption}
    />
  )
}

export default Image
