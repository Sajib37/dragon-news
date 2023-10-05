import { BsBookmark,BsShare ,BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
const SingleHomeNews = ({ singleNews }) => {
    const{author,title,image_url,details,rating,total_view,_id}=singleNews
    return (
        <div className="my-8 border">
            <div className="bg-[#F3F3F3] p-2 flex justify-between">
                <div className="flex gap-2">
                    <img className="w-12 h-12 rounded-full" src={author.img}></img>
                    <div>
                        <p className="font-semibold">{ author.name}</p>
                        <p className="text-[#706F6F]">{ author.published_date}</p>
                    </div>
                </div>

                <div className="flex items-center text-xl md:text-2xl gap-4">
                    <BsBookmark></BsBookmark>
                    <BsShare></BsShare>
                </div>
            </div>

            <div className="px-2">
                <h1 className="text-xl font-bold my-4">{title}</h1>
                <img src={image_url}></img>
            </div>

            <div className="px-2 ">
                <div className="my-4">
                    {
                        details.length > 250 ?<div className=""><p>{details.slice(0,250)}...</p><Link to={`/news/${_id}`} className="text-orange-600">Read more</Link></div>:<p>{details}</p>
                    }      
                </div>
                <hr></hr>
            </div>
            
            <div className="flex justify-between px-2 py-4">
                <div className="flex gap-2 items-center">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-1" className="mask mask-star-2 bg-orange-400" />
                    </div>
                    <p className="text-bold"> { rating.number}</p>
                </div>

                <div className="flex gap-1 items-center">
                    <BsEye></BsEye>
                    <p>{ total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleHomeNews;