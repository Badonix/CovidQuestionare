import React from 'react';
import { Link } from 'react-router-dom';

function Landing() {
  return (
    <section className='h-screen flex justify-center items-center'>
      <div className='relative flex justify-center items-center flex-col mb-32'>
        <div className='z-10 h-48 w-44 flex justify-center bg-bg-light '>
          <img
            src='/assets/landing-logo.svg'
            className='w-24 zoom '
            alt='landing'
          />
        </div>
        <div className='text-center absolute w-44 reveal-text'>
          <Link className='leading-9 cursor-pointer text-3xl font-bold text-center reveal-text'>
            კითხვარის დაწყება
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
