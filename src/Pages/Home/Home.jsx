import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import HomeNews from "../Shared/HomeNews/HomeNews";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";

const Home = () => {
    const news = useLoaderData();
    return (
        <div className="max-w-screen-xl mx-auto font-poppins">
            <Header className="px-1"></Header>
            <Navbar className="px-1"></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4">
                <LeftSideNav className="px-1"></LeftSideNav>
                <div className="md:col-span-2  px-1">
                 <HomeNews news={news}> </HomeNews>
                </div>
                
                <RightSideNav></RightSideNav>
            </div>
        </div>
    );
};

export default Home;