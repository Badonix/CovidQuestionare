import React from 'react';
import { FormWrapper } from '../../components';
import { CovidConditionForm, CovidConditionNavigation } from './components';
function CovidCondition() {
  return (
    <FormWrapper>
      <CovidConditionForm />
      <div className='image-container relative flex justify-end items-center'>
        {/* <svg
          className='w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 900 600'
        >
          <rect className='rectangle absolute' x='13%' y='70px' />
        </svg> */}
        <img
          src='/assets/covid-condition.png'
          className='h-full'
          alt='sick guy'
        />
      </div>
      <CovidConditionNavigation />
    </FormWrapper>
  );
}

export default CovidCondition;
