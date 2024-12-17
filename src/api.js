import axios from "axios"

const northcodersNewsBaseURL = axios.create({
    baseURL: "https://tomglencross-nc-news-project.onrender.com/api/"
})

export const getAllArticles = () => {
    return northcodersNewsBaseURL
    .get("articles")
    .then((response) => {
        console.log(response)
        return response.data.articles
    })
}