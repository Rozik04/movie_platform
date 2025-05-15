import Genres from '@/components/genres/Genres'
import MovieView from '@/components/movie-view/MovieView'
import Skeleton from '@/components/skeleton/Skeleton'
import { useFetch } from '@/hooks/useFetch'
import { Pagination } from '@mui/material'
import React, { useCallback, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import no_data from '../../assets/no_data.png'

const Movies = () => {
  const [params, setParams] = useSearchParams()
  const page = params.get("page") || 1
  let genres = params.get("genres") || ""
  let with_genres = genres.split("-").join(",").slice(1)
  const {data, error, loading} = useFetch("discover/movie", {page, with_genres, without_genres: "18,10749,36"})
   window.scroll(0,0)

  const handleChangeGenre = useCallback((id)=>{
    let array = genres.split("-")
    if(array.includes(id)){
      genres = array.filter((i) => i !== id).join("-")
    }else {
      genres += `-${id}`
    }

    if(!genres){
      params.delete("genres")
    }else{
      params.set("genres", genres)
    }
    params.set("page", "1")
    setParams(params)
  })


  let handleChange = (event, value) =>{
    params.set("page", value.toString())
    setParams(params)
  }

  return (
   data && data.results && data.results.length > 0 ? (
          <div>
      <Genres genres={genres} handleChangeGenre={handleChangeGenre} />
      <MovieView data={data?.results}/>
      {loading && <Skeleton count={20}/>}

<div className="container mx-auto w-full h-[100px] flex justify-center items-center my-10 bg-black rounded-lg shadow-lg">
  <Pagination count={data?.total_pages > 500 ? 500 : data?.total_pages} page={Number(page)} onChange={handleChange}
    className="text-white" sx={{"& .MuiPagination-ul": {  color: "white",  fontSize: "1.2rem",},
      "& .Mui-selected": {  backgroundColor: "#999999 !important",   color: "white",},
      "& button": { color: "white", borderColor: "white", },}}/>
    </div>
    </div>
    ) : (
      <div className='container mx-auto text-white'>
        <div className='flex items-center justify-center translate-y-[100px]'>
          <img src={no_data} alt="" />
        </div>
       </div>
    )
  )
}

export default  React.memo(Movies)