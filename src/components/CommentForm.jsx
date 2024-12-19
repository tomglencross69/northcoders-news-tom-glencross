import { postComment } from "../api"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"

export default function CommentForm ({article_id, setComments}) {
  const [enteredComment, setEnteredComment] = useState("")  
  const [error, setError] = useState(null)
  const {user} = useContext(UserContext)
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

const handleSubmit = (e) => {
    e.preventDefault(e)
    const newComment = {
      username: user,
      body: enteredComment
    }
    if (enteredComment.trim() === ""){
      return setError("Comment cannot be empty!")
    }
    setError(null)
    setSubmitButtonDisabled(true)
    postComment(newComment, article_id)
       .then((newlyPostedComment)=>{
        setComments((comments) => [newlyPostedComment, ...comments])
        setShowThankYouMessage(true)
           console.log("submitted comment")
           setEnteredComment('') 
        }).catch((err)=>{
            console.log(err)
            setError("Your submission was not successful (˃̣̣̥ᯅ˂̣̣̥) please try again!")
        })
}
  const handleChange = (e) => {
    setEnteredComment(e.target.value)
    console.log(e.target.value)
  }
  
    return (
        <div className="comment-form-parent-component">
        <div className="comment-form-component">
        <p className="component-label">comment form component</p>
        <form className="article-comment-form" onSubmit={handleSubmit}><p>Comment on this article!</p>
            <label> Username:
                <input
                type="text"
                id="username"
                value={user}
                readOnly/>
            </label> <br></br>
            <label> Enter your comment: </label> <br></br>
                <textarea
                type="text"
                id="add-comment"
                placeholder="Type comment here..."
                value={enteredComment}
                onChange={handleChange}
                rows="5"
                cols="50"/> <br></br>
        <button type="submit" disabled={submitButtonDisabled} >Submit Comment</button>
        {error ? <p>{error} </p> : null }
        {showThankYouMessage ? <p>Comment posted successfully!</p> : null}
        </form>
        </div>
        </div>
    )
}


