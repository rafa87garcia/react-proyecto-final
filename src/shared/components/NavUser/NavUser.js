import { Link } from "react-router-dom";
import "./_navUser.scss";

const NavUser = () => {
  return (
    <div>
        <div className="navUser">
        <h1 className="navUser__logo">Medias Puri</h1>
      <nav className="navUser__content">
      <ul>
        <li><Link to="login">Log in</Link></li>
        <li><Link to="register">Register</Link></li>
        <li><Link to="cart">Cart</Link></li>
    </ul>
    </nav>
    </div>
    </div>
  )
}

export default NavUser