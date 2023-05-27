import React from 'react';
import { Link } from 'react-router-dom';

function PrivateInfoNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <div className='w-3'></div>
      <Link to='/covid-condition'>
        <img src='/assets/RightArrow.svg' alt='right arrow' />
      </Link>
    </div>
  );
}

export default PrivateInfoNavigation;
