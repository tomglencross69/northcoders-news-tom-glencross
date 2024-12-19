import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import StateManager from './components/StateManager'
import { Navigate } from 'react-router'
import {Routes, Route} from "react-router"
import IndividualArticleList from './components/IndividualArticleList'
import CommentList from './components/CommentList'
import { getAllTopics } from './api'
import { useEffect } from 'react'

function App() {

const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
const [topics, setTopics] = useState([])

//retrieves all topics
useEffect(()=>{
  setIsLoading(true)
  getAllTopics()
  .then((fetchedTopics)=>{
      return fetchedTopics
  })
  .then((topicsData)=>{
      setTopics(topicsData)
      setIsError(false)
      setIsLoading(false)
  })
  .catch((error)=>{
      setIsError(true)
      setIsLoading(false)
      console.log(error, "error in topics catch")
  })
  
}, [])

if (isLoading) return <p>Loading...</p>
if (isError) return <p>Error fetching....</p>

  return (
    <>
      <div>
        <Header topics={topics}/>
        <Routes>
          <Route path ="/" element={<Navigate to="/articles"/>} />
          <Route path="/articles" element={<StateManager/>}/>
          <Route path="/articles/topics/:topic_name" element={<StateManager/>}/>
          <Route path ="/articles/:article_id" element={<IndividualArticleList/>}/>
          <Route path ="/articles/:article_id/comments" element={<CommentList/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
 