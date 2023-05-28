import React from 'react';
import { FormWrapper } from 'src/components';
import { CovidConditionForm } from './components';
function CovidCondition() {
  return (
    <FormWrapper count={2}>
      <div className='rectangle-to-circle'></div>
      <CovidConditionForm />
      <div className='image-container relative flex justify-end items-center'>
        <img
          src='/assets/covid-condition.png'
          className='h-full'
          alt='sick guy'
        />
      </div>
    </FormWrapper>
  );
}

export default CovidCondition;
