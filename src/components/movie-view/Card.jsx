import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import { useStateValue } from '@/context';


const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();
  const [state, dispatch] = useStateValue();

  return (
    <div
      onClick={() => navigate(`/movie/${item.id}`)}
      className="overflow-hidden group relative rounded-2xl shadow-md bg-gray-900 hover:shadow-xl transition duration-300 cursor-pointer"
      title={item.title}
    >
      <img
        src={url + item.poster_path}
        alt={item.title}
        className="w-full h-[320px] object-cover rounded-t-2xl group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent rounded-t-2xl pointer-events-none"></div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          dispatch({ type: "SAVED", payload: item });
        }}
        className="absolute top-3 right-3 p-2 bg-black/70 rounded-full hover:bg-black/90 transition"
        style={{ width: 42, height: 42 }}
        aria-label={state.saved.some(({ id }) => id === item.id) ? "Remove bookmark" : "Add bookmark"}
      >
        {state.saved.some(({ id }) => id === item.id) ? (
          <FaBookmark className="text-yellow-400" size={24} />
        ) : (
          <FaRegBookmark className="text-gray-400" size={24} />
        )}
      </button>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900/90 to-transparent px-4 py-3 rounded-b-2xl">
        <h3 className="text-white font-bold text-lg truncate">{item?.title}</h3>

        <div className="flex items-center gap-2 mt-2">
          <FaStar color="#f5c518" size={16} />
          <p className="text-yellow-300 font-semibold text-sm">
            {item?.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);
