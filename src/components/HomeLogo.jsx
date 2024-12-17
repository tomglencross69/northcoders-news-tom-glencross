import { Link } from "react-router";
import homelogo from "../assets/northcodersnewslogosmalltransparent.png"

export default function HomeLogo() {
  return (
    <div>
      <Link to={"/"} className="home-logo-link">
        <img src={homelogo}></img>
      </Link>
    </div>
  );
}