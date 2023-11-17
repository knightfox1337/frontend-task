export const cleanData = (data) => {
    // defining cleaned image data
    const imgCaption = data.edge_media_to_caption.edges[0].node.text
    const imgUrl = data.display_url
    // defining cleaned owner data
    const ownerName = data.owner.username
    const ownerImg = data.owner.profile_pic_url
    const ownerLocation = data.location.name
    // defining post like data
    const viewerHasLiked = data.viewer_has_liked
    const numOfLikes = data.edge_media_preview_like.count
    const datePosted = data.taken_at_timestamp
    // defining post comments
    const comments = data.edge_media_to_comment.edges

    return {
        imgData: {
            imgCaption,
            imgUrl
        },
        ownerData: {
            ownerName,
            ownerImg,
            ownerLocation
        },
        postLikeData: {
            viewerHasLiked,
            numOfLikes,
            datePosted
        },
        commentData: {
            comments
        }
    }
}