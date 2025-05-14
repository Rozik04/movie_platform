import Genres from '@/components/genres/Genres'
import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'

const Movies = () => {
  const [genre, setGenre] = useState("")
  const {data, error, loading} = useFetch("discover/movie", {page: 1, with_genres:genre, without_genres: "18,10749,36"})
  console.log(data?.results);

  return (
    <div>
      <Genres setGenre={setGenre}/>
      <MovieView data={data?.results}/>
      {loading && <Skeleton count={10}/>}
    </div>
  )
}

export default  React.memo(Movies)