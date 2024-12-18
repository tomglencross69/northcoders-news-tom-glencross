import dateConversion from "../utils/dateConversion"
import { deleteArticleComment } from "../api"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function CommentCard ({currentComment}) {
    const date = dateConversion(currentComment.created_at)
    const [buttonDisabled, setButtonDisabled] = useState(false)
    const {user} = useContext(UserContext)
    const [error, setError] = useState(null)
    const [showDeletedMessage, setShowDeletedMessage] = useState(null)

    const deletedMessage = () => {
        setShowDeletedMessage(true)
    }

    const disableDeleteButton = () => {
setButtonDisabled(true)
}

const handleDeleteClick = () => {
    deleteArticleComment(currentComment.comment_id)
    .then(()=>{
        disableDeleteButton()
        deletedMessage()
    })
    .catch((err)=>{
        setError("Comment deletion not successful (˃̣̣̥ᯅ˂̣̣̥) please try again!")
    })
}
    
    return (
        <div className="commment-card-parent-component">
        <li className="comment-card-component">
      <p className="component-label">comment card component</p>
      <div className="comment-card-content">
            <p id="comment-card-author">by {currentComment.author}</p>
            <p id="comment-card-date">{date} </p>
            <p id="comment-card-vote-count">Votes ({currentComment.votes})</p>
            <p id="comment-card-body">{currentComment.body}</p>
            </div>
            {currentComment.author === user ? <button onClick={handleDeleteClick} disabled={buttonDisabled}>Delete Comment</button> : null}
            {error ? <p>{error} </p> : null }
            {showDeletedMessage ? <p>Comment successfully deleted</p> : null}
    </li>
    </div>
    )

}