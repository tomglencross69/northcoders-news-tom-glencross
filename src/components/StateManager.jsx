import MainArticlesList from "./MainArticlesList";
import TopicsNav from "./TopicsNav";
import { getAllArticles} from "../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

export default function StateManager() {
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
        <p className="component-label">manager component</p>
        <MainArticlesList articles={articles}/>
    </div>
)
}