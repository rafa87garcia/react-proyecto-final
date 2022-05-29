import { Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import './_navUser.scss'; 
import { AiOutlineShoppingCart } from 'react-icons/ai';



const NavUser = () => {
  return (
    <div  className="navUser">
        
        <h1 className="navUser__logo">Puri Sport</h1>
        
  
      <ul className="navUser__content">
        <li><Link to="login" >Log in</Link></li>
        

        <li><Link to="register">Register</Link></li>
        <li>
          
          <Link to="cart">
            <AiOutlineShoppingCart />
          </Link>
          
        Cart</li>
      </ul>
     </div>
  )
}

export default NavUser