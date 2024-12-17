import MainArticlesList from "./MainArticlesList";
import { getAllArticles } from "../api";
import { useState, useEffect } from "react";

export default function StateManager() {
const [articles, setArticles] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)

useEffect(()=>{
    setIsLoading(true)
    getAllArticles()
    .then((fetchedArticles)=>{
        console.log(fetchedArticles)
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
}, [])

if (isLoading) return <p>Loading...</p>
if (isError) return <p>Error fetching....</p>



return (
    <div className="manager-component">
        <p className="component-label">manager component</p>
        <MainArticlesList articles={articles}/>
    </div>
)
}