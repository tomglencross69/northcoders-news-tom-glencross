import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import StateManager from './components/StateManager'
import { Navigate } from 'react-router'
import {Routes, Route} from "react-router"
import MainArticlesList from './components/MainArticlesList'
import IndividualArticleList from './components/IndividualArticleList'
import CommentList from './components/CommentList'

function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path ="/" element={<Navigate to="/articles"/>} />
          <Route path="/articles" element={<StateManager/>}/>
          <Route path ="/articles/:article_id" element={<IndividualArticleList/>}/>
          <Route path ="/articles/:article_id/comments" element={<CommentList/>}/>
        </Routes>
        <Footer/>
      </div>
    </>
  )
}

export default App
 