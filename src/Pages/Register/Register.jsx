import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useAuth } from "../../AuthProvider/Authprovider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet-async";

const Register = () => {
    const{createUser,UpdateProfile}=useAuth()

    const handleCreateUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then(result => {
                toast("Accout created SuccesFully..")
            })
            .catch(error => {
                if (error.message == 'Firebase: Error (auth/email-already-in-use).') {
                    toast.error('This Email aready have an account')
                }
                else {
                    toast.error('Regustration Failed !', {
                        position: toast.POSITION.TOP_CENTER
                    });
                }   
            })
        
        UpdateProfile(name, photo)
            .then(result => {
            console.log('profile updated')
            })
            .catch(error => {
            console.log('profile update failed n!!')
        })
        
    }
    return (
        <div>
            <Helmet>
                <title>Dragon News || Register</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4 lg:px-16 py-6 border m-4 mx-auto rounded-lg lg:mt-12">
                <h1 className="text-3xl font-bold my-6 text-center">Create a new account</h1>
                <hr></hr>
                <form onSubmit={handleCreateUser} className="mt-6">
                    <label className="text-base font-bold">Your Name</label>
                    <input name="name" type="text" placeholder="Enter your name" className="input input-bordered w-full mb-4" required />
                    <label className="text-base font-bold">Photo URL</label>
                    <input name="photo" type="text" placeholder="Enter the photo url" className="input input-bordered w-full mb-4" required/>
                    <label className="text-base font-bold">Email address</label>
                    <input name="email" type="email" placeholder="Enter Your Email" className="input input-bordered w-full mb-4" required/>
                    <label className="text-base font-bold">Password</label>
                    <input name="password" type="password" placeholder="Enter Password" className="input input-bordered w-full mb-2" required/>
                    <div className="flex items-center gap-2 mb-4"> 
                        <input  type="checkbox" id="checkbox" name="myCheckbox" required></input>
                        <label for="checkbox">Accept our <Link className="text-red-500 font-semibold">terms and condition </Link></label>
                    </div>
                    <button className="bg-[#403F3F] text-white font-bold text-lg p-2 w-full" >Register</button>
                </form>

                <p className="mt-4">Already have an account? <Link to='/login' className="font-bold text-red-700">Login</Link></p>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;