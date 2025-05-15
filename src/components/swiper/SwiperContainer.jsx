import React from 'react';
import Swipers from '@/components/swiper/swiper';
import SwiperMovie from '@/components/swiper/SwiperMovie';
import { useNavigate } from 'react-router-dom';

const SwiperContainer = () => {
  let navigate = useNavigate()
 
  return (
    <div className="container mx-auto mt-8 space-y-8">
      <div className="rounded-lg overflow-hidden shadow-lg">
        <Swipers />
      </div>
    <div className='flex flex-col gap-0 mt-20 text-xl'>
      <div className='text-white large-text flex flex-row font-Aeonik Pro items-center justify-between'>
        <ul>In The Week</ul>
        <ul onClick={()=>{navigate("/movies")}} className='text-red-700  hover:underline cursor-pointer'>See All</ul>
      </div>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <SwiperMovie />
      </div>
    </div>
    </div>
  );
};

export default SwiperContainer;
