import React from 'react';
function PrivateInfoNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <div className='w-3'></div>
      <button type='submit'>
        <img src='/assets/RightArrow.svg' alt='right arrow' />
      </button>
    </div>
  );
}

export default PrivateInfoNavigation;
