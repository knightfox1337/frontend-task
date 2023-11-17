export const sanatiseComment = (comment) => {
    comment = comment.replace(/#(\S*)/g, '<a href="https://www.instagram.com/explore/tags/$1" style="text-decoration: none; color: blue;" target="_blank" rel="noreferrer">#$1</a>')
    comment = comment.replace(/@(\S*)/g, '<a href="https://www.instagram.com//$1" style="text-decoration: none; color: blue;" target="_blank" rel="noreferrer">@$1</a>')
    return comment
}