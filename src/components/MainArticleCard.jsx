export default function MainArticleCard ({currentArticle}) {

    return (
        <div className="main-article-card-parent">
        <li className="main-article-card">
            <div className="main-article-card-content">
            <h3 id="main-article-card-title">{currentArticle.title}</h3>
            <p id="main-article-card-author">by {currentArticle.author}</p>
            <img src={currentArticle.article_img_url} id="main-article-card-image"></img>
            <p id="main-article-card-comment-count">Comments ({currentArticle.comment_count})</p>
            <p id="main-article-card-vote-count">Votes ({currentArticle.votes})</p>
            <p className="component-label">main articles card component</p>
            </div>
        </li>
        </div>
    )
}