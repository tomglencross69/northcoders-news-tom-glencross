import { useState } from "react"
import { updateArticleVotes } from "../api"

export default function ArticleVoteHandler ({votes, article_id}) {
const [localArticleVotes, setLocalArticleVotes] = useState(0)
const [error, setError] = useState(null)
const [upButtonDisabled, setUpButtonDisabled] = useState(false)
const [downButtonDisabled, setDownButtonDisabled] = useState(false)
const [showThankYouMessage, setShowThankYouMessage] = useState(false)

const disableUpButton = () => {
 setUpButtonDisabled(true)
}

const disableDownButton = () => {
    setDownButtonDisabled(true)
   }

const thankYouMessage = () => {
    setShowThankYouMessage(true)
}
    
const handleClickUp = () => {
updateArticleVotes(article_id).catch(()=>{
    setLocalArticleVotes((votesAdded)=>{
        setError("Your vote was not successful (˃̣̣̥ᯅ˂̣̣̥) please try again!")
        return votesAdded -1
    })
})
setLocalArticleVotes((votesAdded)=>{
    setError(null)
    disableUpButton()
    setDownButtonDisabled(false)
    thankYouMessage()
    return localArticleVotes +1
})
}

const handleClickDown = () => {
    let down = true
    updateArticleVotes(article_id, down).catch(()=>{
        setLocalArticleVotes((votesMinused)=>{
            setError("Your downvote was not successful (˃̣̣̥ᯅ˂̣̣̥) please try again!")
            return votesMinused +1
        })
    })
    setLocalArticleVotes(()=>{
        setError(null)
        disableDownButton()
        setUpButtonDisabled(false)
        thankYouMessage()
        return localArticleVotes -1
    })
    }

    return (
        <>
        <p>Votes: {votes + localArticleVotes}</p>
        <button onClick={handleClickUp} disabled={upButtonDisabled} className="up-vote-button">Vote +1</button>
        <button onClick={handleClickDown} disabled={downButtonDisabled} className="down-vote-button">Vote -1</button>
        {error ? <p>{error} </p> : null }
        {showThankYouMessage ? <p>Thank you for voting!</p> : null}
        </>
    )
}