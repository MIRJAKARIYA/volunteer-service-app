import React from "react";
import { Link } from "react-router-dom";
import { GrMenu } from "react-icons/gr";
import Logo from "../../images/logos/Group 1329.png";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () =>{
    signOut(auth);
  }
  return (
    <div className="navbar bg-base-100 max-w-[1400px] mx-auto">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={Logo} className="w-40" alt="" />
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="md:flex items-center hidden">
          <Link className="mr-8 font-semibold" to="/home">
            Home
          </Link>
          <Link className="mr-8 font-semibold" to="/events">
            Events
          </Link>
          <Link className="mr-8 font-semibold" to="/addevent">
            Add Event
          </Link>
          
          {
            user?<button onClick={handleSignOut} className="mr-8 font-semibold bg-blue-500 hover:bg-blue-700 duration-150 login-nav-extra-style">Sign Out</button>:<Link
            className="mr-8 font-semibold bg-blue-500 hover:bg-blue-700 duration-150 login-nav-extra-style"
            to="/login"
          >
            Login
          </Link>
          }
          <img src={user?.photoURL} className='w-[40px] rounded-full' alt="" />
        </div>
        <div className="dropdown dropdown-end">
          <button className="md:hidden block text-2xl">
            <GrMenu></GrMenu>
          </button>
          <ul
            tabIndex="0"
            className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/" className="justify-between">
                Home
              </Link>
            </li>
            <li>
              <Link to="/addevent" className="justify-between">
                Add Event
              </Link>
            </li>
            <li>
              <Link to="/events" className="justify-between">
                Events
              </Link>
            </li>
            <li>
              {
                user?<button onClick={handleSignOut}>Sign Out</button>:<Link to="/login" className="justify-between">
                Login
              </Link>
              }
            </li>
            <li>
              <img src={user?.photoURL} className='w-[80px]' style={{borderRadius: '50%'}} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
