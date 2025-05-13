import React from 'react';
import Card from './Card';

const MovieView = ({ data }) => {
  return (
    <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 mt-5 mb-15">
      {data?.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default React.memo(MovieView);
