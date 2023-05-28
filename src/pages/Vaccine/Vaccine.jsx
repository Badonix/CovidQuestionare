import React from 'react';
import { FormWrapper } from '@/components';
import { VaccineForm } from './components';
function Vaccine() {
  return (
    <FormWrapper count={3}>
      <div className='circle-to-star'></div>
      <VaccineForm />
      <div className='flex justify-end image-container relative'>
        <img
          src='/assets/doctor.png'
          className='h-full pl-24 py-12'
          alt='doctor'
        />
      </div>
    </FormWrapper>
  );
}

export default Vaccine;
