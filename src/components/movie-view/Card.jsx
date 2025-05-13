import React from 'react';

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md bg-gray-800 hover:shadow-xl transition duration-300">
      <img
        src={url + item.poster_path}
        alt={item.title}
        className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-3">
        <h3 className="text-white font-semibold text-lg truncate">{item?.title}</h3>
      </div>
    </div>
  );
};

export default React.memo(Card);
