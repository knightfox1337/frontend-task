import React from 'react'
import { cleanData } from './helpers'
import Image from './children/image'
import styles from './styles'
import LikeSection from './children/like_section'

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
        <LikeSection likeData={postLikeData} />
      </div>
    </main>
  )
}

export default App
