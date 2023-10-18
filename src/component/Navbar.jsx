/* eslint-disable no-undef */
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        return logOut()

    }
    console.log(user?.displayName)

    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">Add Product</NavLink></li>
        <li><NavLink to="/blog">My Cart</NavLink></li>

    </>
    return (
        <div className="">
            <div className="navbar shadow-lg bg-slate-700 text-white mx-w-full">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">  <img className="w-[40px] h-[40px] rounded-full" src="https://i.postimg.cc/9Q7PVMcD/logo-ideas-page-1.png" alt="" /> AB TECHNOLOGY</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>

                <div className="navbar-end mr-5">
                    {
                        user?.email ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt={user?.displayName} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-60">
                                <li>
                                    <button className="btn btn-sm text-black btn-ghost">{user?.displayName} </button>

                                </li>
                                <li>
                                    <div className=" text-black text-sm break-words"> {user?.email}</div>
                                </li>
                                <li>
                                    <button onClick={handleLogOut} className="btn btn-sm  btn-ghost text-black">Logout</button>

                                </li>
                            </ul>
                        </div> :
                            <Link to='/login'>
                                <button className="btn btn-sm">Login</button>
                            </Link>
                    }

                    {/* <div>
                <Link to='/register'>
                            <button className="btn btn-sm">Register</button>
                        </Link>
                </div> */}
                </div>
            </div>
        </div>
    );
};

export default Navbar;