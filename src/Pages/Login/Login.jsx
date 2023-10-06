import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { Helmet } from "react-helmet-async";
import { useAuth } from "../../AuthProvider/Authprovider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const Login = () => {
    const { Login } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    console.log(location)
    const [succes, setSucces] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        Login(email, password)
            .then(result => {
                setSucces('Login Successfully..')
                navigate(location?.state?location.state:'/')
            })
            .catch(error => {
                setSucces('Login Failed')
        })
    }
    return (
        <div>
            <Helmet>
                <title>Dragon News || Login</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:p-16 border m-4 mx-auto rounded-lg lg:mt-28">
                <h1 className="text-3xl font-bold my-6">Login your account</h1>
                <hr></hr>
                <form className="mt-6" onSubmit={handleLogin}>
                    <label className="text-base font-bold">Email address</label>
                    <input name="email" type="email" placeholder="Enter your Email" className="input input-bordered w-full mb-6" />
                    <label className="text-base font-bold">Password</label>
                    <input name="password" type="password" placeholder="Enter your password" className="input input-bordered w-full mb-6" />
                    
                    <button name="submit" className="bg-[#403F3F] text-white font-bold text-lg p-2 w-full" >Login</button>
                </form>

                <p className="mt-4">Don't have an account? <Link to='/register' className="font-bold text-red-700">Register</Link></p>
                {
                    succes && <p className="text-center text-pink-600 font-bold">{ succes}</p>
                }
            </div>
        </div>
    );
};

export default Login;