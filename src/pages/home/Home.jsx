import React from 'react';
import SwiperContainer from '@/components/swiper/SwiperContainer';
import MovieView from '@/components/movie-view/MovieView';
import Skeleton from '@/components/skeleton/Skeleton';
import { useFetch } from '@/hooks/useFetch';

const Home = () => {
  const { data, error, loading } = useFetch("discover/movie");

  return (
    <div>
      <SwiperContainer />
      {loading && <Skeleton count={10} />}
    </div>
  );
};

export default React.memo(Home);
