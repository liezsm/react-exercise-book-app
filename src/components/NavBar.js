import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import bootstrap from "bootstrap/dist/css/bootstrap.css";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className=' d-flex align-items-center justify-content-around '>
      <h1 className='display-4 text-center'>
        <FontAwesomeIcon icon={faBookOpen} className='text-primary' />
        My<span className='text-primary'>Book</span>List
      </h1>

      <ul className='nav'>
        <li className='nav-item'>
          <Link className='nav-link active' aria-current='page' to='/'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/addbook'>
            Add Book
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
