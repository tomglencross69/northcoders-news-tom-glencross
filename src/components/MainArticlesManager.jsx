import MainArticleCard from "./MainArticleCard";
import { getAllArticles} from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import SortByList from "./SortByList";

export default function MainArticlesManager() {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

const {topic_name} = useParams()

useEffect(()=>{
    setIsLoading(true)
    getAllArticles(null, topic_name)
    .then((fetchedArticles)=>{
        return fetchedArticles
    })
    .then((articlesData) => {
        setArticles(articlesData)
        setIsError(false)
        setIsLoading(false)
    })
    .catch((error)=>{
        setIsError(true)
        setIsLoading(false)
        console.log(error, "error in main articles catch")
    })
}, [topic_name])

if (isLoading) return <p>Loading...</p>
if (isError) return <p>Error fetching....</p>

return (
    <div className="manager-component">
        <p className="component-label">main articles manager component</p>
        <ul className="main-articles-list-component">
            {!topic_name && (
                <SortByList articles={articles} setArticles={setArticles}/>
            )}
         {articles.map((currentArticle)=> {
        return <MainArticleCard currentArticle={currentArticle} key={currentArticle.article_id}/>
        })}
        </ul>
    </div>
)
}