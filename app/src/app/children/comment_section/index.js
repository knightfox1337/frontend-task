import styles from './styles'
import Comment from './children/comment'
import { sanatiseComment } from './helper'

const CommentSection = ({commentData: { comments }, postOwner, postComment}) => {
    const formattedPostCommentString = sanatiseComment(postComment)
    return (
        <div style={styles.commentWrapper}>
            <ul style={styles.commentSection}>
                <Comment commentString={formattedPostCommentString} usernameString={postOwner} hideLike={true} />
                {comments.map(comment => {
                    const formattedCommentString = sanatiseComment(comment.node.text)
                    return (
                        <Comment commentString={formattedCommentString} usernameString={comment.node.owner.username} key={comment.node.id} />
                    )
                })}
            </ul>
        </div>
    )
}

export default CommentSection