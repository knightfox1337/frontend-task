import { useState } from 'react'
import styles from './styles'
import LikeButton from '../../../like_button'

const Comment = ({ commentString, usernameString, userLiked, hideLike }) => {
  const [userHasLiked, setUserHasLiked] = useState(userLiked)
  const [likeHidden] = useState(hideLike)
  const handleCommentLikeButtonClicked = () => {
    setUserHasLiked(!userHasLiked)
  }

  return (
    <li style={styles.commentWrap}>
      <span style={styles.commentTextWrap}>
        <a href={`https://instagram.com/${usernameString}`} target='_blank' rel='noreferrer' style={styles.username}>{usernameString}</a>
        <p dangerouslySetInnerHTML={{ __html: commentString }} style={styles.comment} />
      </span>
      {likeHidden ?? <LikeButton size={14} likeButtonClicked={handleCommentLikeButtonClicked} isLiked={userHasLiked} />}
    </li>
  )
}

export default Comment
