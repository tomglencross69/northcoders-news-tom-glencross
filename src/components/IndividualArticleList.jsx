import IndividualArticleCard from "./IndividualArticleCard"
import { useParams} from "react-router"
import { useEffect, useState } from "react"
import { getAllArticles } from "../api"
import CommentList from "./CommentList"

export default function IndividualArticleList () {
const {article_id} = useParams()
const [individualArticle, setIndividualArticle] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

useEffect(()=> {
    setIsLoading(true)
    getAllArticles(article_id)
    .then((fetchedArticle)=>{
        setIndividualArticle(fetchedArticle)
        setIsError(false)
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsError(true)
        setIsLoading(false)
        console.log(error, 'error fetching individual article')
    })
}, [])

if (isLoading) return <p>Loading...</p>
if (isError) return <p>Error fetching....</p>
    
return (
        <div className="individual-article-list-parent-component">
      <ul className="individual-article-list-component">
      <p className="component-label">individual article list component</p>
      <IndividualArticleCard individualArticle={individualArticle}/>
      <CommentList individualArticle={individualArticle}/>
      </ul>
    </div>
    )
}
