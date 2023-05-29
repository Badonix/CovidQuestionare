import React from 'react';
import { Link } from 'react-router-dom';
import { RightArrow, LeftArrow } from '@/components';
function CovidConditionNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <Link to='/privateinfo'>
        <LeftArrow />
      </Link>
      <button type='submit'>
        <RightArrow />
      </button>
    </div>
  );
}

export default CovidConditionNavigation;
