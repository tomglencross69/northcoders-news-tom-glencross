import { Link } from "react-router";
import TopicCard from "./TopicCard";
import { useParams } from "react-router";

export default function TopicsNav ({topics}) {
    const {topic_name} = useParams()

    return (
        <nav className="topics-nav-component">
            <p className="component-label">topicsnav component</p>
            <ul className="topics-nav-list">
                <li className="topic-card-link">
                    <Link className="topic-card-link" to={"/articles/"} id="topic-card-title">
                    #all-articles
            <h3 className='topics-header'>{topic_name ? `#${topic_name}` : null}</h3>
                    </Link>
                </li>
                {topics.map((currentTopic, i)=>{
                    return (
                    <TopicCard topic={currentTopic} key = {i}/>
                    )
                })}
            </ul>
        </nav>

)
}