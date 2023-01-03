import Link from "next/link";

const MoviesList = ({movies}) => {
    return (
        <div className="flex flex-col justify-center items-center pt-16 md:flex-row md:flex-wrap ">
            {movies.map(movie => {
                return (
                    <>
                    {movie.Poster !== 'N/A' &&
                <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID} className='flex flex-col items-center justify-center w-2/3 md:w-1/3 lg:w-1/4 md:flex-row md:flex-wrap md:items-stretch mx-4 sm:mx-2 shadow-2xl rounded-xl mt-8 md:mx-4'>
                    
                        <div >
                            <img src={movie.Poster} className='w-full md:max-w-full rounded-t-xl h-96 md:h-72'/>
                            <p className="font-semibold text-center mt-4"> {movie.Title} </p>
                            <p className="text-gray-400 mb-4 text-center"> {movie.Year} </p>
                        </div>
                    
                </Link>}
                </>
            )
            })}
        </div>
    );
};
export default MoviesList;