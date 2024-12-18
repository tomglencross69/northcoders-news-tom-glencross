import CommentCard from "./CommentCard"
import CommentForm from "./CommentForm"
import { useState, useEffect } from "react"
import { getComments } from "../api"
import { useParams } from "react-router"


export default function CommentList ({individualArticle}) {

const [comments, setComments] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
const {article_id} = useParams()


useEffect(()=> {
    setIsLoading(true)
    getComments(article_id)
    .then((fetchedComments)=>{
        setComments(fetchedComments)
        setIsError(false)
    })
    .catch((error)=>{
        setIsError(true)
        setIsLoading(false)
        console.log(error, 'error fetching comments')
    })
}, [])
    return (
        <div className="comment-list-parent-component">
              <ul className="comment-list-component">
              <p className="component-label">comment list component</p>
              <CommentForm article_id={individualArticle.article_id}/>
              <h3 id="comment-list-title">Comments</h3>
              {comments.map((currentComment)=>{
                return <CommentCard currentComment={currentComment} key={currentComment.comment_id}/>
              })}
              </ul>
            </div>
    )
}