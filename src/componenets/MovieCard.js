import React from 'react';
import { IMD_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {

 if (!posterPath) return null;

  return (
    <div className='w-32 pr-4'>
        <img 
         alt='Movie Card' 
         src={IMD_CDN_URL + posterPath}
        />
    </div>
  );
};

export default MovieCard;