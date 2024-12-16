import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";
import HomeLogo from "./HomeLogo";

export default function Header() {
    const {user} = useContext(UserContext)

    return (
        <header className="header-component">
            <p className="component-label">header component</p>
            <h1 className="header-welcome-user-text">Welcome, {user} </h1>
            <HomeLogo/>
        </header>
    )
}