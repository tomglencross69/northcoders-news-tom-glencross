import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import HomeLogo from "./HomeLogo";
import TopicsNav from "./TopicsNav";

export default function Header({topics}) {
    const {user} = useContext(UserContext)

    return (
        <header className="header-component">
            <p className="component-label">header component</p>
            <h1 className="header-welcome-user-text">Welcome, {user} </h1>
            <HomeLogo/>
            <TopicsNav topics={topics}/>
        </header>
    )
}