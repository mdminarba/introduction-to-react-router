import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl ">Navbar</h1>
      <nav>
        <Link  className=' m-2' to="/">Home</Link>
        <Link  className=' m-2' to="/about">About</Link>
        <Link  className=' m-2' to="/contacts">Contacts</Link>
        <Link  className=' m-2' to="/users">Users</Link>
      </nav>
 
    </div>
  );
};

Header.propTypes = {};

export default Header;
