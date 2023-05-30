import React from 'react';
import { Link } from 'react-router-dom';
import { LandingLogo } from '@/components';
function Landing() {
  return (
    <section className='h-screen flex justify-center items-center'>
      <div className='relative flex justify-center items-center flex-col mb-32'>
        <div className='z-10 w-44 flex justify-center bg-bg-light '>
          <LandingLogo />
        </div>
        <div className='text-center absolute w-44 reveal-text'>
          <Link
            to='/privateinfo'
            className='leading-9 landing-btn-hover transition-all cursor-pointer text-3xl font-bold text-center reveal-text'
          >
            კითხვარის დაწყება
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Landing;
