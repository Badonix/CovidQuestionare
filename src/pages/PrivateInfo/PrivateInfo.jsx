import React from 'react';
import { FormWrapper } from '../../components';
import { PrivateInfoForm } from './components';
function PrivateInfo() {
  return (
    <FormWrapper>
      <PrivateInfoForm />
      <img
        src='/assets/privateinfo.png'
        className='w-900 -mt-24'
        alt='doctors'
      />
    </FormWrapper>
  );
}

export default PrivateInfo;
