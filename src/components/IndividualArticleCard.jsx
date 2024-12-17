export default function IndividualArticleCard ({individualArticle}) {
    const date = new Date(individualArticle.created_at).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      })

    return(
        <div className="individual-article-card-parent-component">
        <li className="individual-article-card-component">
      <p className="component-label">individual article card component</p>
      <div className="individual-article-card-content">
            <h3 id="individual-article-card-title">{individualArticle.title}</h3>
            <img src={individualArticle.article_img_url} id="individual-article-card-image"></img>
            <p id="individual-article-card-author">by {individualArticle.author}</p>
            <p id="individual-article-card-date">Article created: {date}</p>
            <p id="individual-article-card-comment-count">Comments ({individualArticle.comment_count})</p>
            <p id="individual-article-card-vote-count">Votes ({individualArticle.votes})</p>
            <p id="individual-article-card-body">Votes ({individualArticle.body})</p>
            </div>
    </li>
    </div>
    )
}