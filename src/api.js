import axios from "axios"

const northcodersNewsBaseURL = axios.create({
    baseURL: "https://tomglencross-nc-news-project.onrender.com/api/"
})

export const getAllArticles = (article_id, topic_name, sort_by_term, order_by_term) => {
if (article_id) {
    return northcodersNewsBaseURL
    .get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}
else if (topic_name) {
    return northcodersNewsBaseURL
    .get(`articles`, {
        params: {topic: topic_name},
    })
    .then((response)=>{
        return response.data.articles
    })
    .catch((error)=>{
        console.log(error, "error returning article by category")
    })  
}
else if (sort_by_term && order_by_term){
    return northcodersNewsBaseURL
    .get(`articles`, {
        params: {sort_by: sort_by_term, order: order_by_term}
       
    })
    .then((response)=>{
        console.log(response.request.responseURL, "reponse in sortby orderby")
        return response.data.articles
    })
    .catch((error)=>{
        console.log(error, "error returning article by sort by and order by")
    })  

}
else if (sort_by_term){
    return northcodersNewsBaseURL
    .get(`articles`, {
        params: {sort_by: sort_by_term}
       
    })
    .then((response)=>{
        console.log(response.request.responseURL, "reponse in sortby")
        return response.data.articles
    })
    .catch((error)=>{
        console.log(error, "error returning article by sort by")
    })  

}
else if (order_by_term){
    return northcodersNewsBaseURL
    .get(`articles`, {
        params: {order: order_by_term}
       
    })
    .then((response)=>{
        console.log(response.request.responseURL, "reponse in order orderby")
        return response.data.articles
    })
    .catch((error)=>{
        console.log(error, "error returning article by order by")
    }) 

}
else return northcodersNewsBaseURL
.get(`/articles`)
.then((response) => {
    return response.data.articles
})
}

export const getAllTopics = () => {
    return northcodersNewsBaseURL
    .get(`/topics`)
    .then((response)=> {
        return response.data.topics
    })
}

export const getComments = (article_id) => {
    return northcodersNewsBaseURL
    .get(`/articles/${article_id}/comments`)
    .then((response) => {
        return response.data.comments
    })
}

export const updateArticleVotes = (article_id, down) => {
    if (down) {
        return northcodersNewsBaseURL
        .patch(`/articles/${article_id}`, {inc_votes: -1})
        .then(()=>{
            console.log("article downvote updated")
        })
    }
    return northcodersNewsBaseURL
    .patch(`/articles/${article_id}`, {inc_votes: 1})
    .then(()=>{
        console.log("article vote updated")
    })
}

export const postComment = (newComment, article_id) => {
    return northcodersNewsBaseURL
    .post(`/articles/${article_id}/comments`, newComment)
    .then((response)=> {
        return response.data.comment
    })
}

export const deleteArticleComment = (comment_id) => {
    return northcodersNewsBaseURL
    .delete(`/comments/${comment_id}`)
    .then(()=>{
        console.log("comment deleted")
    })
}