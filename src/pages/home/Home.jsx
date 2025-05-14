import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const {data, error, loading} = useFetch("discover/movie")
  console.log(data?.results);
  

  
  return (
    <div>
      <MovieView data={data?.results}/>
      {loading && <Skeleton count={10}/>}
    </div>
  )
}

export default  React.memo(Home)


