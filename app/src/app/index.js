import React from 'react'
import { cleanData } from './helpers'
import Image from './children/image'
import LikeButton from './children/like_button'
import styles from './styles'

const App = ({ data }) => {
  const {imgData, ownerData, postLikeData, commentData} = cleanData(data)

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image imgData={imgData} />
      </div>
      <div style={styles.text}>
        <p>User block</p>
        <p>Comments block</p>
        <LikeButton />
      </div>
    </main>
  )
}

export default App
