import { useEffect, useState } from "react";
import SingleHomeNews from "./SingleHomeNews";

const HomeNews = ({news}) => {
    return (
        <div>
            <h1 className="text-xl font-semibold mb-6">Dragon News Home</h1>
            <div>
                {
                    news.map((singleNews,idx)=><SingleHomeNews key={idx} singleNews={singleNews}></SingleHomeNews>)
                }
            </div>
        </div>
    );
};

export default HomeNews;