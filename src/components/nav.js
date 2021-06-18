import { Link } from "react-router-dom";

const Nav = () => {
    return ( <ul className="nav">
        <Link to="/"><li>Methods</li></Link>
        <Link to="/hooks"><li>Hooks</li></Link>
    </ul> );
}
 
export default Nav;