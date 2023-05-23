import React from 'react';
import { FormWrapper } from '../../components';
import { TipsForm, TipsNavigation } from './components';
function Tips() {
  return (
    <FormWrapper>
      <div className='star-to-heart'></div>
      <TipsForm />
      <div className='flex justify-end image-container relative'>
        <img
          src='/assets/office.png'
          className='h-full pl-24 py-12'
          alt='doctors'
        />
      </div>
      <TipsNavigation />
    </FormWrapper>
  );
}

export default Tips;
