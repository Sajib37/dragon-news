import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';
import { AiOutlineCalendar } from "react-icons/ai";
import moment from 'moment';
const LeftSideNav = () => {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("categories.json")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])

    return (
        <div className=''>
            <h1 className='text-lg font-semibold mb-4'>All Caterogy</h1>
            <div className='bg-[#E7E7E7] p-4'>
                <h1 className='taxt-lg font-semibold text-center'>National News</h1>
            </div>
            <div className='space-y-6 mt-4 text-[#9F9F9F] w-48 mx-auto'>
                {
                    data.map(category => <Link key={category.id} to={`/category/${category.id}`} className='block'>{ category.name}</Link>)
                }
            </div>

            <div className='mt-4 px-2 md:mt-6 space-y-6'>
                <div className='space-y-4'>
                    <img className='w-full' src={img1}></img>
                    <h1 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex items-center gap-6'>
                        <span>Sports</span>
                        
                        <div className='flex items-center gap-2 text-[#9F9F9F]'>
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <p>{ moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <img className='w-full' src={img2}></img>
                    <h1 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex items-center gap-6'>
                        <span>Sports</span>
                        
                        <div className='flex items-center gap-2 text-[#9F9F9F]'>
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <p>{ moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-4'>
                    <img className='w-full' src={img3}></img>
                    <h1 className='text-lg font-semibold'>Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                    <div className='flex items-center gap-6'>
                        <span>Sports</span>
                        
                        <div className='flex items-center gap-2 text-[#9F9F9F]'>
                            <AiOutlineCalendar></AiOutlineCalendar>
                            <p>{ moment().format("MMM Do YY")}</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LeftSideNav;