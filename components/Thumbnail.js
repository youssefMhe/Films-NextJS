import React, {Component} from 'react';
import Image from "next/image";
import {
    CollectionIcon,
    LightningBoltIcon,
    HomeIcon,
    BadgeCheckIcon,
    SearchIcon,
    UserIcon, ThumbUpIcon
} from "@heroicons/react/outline";
import {forwardRef} from "react";

const  Thumbnail = forwardRef(({result},ref) =>{
    const BASE_URL = "https://image.tmdb.org/t/p/original"
    console.log(result)

    return (
        <div  ref={ref} className=' p-5 group cursor-pointer transition duration-200 ease-in transform hover:scale-105 hover:z-50'>
            <Image

                layout='responsive'
                src={
                    `${BASE_URL}${result.backdrop_path || result.poster_path}` || `${BASE_URL}${result.poster_path}`
                }
                height={1080}
                width={1920}
            />
            <div className='p-2'>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold group-hover:text-red-600 "> {result.title || result.original_name}</h2>
                <p className='truncate max-w-md'>{result.overview}</p>
                <p className='flex items-center opacity-0 group-hover:opacity-100 '>
                    {result.release_date || result.first_air_date}{" "}
                    {result.media_type && `${result.media_type}`}{" "}

                    <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
                </p>


            </div>

        </div>
    );

})

export default Thumbnail;