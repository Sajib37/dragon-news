import { Link } from "react-router-dom";
import user1 from "../../../assets/user.png"
import { useAuth } from "../../../AuthProvider/Authprovider";
const Navbar = () => {
    const { user ,LogOut } = useAuth();

    const handleLogout = () => {
        LogOut()
            .then(result => {
            console.log('LogOut Successfully')
            })
            .catch(error => {
            console.log('Log Out Failed..')
        })
    }
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/career'>Career</Link></li>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#706F6F]"
                    >
                        {navLinks}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-[#706F6F]">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end flex gap-1">
                <img className="w-10" src={user1}></img>
                {
                    user?<p onClick={handleLogout} className="bg-[#403F3F] text-white text-lg font-semibold py-1 px-6">LogOut</p> :<Link to='/login' className="bg-[#403F3F] text-white text-lg font-semibold py-1 px-6">Login</Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;
