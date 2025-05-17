import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaAngleRight, FaAngleLeft, FaPlay } from 'react-icons/fa';
import './styles.css';

const Swipers = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const movies = [
    {
      img: 'https://image.tmdb.org/t/p/original/cJvUJEEQ86LSjl4gFLkYpdCJC96.jpg',
      title: 'Funny Movie',
      info: '2024 • Comedy • 1h 34m • EN • 6+'
    },
    {
      img: 'https://image.tmdb.org/t/p/original/9KbUro9uJHUt5xyorQtjWmGfJDE.jpg',
      title: 'Action Hero',
      info: '2023 • Action • 2h 10m • EN • 12+'
    },
    {
      img: 'https://image.tmdb.org/t/p/original/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg',
      title: 'Thrilling Night',
      info: '2022 • Thriller • 1h 55m • EN • 16+'
    },
    {
      img: 'https://image.tmdb.org/t/p/original/kJ5w8LEByIUCXus7mUADIs00cR8.jpg',
      title: 'Adventure Quest',
      info: '2021 • Adventure • 2h 05m • EN • 10+'
    },
    {
      img: 'https://image.tmdb.org/t/p/original/1IWaKG7AWiYMhADxhGtnElDJAGI.jpg',
      title: 'Dramatic Times',
      info: '2020 • Drama • 1h 45m • EN • 14+'
    }
  ];

  return (
    <>
      <Swiper
        navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className='w-full h-[500px] rounded-lg relative'
      >
        {movies.map((movie, index) => (
          <SwiperSlide key={index} className='relative'>
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 rounded-lg'></div>
            <img src={movie.img} alt={`Slide ${index + 1}`} className='w-full h-full object-cover rounded-lg' />
            <div className='absolute inset-0 flex flex-col justify-end items-center p-10'>
              <h2 className='text-white text-3xl font-bold mb-2'>{movie.title}</h2>
              <p className='text-white mb-4 text-lg'>{movie.info}</p>
              <button className='text-red-800 w-[300px] text-xl px-6 py-3 bg-gray-200 bg-opacity-50 rounded-[15px] flex items-center justify-center gap-2 hover:bg-gray-500 transition duration-200 hover:text-white transition duration-200'>
                <FaPlay className='text-2xl' /> Watch
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='container absolute flex flex-row justify-between top-110 z-10'>
        <button className='custom-prev w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-white flex justify-center items-center text-3xl'>
          <FaAngleLeft />
        </button>

        <button className='custom-next w-[50px] h-[50px] bg-[#1D1D1D] rounded-full text-white flex mr-10 justify-center items-center text-3xl'>
          <FaAngleRight />
        </button>
      </div>
    </>
  );
};

export default Swipers;