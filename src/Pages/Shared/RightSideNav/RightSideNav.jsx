import { BsGoogle, BsGithub, BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

import pic1 from "../../../assets/qZone1.png";
import pic2 from "../../../assets/qZone2.png";
import pic3 from "../../../assets/qZone3.png";
import bg1 from "../../../assets/bg.png";



const RightSideNav = () => {
    return (
        <div>
            <h1 className="text-2xl font-bold">Login With</h1>

            <div className="lg:px-2 space-y-2 mx-2 mt-4 md:mt-6">
                <button className="w-full flex items-center gap-2 border-2 border-teal-600 text-blue-500 py-2 rounded justify-center">
                    <BsGoogle></BsGoogle>Log in With Google
                </button>
                <button className="w-full flex items-center gap-2 border-2 border-black text-black py-2 rounded justify-center">
                    <BsGithub></BsGithub>Log in With Github
                </button>
            </div>

            <h1 className="text-2xl font-bold my-4 md:my-8">Find Us On</h1>
            <div className="px-2 mb-4">
                <button className="p-4 flex items-center text-xl gap-2 border text-[#706F6F] border-collapse rounded-t-md w-full"> <BsFacebook className="text-2xl text-[#2B6EBE]"></BsFacebook> Facebook</button>
                <button className="p-4 flex items-center text-xl gap-2 border text-[#706F6F] border-collapse w-full"> <BsTwitter className="text-2xl text-[#58A7DE]"></BsTwitter> Facebook</button>
                <button className="p-4 flex items-center text-xl gap-2 border text-[#706F6F] border-collapse rounded-b-md w-full"> <BsInstagram className="text-2xl text-[#F6BB92]"></BsInstagram> Facebook</button>
            </div>

            <div className="bg-[#F3F3F3] rounded-lg p-2 mb-2">
                <h1 className="text-2xl font-bold my-4">Q-Zone</h1>
                <div>
                    <img className=" w-full" src={pic1}></img>
                </div>
                <div>
                    <img className="w-full" src={pic2}></img>
                </div>
                <div>
                    <img className="w-full" src={pic3}></img>
                </div>
            </div>

            <div className="bg-cover bg-center bg-no-repeat w-full p-8 py-24 text-white text-center space-y-8" style={{ backgroundImage: `url(${bg1})` }}>
                <h1 className="text-2xl md:text-4xl font-bold ">Create an Amazing Newspaper</h1>
                <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                <button className="bg-red-700 px-6 py-2">Learn more</button>
            </div>
        </div>
    );
};

export default RightSideNav;
