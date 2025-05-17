import { useFetch } from '@/hooks/useFetch';
import React from 'react';

const Genres = ({ handleChangeGenre, genres }) => {
  const { data } = useFetch('/genre/movie/list');
  const selectedGenres = genres.split("-").slice(1);

  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-4 overflow-x-auto scrollbar-custom text-white px-2">
        {data?.genres?.map((genre) => {
          const isSelected = selectedGenres.includes(genre.id.toString());
          return (
            <button
              key={genre.id}
              onClick={() => handleChangeGenre(genre.id.toString())}
              className={`
                flex-shrink-0
                px-5 py-2.5
                rounded-full
                text-sm font-semibold
                transition-colors duration-300
                cursor-pointer
                ${isSelected ? "bg-red-700 text-white shadow-lg" : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white"}
              `}
              aria-pressed={isSelected}
            >
              {genre.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Genres;
