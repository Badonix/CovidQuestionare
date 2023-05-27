import React from 'react';
import { Link } from 'react-router-dom';

function CovidConditionNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <Link to='/privateinfo'>
        <img src='/assets/LeftArrow.svg' alt='left arrow' />
      </Link>
      <button type='submit'>
        <img src='/assets/RightArrow.svg' alt='right arrow' />
      </button>
    </div>
  );
}

export default CovidConditionNavigation;
