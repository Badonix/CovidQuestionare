import React from 'react';

function FormWrapper(props) {
  return (
    <section className='px-48 py-24 relative'>
      <div className='pb-2 flex justify-between items-center border-b-2 border-b-black'>
        <img className='h-6' src='/assets/redberry.png' alt='redberry' />
        <p className='text-4xl'>{props.count}/4</p>
      </div>
      <div className='flex max-h-screen350 justify-between'>
        {props.children}
      </div>
    </section>
  );
}

export default FormWrapper;
