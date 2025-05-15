// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { FaStar } from "react-icons/fa";

// const Card = ({ item }) => {
//   const url = import.meta.env.VITE_IMAGE_URL;
//   const navigate = useNavigate();

//   return (
//     <div
//       onClick={() => navigate(`/movie/${item.id}`)}
//       className="overflow-hidden group relative rounded-lg shadow-md bg-gray-800 hover:shadow-xl transition duration-300 cursor-pointer">
//       <img
//         src={url + item.poster_path}
//         alt={item.title}
//         className="w-full h-[300px] object-cover bg-gradient-to-t from-black/100 to-transparent group-hover:scale-105 transition duration-300"
//       />
//       <div className="absolute bottom-0 top-[260px] left-0 right-0 bg-gradient-to-t from-black/100 to-transparent p-3 duration-300 hover:top-[14rem]">
//         <h3 className="text-white font-semibold text-lg truncate">{item?.title}</h3>
//         <div className='flex flex-row items-center justify-start gap-1'>
//           <p className="text-white font-semibold text-lg truncate">{item?.vote_average.toFixed(1)}</p>
//           <FaStar color='#f5c518' size={15} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default React.memo(Card);


import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";

const Card = ({ item }) => {
  const url = import.meta.env.VITE_IMAGE_URL;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${item.id}`)}
      className="overflow-hidden group relative rounded-lg shadow-md bg-gray-800 hover:shadow-xl transition duration-300">
      <img
        src={url + item.poster_path}
        alt={item.title}
        className="w-full h-[300px] object-cover bg-gradient-to-t from-black/100 to-transparent group-hover:scale-105 transition duration-300"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gray-900/100 p-3 flex justify-between items-center">
        <h3 className="text-white font-semibold text-lg truncate">{item?.title}</h3>
        <div className='flex flex-row items-center justify-start gap-1'>
          <p className="text-white font-semibold text-lg">{item?.vote_average.toFixed(1)}</p>
          <FaStar color='#f5c518' size={15} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Card);

