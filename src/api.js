import axios from "axios"

const northcodersNewsBaseURL = axios.create({
    baseURL: "https://tomglencross-nc-news-project.onrender.com/api/"
})

export const getAllArticles = (article_id) => {

if (article_id) {
    return northcodersNewsBaseURL
    .get(`/articles/${article_id}`)
    .then((response) => {
        return response.data.article
    })
}
else return northcodersNewsBaseURL
.get(`/articles`)
.then((response) => {
    return response.data.articles
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
    console.log(article_id, "in api")
    return northcodersNewsBaseURL
    .post(`/articles/${article_id}/comments`, newComment)
    .then(()=> {
        console.log("comment posted")
    })
}