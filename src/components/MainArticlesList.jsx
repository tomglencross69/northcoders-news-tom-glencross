import MainArticleCard from './MainArticleCard'

export default function MainArticlesList ({articles}) {
    return (
        <div className="main-articles-list-component-parent">
            <p className="component-label">main articles list component</p>
            <ul className="main-articles-list-component">
                {articles.map((currentArticle)=> {
                    return <MainArticleCard currentArticle={currentArticle} key={currentArticle.article_id}/>
                })}
            </ul>
        </div>
    )
}