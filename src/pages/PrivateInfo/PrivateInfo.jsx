import React from 'react';
import { FormWrapper } from '@/components';
import { PrivateInfoForm } from './components';
function PrivateInfo() {
  return (
    <FormWrapper count={1}>
      <div className='circle-to-rectangle'></div>
      <PrivateInfoForm />
      <div className='flex justify-end image-container relative'>
        <img
          src='/assets/privateinfo.png'
          className='h-full pl-24 py-12'
          alt='doctors'
        />
      </div>
    </FormWrapper>
  );
}

export default PrivateInfo;
