import MovieView from '@/components/movie-view/MovieView';
import { useFetch } from '@/hooks/useFetch';
import React, { useState, useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { Pagination } from '@mui/material';
import no_data from '../../assets/zoom.png'


const Search = () => {
  const [inp, setInp] = useState('');
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  
  const { data, error, loading } = useFetch("search/movie", {
    page,
    query,
    without_genres: "18,10749,36",
  });

  const handleChange = (e) => {
    setInp(e.target.value);
  };

  const handleSearch = () => {
    setQuery(inp.trim());
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className='container mx-auto bg-gray-800 text-white w-full h-[50px] flex flex-row gap-4 items-center justify-between rounded-[5px]'>
        <input 
          type="text" 
          placeholder='Search...' 
          className='w-full h-[25px] border-none outline-none text-gray-400 font-opensans' 
          value={inp} 
          onChange={handleChange}
          onKeyDown={(e) => { if (e.key === 'Enter') handleSearch(); }} 
        />
        <button onClick={handleSearch}>
          <IoSearchOutline className='w-[25px] h-[25px] text-gray-500 hover:w-[27px] hover:h-[27px] hover:text-white transition duration-300 cursor-pointer'/>
        </button>
      </div>

      {loading && <p className='text-white text-center mt-4'>Loading...</p>}
      {error && <p className='text-red-500 text-center mt-4'>Error loading data.</p>}

      {!loading && data && data.results && data.results.length > 0 ? (
        <>
          <MovieView data={data.results} />
          <div className="container mx-auto w-full h-[100px] flex justify-center items-center my-10 bg-black rounded-lg shadow-lg">
            <Pagination
              count={data.total_pages > 500 ? 500 : data.total_pages}
              page={page}
              onChange={handlePageChange}
              className="text-white"
              sx={{
                "& .MuiPagination-ul": { color: "white", fontSize: "1.2rem" },
                "& .Mui-selected": { backgroundColor: "#999999 !important", color: "white" },
                "& button": { color: "white", borderColor: "white" },
              }}
            />
          </div>
        </>
      ) : (
        !loading && query && (
          <div className='container mx-auto text-white'>
            <div className='flex flex-col items-center justify-center h-[60vh] gap-4'>
            <img src={no_data} alt="No data" className='w-[150px] h-auto object-contain' />
              <p className='text-lg'>No results found</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Search;
