import React from 'react';
import { FormWrapper } from '../../components';
import { PrivateInfoForm, PrivateInfoNavigation } from './components';
function PrivateInfo() {
  return (
    <FormWrapper>
      <PrivateInfoForm />
      <div className='image-container relative'>
        <svg
          className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 900 600'
        >
          <rect className='rectangle absolute' x='13%' y='70px' />
        </svg>
        <img
          src='/assets/privateinfo.png'
          className='w-900 -mt-24'
          alt='doctors'
        />
      </div>
      <PrivateInfoNavigation />
    </FormWrapper>
  );
}

export default PrivateInfo;
