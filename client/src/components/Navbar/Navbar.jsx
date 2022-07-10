import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/logo.png";
import search from "../../assets/search-solid.svg";
import Avatar from '../../components/Avatar/Avatar';
// import Button from '../../components/Button/Button';
import '../Navbar/Navbar.css'


const Navbar = () => {
  var User = null;
  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="nav-logo nav-item">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/" className="nav-item nav-btn ">
          About
        </Link>
        <Link to="/" className="nav-item nav-btn ">
          Products
        </Link>
        <Link to="/" className="nav-item nav-btn ">
          For Teams
        </Link>
        <form>
          <input  type="text" placeholder="Search..." />
          <img src={search} alt="search" width="17" className="search-icon
          " />
        </form>
        {User === null ? (
          <Link to="/Auth" className="nav-item nav-links">
            Login
          </Link>
        ) : (
          <>
            <Link style= {{color:'white' ,textDecoration:'none'}} to="/User"><Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'>D</Avatar></Link>
            {/* <Avatar backgroundColor='#009dff' px="10px" py="7px" borderRadius="50%" color='white'><Link to={`/Users/${User?.result?._id}`} style={{color:"white", textDecoration:'none'}}>{User.result.name.charAt(0).toUpperCase()}</Link></Avatar> */}
            <button className="nav-item nav-links">Log out</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
