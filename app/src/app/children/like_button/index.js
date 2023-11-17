import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/unliked_icon'
import styles from './styles'

const LikeButton = ({isLiked, likeButtonClicked, size}) => {
  return (
    <button id="postLike" onClick={likeButtonClicked} style={styles.likeButton} aria-label={`${isLiked ? 'You have already liked this' : 'Like this post'}`}>
      {isLiked ? <LikedIcon size={size} /> : <UnlikedIcon size={size} />}
    </button>
  )
}

export default LikeButton
