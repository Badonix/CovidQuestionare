import React from 'react';
import { RightArrow } from '@/components';
function PrivateInfoNavigation() {
  return (
    <div className='absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center gap-24 justify-between'>
      <div className='w-3'></div>
      <button type='submit'>
        <RightArrow />
      </button>
    </div>
  );
}

export default PrivateInfoNavigation;
