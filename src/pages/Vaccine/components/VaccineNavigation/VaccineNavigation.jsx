import React from 'react';
import { Link } from 'react-router-dom';
import { LeftArrow, RightArrow } from '@/components';
function VaccineNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <Link to='/covid-condition'>
        <LeftArrow />
      </Link>
      <button type='submit'>
        <RightArrow />
      </button>
    </div>
  );
}

export default VaccineNavigation;
