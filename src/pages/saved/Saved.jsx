import MovieView from '@/components/movie-view/MovieView';
import { useStateValue } from '@/context';
import React from 'react';
import no_data from '../../assets/zoom.png';

const Saved = () => {
  const [state] = useStateValue();
  console.log(state.saved);

  if (!state.saved || state.saved.length === 0) {
    return (
      <div className="flex flex-col justify-center items-center h-[60vh] text-white text-lg gap-4">
        <img src={no_data} alt="No Data" className="w-[150px] h-auto object-contain" />
        <p>No saved data yet.</p>
      </div>
    );
  }

  return (
    <div>
      <MovieView data={state.saved} />
    </div>
  );
};

export default Saved;
