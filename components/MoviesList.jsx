import Link from "next/link";

const MoviesList = ({movies}) => {
    return (
        <div className="flex flex-col justify-center items-center pt-16">
            {movies.map(movie => {
                return (
                <Link href={`/movie/${movie.imdbID}`} key={movie.imdbID} className='flex flex-col items-center justify-center w-2/3 shadow-2xl rounded-xl mt-8'>
                    {movie.Poster !== 'N/A' &&
                        <div >
                            <img src={movie.Poster} className='w-full rounded-t-xl h-96'/>
                            <p className="font-semibold text-center mt-4"> {movie.Title} </p>
                            <p className="text-gray-400 mb-4 text-center"> {movie.Year} </p>
                        </div>
                    }
                </Link>
            )
            })}
        </div>
    );
};
export default MoviesList;