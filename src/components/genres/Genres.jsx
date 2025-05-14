import { useFetch } from '@/hooks/useFetch';
import React, { useState } from 'react';

const Genres = ({ setGenre }) => {
  const { data } = useFetch('/genre/movie/list');
  const [activeGenre, setActiveGenre] = useState(null);

  const handleGenreClick = (genre) => {
    setActiveGenre(genre.id);
    setGenre(genre.id.toString());
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex gap-3 overflow-x-auto scrollbar-custom text-white">
        {data?.genres?.map((genre) => (
          <div
            key={genre.id}
            onClick={() => handleGenreClick(genre)}
            className={`cursor-pointer select-none whitespace-nowrap px-4 py-2 rounded-lg transition-all duration-300 ${
              activeGenre === genre.id
                ? 'bg-red-700 text-white'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {genre.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
