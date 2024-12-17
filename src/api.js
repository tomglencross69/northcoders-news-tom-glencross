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