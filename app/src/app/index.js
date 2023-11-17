import React from 'react'
import { cleanData } from './helpers'
import Image from './children/image'
import styles from './styles'
import UserBlock from './children/user_block'
import LikeSection from './children/like_section'
import CommentSection from './children/comment_section'

const App = ({ data }) => {
  const {imgData, ownerData, postLikeData, commentData} = cleanData(data)

  return (
    <main style={styles.main}>
      <div style={styles.image}>
        <Image imgData={imgData} />
      </div>
      <div style={styles.text}>
        <UserBlock ownerData={ownerData} />
        <CommentSection commentData={commentData} postOwner={ownerData.ownerName} postComment={imgData.imgCaption} />
        <LikeSection likeData={postLikeData} />
      </div>
    </main>
  )
}

export default App
