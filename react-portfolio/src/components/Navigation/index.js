import React from 'react';
import { Link } from 'react-router-dom';



const Navigation = () => {

  return (
    <header className="col-12 text-white">
      <nav className='col-8 nav justify-content-around p-3'>
        <ul className='flex-row navbar-nav nav-fill w-100'>
          <li className="mx-4 nav-item">
            <Link to='/'>About</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/Portfolio'>Portfolio</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/Resume'>Resume</Link>
          </li>

          <li className="mx-4 nav-item">
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;