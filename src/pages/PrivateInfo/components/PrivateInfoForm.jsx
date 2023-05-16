import React from 'react';

function PrivateInfoForm() {
  return (
    <form className='w-full max-w-lg flex flex-col justify-between'>
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-1'>
          <label className='text-xl font-bold'>სახელი*</label>
          <input
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='იოსებ'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-xl font-bold'>გვარი*</label>
          <input
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='ჯუღაშვილი'
            type='text'
          />
        </div>
        <div className='flex flex-col gap-1'>
          <label className='text-xl font-bold'>მეილი*</label>
          <input
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='fbi@redberry.ge'
            type='text'
          />
        </div>
      </div>
      <div className='border-t border-t-black w-72 pt-3'>
        <p className='text-zinc-600 text-base'>
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </div>
    </form>
  );
}

export default PrivateInfoForm;
