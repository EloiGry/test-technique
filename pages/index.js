import useSWR from 'swr'
import { useState } from 'react'
import MoviesList from '../components/MoviesList'
import Pagination from '../components/Layout/Pagination'
import SearchBar from '../components/Layout/Header/SearchBar'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Home() {
  const [searchMovies, setSearchMovies] = useState(null)
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    if (e.target.value.length > 2) {
      setSearchMovies(e.target.value)
    }
  }

  const { data, error } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}?s=null&page=${page}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher)
  const { data : result, error : problem } = useSWR(`${process.env.NEXT_PUBLIC_API_URL}?s=${searchMovies}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`, fetcher)
 
  if (error || problem) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div> 
      <SearchBar onChange={(e) => handleSearch(e)} movies={result?.Search} searchMovies={searchMovies}/>
      <MoviesList movies={data.Search}/>
      <Pagination page={page} onClickPrevious={() => setPage(page - 1)} onClickNext={() => setPage(page + 1)}/>
    </div>
  )
}
