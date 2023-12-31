import React from 'react';
import { useThanks } from './useThanks';
import { usePostData } from '@/hooks';
function Thanks() {
  useThanks();
  usePostData();
  return (
    <section className='bg-neutral-800 h-screen flex items-center justify-center'>
      <div className='relative thanks-container'>
        <img
          className='star big-star w-12 absolute'
          src='/assets/big-star.png'
          alt='star'
        />
        <h2 className='text-white text-6xl font-bold tracking-widest'>
          მადლობა
        </h2>
        <img
          className='star small-star w-8 absolute'
          src='/assets/small-star.png'
          alt='star'
        />
      </div>
    </section>
  );
}

export default Thanks;
