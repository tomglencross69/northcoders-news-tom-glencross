import { Link } from "react-router";

export default function TopicCard ({topic}) {

    return(
        <li className="topic-card">
            <Link className="topic-card-link"
            to={`/articles/topics/${topic.slug}`}
            id="topic-card-title"
            >
                #{topic.slug} 
            </Link>
        </li>
    )
}