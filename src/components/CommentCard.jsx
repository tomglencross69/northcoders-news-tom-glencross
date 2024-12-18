export default function CommentCard ({currentComment}) {
    const date = new Date(currentComment.created_at).toLocaleString('en-GB', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false 
    })
    return (
        <div className="commment-card-parent-component">
        <li className="comment-card-component">
      <p className="component-label">comment card component</p>
      <div className="comment-card-content">
            <p id="comment-card-author">by {currentComment.author}</p>
            <p id="comment-card-date">{date} </p>
            <p id="comment-card-vote-count">Votes ({currentComment.votes})</p>
            <p id="comment-card-body">{currentComment.body}</p>
            </div>
    </li>
    </div>
    )

}