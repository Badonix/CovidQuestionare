import React from 'react';
import { Link } from 'react-router-dom';
function TipsNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <Link to='/vaccine'>
        <img src='/assets/LeftArrow.svg' alt='left arrow' />
      </Link>
    </div>
  );
}

export default TipsNavigation;
