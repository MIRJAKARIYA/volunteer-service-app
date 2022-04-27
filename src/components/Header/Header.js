import React from "react";
import { Link } from "react-router-dom";
import { GrMenu } from 'react-icons/gr';
import Logo from '../../images/logos/Group 1329.png';
const Header = () => {
  return (
    <div className="navbar bg-base-100 max-w-[1400px] mt-5 mx-auto">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} className='w-40' alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="sm:flex hidden">
            <Link className="mr-8 font-semibold" to='/home'>Home</Link>
            <Link className="mr-8 font-semibold" to='/home'>Donation</Link>
            <Link className="mr-8 font-semibold" to='/home'>Events</Link>
            <Link className="mr-8 font-semibold" to='/home'>Blog</Link>
        </div>
        <div className="dropdown dropdown-end">
          <button className="sm:hidden block text-2xl"><GrMenu></GrMenu></button>
          <ul
            tabindex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="/" className="justify-between">
                Donation
              </Link>
            </li>
            <li>
              <Link to="/" className="justify-between">
                Events
              </Link>
            </li>
            <li>
              <Link to="/" className="justify-between">
                Blog
              </Link>
            </li>
            <li>
            <Link to="/" className="justify-between">
                Signout
            </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
