import { postComment } from "../api"
import { useState, useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useFormStatus } from "react-dom"

export default function CommentForm ({article_id}) {
  const [comment, setComment] = useState("")  
  const [error, setError] = useState(null)
  const {user} = useContext(UserContext)
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false)

  const disableSubmitButton = () => {
    setSubmitButtonDisabled(true)
  }

  const thankYouMessage = () => {
    setShowThankYouMessage(true)
}

const handleSubmit = (e) => {
    e.preventDefault(e)
    console.log("submitted")
    
    const newComment = {
        username: user,
        body: comment
    }
    
       postComment(newComment, article_id)
       .then(()=>{
           thankYouMessage()
           disableSubmitButton()
           console.log("submitted comment")
           setComment('') 
        }).catch((err)=>{
            console.log(err)
            setError("Your submission was not successful (˃̣̣̥ᯅ˂̣̣̥) please try again!")
        })
       
}

  const handleChange = (e) => {
    setComment(e.target.value)
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
                required
                type="text"
                id="add-comment"
                placeholder="Type comment here..."
                value={comment}
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


