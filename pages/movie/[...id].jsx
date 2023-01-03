import useSWR from 'swr'
import { useRouter } from 'next/router'
import Link from 'next/link';
const fetcher = (...args) => fetch(...args).then((res) => res.json())


const Movie = () => {
    const router = useRouter()
    const { id } = router.query
    const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}?i=${id}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher)
    if (!data) return <div>Loading...</div>
    return (
        <div className='grid h-screen place-items-center'>
            <div className='flex justify-between border-2 border-gray-300 rounded-2xl shadow-xl m-2 items-center'>
                <img src={data.Poster} className='max-w-lg w-full rounded-t-xl h-96'/>
                <div>
                    <p className="font-semibold text-center my-4"> Title {data.Title} </p>
                    <p className="text-gray-400 mb-4 text-center"> Year : {data.Year} </p>
                    <p className="text-gray-400 mb-4 text-center"> Country : {data.Country} </p>
                    <p className="text-gray-400 mb-4 text-center"> Director : {data.Director} </p>
                    <p className="text-gray-400 mb-4 text-center"> Resume : {data.Plot} </p>
                    <p className="text-gray-400 mb-4 text-center"> Note : {data.imdbRating} </p>
                </div>
            </div>
            <Link href={'/'} className='rounded bg-blue-900 text-white p-8'> Back to the home Page </Link>
        </div>
    );
};

export default Movie;