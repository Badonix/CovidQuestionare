import React from 'react';
import { Link } from 'react-router-dom';
function VaccineNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <Link to='/covid-condition'>
        <img src='/assets/LeftArrow.svg' alt='left arrow' />
      </Link>
      <Link to='/tips'>
        <img src='/assets/RightArrow.svg' alt='right arrow' />
      </Link>
    </div>
  );
}

export default VaccineNavigation;