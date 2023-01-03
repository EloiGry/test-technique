import Link from "next/link";

const SearchBar = ({onChange, movies, searchMovies}) => {
    return (
        <div className='w-full bg-blue-900 fixed h-16 flex flex-col items-center justify-center'>
            <input
            type='text'
            className='rounded-full pl-2 pr-10 py-1 text-black w-2/3'
            placeholder='What are you looking for ?'
            onChange={onChange}
          />
          <div className="bg-white absolute top-12 z-10 w-2/3 rounded">
            {searchMovies?.length > 0 &&
                <>
                    {movies?.map(movie => {
                        return (
                            <Link href={`/movie/${movie.imdbID}`} className='top-2 z-10 flex justify-between px-2 py-2' key={movie.imdbID}>
                                {movie.Poster !== 'N/A' && <img src={movie.Poster} className='mr-2 w-1/4 rounded-t-xl h-24'/>}
                                <div className="w-3/4 ml-2">
                                    <p className='text-xs text-black'> {movie.Title} </p>
                                    <span className='text-xs text-gray-400'> {movie.Year} </span>
                                </div>
                        </Link>
                        )
                    })} 
                </>
            }
          
          </div>
        </div>
    );
};

export default SearchBar;