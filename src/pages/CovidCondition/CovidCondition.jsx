import React from 'react';
import { FormWrapper } from '../../components';
import { CovidConditionForm, CovidConditionNavigation } from './components';
function CovidCondition() {
  return (
    <FormWrapper>
      <div className='rectangle-to-circle'></div>
      <CovidConditionForm />
      <div className='image-container relative flex justify-end items-center'>
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
