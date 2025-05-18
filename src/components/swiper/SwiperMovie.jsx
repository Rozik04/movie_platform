import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import { useFetch } from '../../hooks/useFetch';
import Card from '../../components/movie-view/Card';
import './stylesMovie.css';

const SwiperMovie = () => {
  const { data, error, loading } = useFetch("discover/movie", {
    page: 1,
    with_genres: "",
    without_genres: "18,10749,36",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={20}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="w-full h-[450px] rounded-lg mt-5 mb-10"
    >
      {data?.results?.map((item) => (
        <SwiperSlide key={item.id}>
          <Card item={item}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default React.memo(SwiperMovie);
