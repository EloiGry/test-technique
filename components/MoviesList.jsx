import Link from "next/link";
import React from "react";


const MoviesList = ({movies}) => {
    return (
        <div className="flex flex-col justify-center items-center md:flex-row md:flex-wrap ">
            {movies?.map(movie => {
                return (
                    <React.Fragment key={movie.imdbID}>
                        <Link href={`/movie/${movie.imdbID}`} className='flex flex-col items-center justify-center w-2/3 md:w-1/3 lg:w-1/4 md:flex-row md:flex-wrap md:items-stretch mx-4 sm:mx-2 shadow-2xl rounded-xl mt-8 md:mx-4 hover:scale-105 ease-in-out duration-300'>
                                <div >
                                <img src={ movie.Poster !== 'N/A' ? (movie.Poster) : ("/No_image_available.svg") } className='w-full md:max-w-full rounded-t-xl h-96 md:h-72'/>
                                    <p className="font-semibold text-center mt-4"> {movie.Title} </p>
                                    <p className="text-gray-400 mb-4 text-center"> {movie.Year} </p>
                                </div>
                        </Link>
                    </React.Fragment>
            )
            })}
        </div>
    );
};
export default MoviesList;