import Link from "next/link";
import { useState} from "react";

const SearchBar = ({onChange, movies, searchMovies}) => {
    const [filter, setFilter] = useState(false)

    return (
        <div className='w-full bg-blue-900 fixed h-16 flex flex-col items-center justify-center z-50'>
            <input
            type='text'
            className='rounded-full pl-2 pr-10 py-1 text-black w-2/3'
            placeholder='What are you looking for ?'
            onChange={onChange}
            onFocus={() => setFilter(true)}
          />
            {searchMovies?.length > 0 && filter &&
                <div className="bg-white absolute top-12 w-2/3 rounded h-96 overflow-y-scroll" >
                        <>
                            <button className="bg-gray-500 text-white rounded m-1 py-0.5 px-2 float-right text-center" onClick={() => setFilter(false)}> x </button>
                            {movies?.map(movie => {
                                return (
                                    <Link href={`/movie/${movie.imdbID}`} className='top-2 z-10 flex justify-between px-2 py-2 md:w-1/2 ease-in-out' key={movie.imdbID}>
                                        <img src={ movie.Poster !== 'N/A' ? (movie.Poster) : ("/No_image_available.svg") }  className='mr-2 w-1/4 rounded-t-xl h-24'/>
                                        <div className="w-3/4 ml-2">
                                            <p className='text-xs text-black hover:font-semibold'> {movie.Title} </p>
                                            <span className='text-xs text-gray-400'> {movie.Year} </span>
                                        </div>
                                    </Link>
                                )
                            })} 
                        </>
                        <p className='text-gray-400 text-center'> No more results found </p>
                </div>
            }
          
        </div>
    );
};

export default SearchBar;

