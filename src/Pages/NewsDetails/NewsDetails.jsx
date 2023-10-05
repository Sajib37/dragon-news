import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { BsArrowLeft,BsCalendarCheck } from "react-icons/bs";

const NewsDetails = () => {
    const id = useParams();
    const allNews = useLoaderData();
    const news = allNews.find(news=>news._id == id.id);
    
    const {image_url,title,details } = news;
    return (
        <div className="max-w-screen-xl mx-auto md:px-2">
            <Header className="px-1"></Header>
            <Navbar className="px-1"></Navbar>

            <div className="grid grid-cols-1 md:grid-cols-3">
                <div className=" px-1 md:col-span-2"> 
                    <h1 className="text-xl md:text-3xl font-semibold mb-4">Dragon News</h1>
                    <div className="md:p-4 p-2 border">
                        <img src={image_url}></img>
                        <h1 className="text-xl font-bold md:my-6 my-4">{title}</h1>
                        <p>{details}</p>
                        <button className="mt-4 flex gap-1 py-2 md:px-12 px-6 text-white bg-red-600 items-center"> <BsArrowLeft className="font-bold text-3xl"></BsArrowLeft> All news in this category</button>
                    </div>
                    <h1 className="text-xl md:text-2xl font-semibold my-4">Editors Insight</h1>

                    <div className="flex flex-col gap-2 px-2">
                        <div className="border space-y-3">
                            <div className="w-full bg-[#D9D9D9] h-56"></div>
                            <div className="px-2">
                                <h1>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className="flex items-center gap-2 text-[#9F9F9F]">
                                    <BsCalendarCheck></BsCalendarCheck>
                                    <p >Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="border space-y-3">
                            <div className="w-full bg-[#D9D9D9] h-44"></div>
                            <div className="px-2">
                                <h1>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className="flex items-center gap-2 text-[#9F9F9F]">
                                    <BsCalendarCheck></BsCalendarCheck>
                                    <p >Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>
                        <div className="border space-y-3">
                            <div className="w-full bg-[#D9D9D9] h-44"></div>
                            <div className="px-2">
                                <h1>21 The Most Stylish Wedding Guest Dresses For Spring</h1>
                                <div className="flex items-center gap-2 text-[#9F9F9F]">
                                    <BsCalendarCheck></BsCalendarCheck>
                                    <p >Jan 4, 2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;