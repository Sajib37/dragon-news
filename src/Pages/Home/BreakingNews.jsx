import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
    return (
        <div className="bg-[#F3F3F3] py-4 px-0 md:p-4 flex gap-2 max-w-screen-xl mx-auto">
            <button className="bg-red-600 text-white p-4 py-2">Latest</button>
            <Marquee speed={50} pauseOnHover={true}>
                <Link className="font-semibold" to='/'>
                    Match Highlights: Germany vs Spain — as it happened ! Match
                    Highlights: Germany vs Spain as...          Match Highlights: Germany
                    vs Spain — as it happened ! Match Highlights: Germany vs
                    Spain as...
                </Link>
            </Marquee>
        </div>
    );
};

export default BreakingNews;
