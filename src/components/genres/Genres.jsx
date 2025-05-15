import { useFetch } from '@/hooks/useFetch';
import React, { useState } from 'react';

const Genres = ({handleChangeGenre, genres }) => {
  const { data } = useFetch('/genre/movie/list');
  const array = genres.split("-").slice(1);


  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-custom text-white">
        {data?.genres?.map((genre) => (
          <div
            key={genre.id}
            onClick={() => handleChangeGenre(genre.id.toString())}
              className={`${
                array.includes(genre.id.toString()) ? "bg-red-700 text-white" : "bg-gray-800 text-white"
                } flex justify-center items-center w-[150px] h-[40px] cursor-pointer select-none p-2.5 rounded-2xl`}

          >
          {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;