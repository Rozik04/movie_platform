import MovieView from '@/components/movie-view/MovieView';
import { useFetch } from '@/hooks/useFetch';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar } from "react-icons/fa";
import languageNameMap from 'language-name-map';


const SingleMovie = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const url = import.meta.env.VITE_IMAGE_URL;
    const { data } = useFetch(`/movie/${id}`);
    const { data: images } = useFetch(`/movie/${id}/images`);        
    const { data: similars } = useFetch(`/movie/${id}/similar`);
    const [index, setIndex] = useState(null);
    const [oneImage, setOneImage] = useState(false)
    window.scrollTo(0, 0)

    const ImageCard = ({ item, isSimilar = false, onClick  }) => (
        <div
            onClick={onClick}
            className={`group relative overflow-hidden rounded-lg shadow-md bg-gray-800 hover:shadow-xl transition duration-300 cursor-pointer ${isSimilar ? 'h-[300px]' : 'h-[150px]'}`}>
            <img 
                src={url + (item.file_path || item.poster_path)}
                alt=""
                  className={`w-full object-cover group-hover:scale-105 group-hover:opacity-40 transition duration-300 ${isSimilar ? 'h-[300px]' : 'h-[150px]'}`} />
        </div>
    );

    const handleSwiper = (i) => {
        setIndex(i);
        setOneImage(true); 
        window.scrollTo(0, 0)
    };
return (
    <div className='container mx-auto text-white mb-[30px] overflow-hidden select-none'>
        {
            oneImage && images?.backdrops[index] ? (
                <div className='relative mt-10'>
                    <img src={url + images.backdrops[index].file_path} alt="" className="w-full h-[700px] rounded-[30px] object-cover" />
                    <button
                        onClick={() => setOneImage(false)}
                        className='absolute w-[40px] top-0 left-275  mt-4 p-2 bg-gray-700 text-white rounded-[30px] hover:bg-red-700 transition'>✕</button>
                </div>
            ) : (
                <>
                    <div className='mb-4'>
                        {data?.backdrop_path ? (
                            <div className="relative select-none overflow-hidden">
                                <img src={url + data.backdrop_path} alt={data.title} className="w-full rounded-[30px] h-[500px] object-cover" />
                                    <div className="absolute bottom-0 left-0 right-0 top-[27rem] p-4 bg-gradient-to-t -mb-5 from-black/100 to-transparent flex flex-col gap-0 transition-all duration-300 hover:top-[19rem]">
                                    <h1 className='text-4xl font-bold mb-2' style={{ fontFamily: 'Verdana, sans-serif' }}>
                                        {data?.title ?? 'No Title'}
                                    </h1>
                                    <p className='mb-4 line-clamp-3' style={{ fontFamily: 'Verdana, sans-serif', fontSize: '18px' }}> 
                                        {data?.overview ?? 'No overview available.'}
                                    </p>
                                    <div className='select-none flex items-center gap-4'>
                                         <div className='flex items-center gap-1'>
                                            <p className='text-xl font-semibold'>
                                             {data?.vote_average ? data.vote_average.toFixed(1) : 'N/A'}
                                                </p>
                                                <FaStar color='#f5c518' size={15} />
                                            </div>
                                            <p className='text-xl font-semibold'>
                                                {data?.release_date ? new Date(data.release_date).toLocaleDateString() : 'No release date'}
                                            </p>
                                            <p className='text-xl font-semibold uppercase'>
                                                {languageNameMap[data?.original_language] ?? data?.original_language}
                                            </p>
                                        </div>

                                </div>
                            </div>
                        ) : (
                            <p>No image</p>
                        )}
                    </div>

                    <div className='overflow-x-auto scrollbar-custom'>
                        <div className='flex gap-4 mb-6  w-[2500px] h-[150px]'>
                            {images?.backdrops?.slice(0, 8)?.length > 0 ? (
                                images.backdrops.slice(0, 8).map((image, index) => (
                                    <ImageCard key={index} item={image} onClick={() => handleSwiper(index)} />
                                ))
                            ) : (
                                <p>No images</p>
                            )}
                        </div>
                    </div>

                    <div>
                        <h3 className='text-center text-2xl font-bold mb-15 mt-10'>For You</h3>
                        {similars?.results?.length > 0 ? (
                            <MovieView data={similars.results.slice(0, 4)} />
                        ) : (
                            <p>No similar movies found</p>
                        )}
                    </div>
                </>
            )
        }
    </div>
);
};

export default SingleMovie;


