import {useState} from 'react'
import styles from './styles'
import LikeButton from '../like_button'
import Moment from 'moment'

const LikeSection = ({ likeData: { viewerHasLiked, numOfLikes, datePosted } }) => {
    const [likeCount, setLikeCount] = useState(numOfLikes)
    const [userHasLiked, setUserHasLiked] = useState(viewerHasLiked)
    const postedFormatted = Moment.unix(datePosted).fromNow()

    const handleLikeButtonClicked = () => {
        setUserHasLiked(!userHasLiked)
        const newLike = userHasLiked ? likeCount - 1 : likeCount + 1
        setLikeCount(newLike)
    }

    return (
        <>
            <div style={styles.likeSection}>
                <div style={styles.countSection}>
                    <p id="likes" style={styles.likes}>{likeCount.toLocaleString()} Likes</p>
                    <p style={styles.datePosted}>{postedFormatted}</p>
                </div>
                <LikeButton size={30} likeButtonClicked={handleLikeButtonClicked} isLiked={userHasLiked} />
            </div>
            
        </>
    )
}

export default LikeSection