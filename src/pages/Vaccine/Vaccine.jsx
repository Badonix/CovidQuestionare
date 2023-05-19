import React from 'react';
import { FormWrapper } from '../../components';
import { VaccineForm, VaccineNavigation } from './components';
function Vaccine() {
  return (
    <FormWrapper>
      <VaccineForm />
      <div className='flex justify-end image-container relative'>
        <svg
          className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 900 600'
        >
          <rect className='rectangle absolute' x='13%' y='70px' />
        </svg>
        <img
          src='/assets/doctor.png'
          className='h-full pl-24 py-12'
          alt='doctor'
        />
      </div>
      <VaccineNavigation />
    </FormWrapper>
  );
}

export default Vaccine;
