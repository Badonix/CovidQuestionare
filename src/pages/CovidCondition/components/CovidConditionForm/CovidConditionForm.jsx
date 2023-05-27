import React from 'react';

function CovidConditionForm() {
  return (
    <form className='w-full h-auto max-w-lg flex flex-col justify-between'>
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-5'>
          <label className='text-xl font-bold'>
            გაქვს გადატანილი Covid-19?*
          </label>
          <div className='flex items-center gap-3'>
            <input name='covid-test' type='radio' className='w-6 h-6' />
            <label>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input name='covid-test' type='radio' className='w-6 h-6' />
            <label>არა</label>
          </div>
          <div className='flex items-center gap-3'>
            <input name='covid-test' type='radio' className='w-6 h-6' />
            <label>ახლა მაქვს</label>
          </div>
        </div>
        <div className='flex flex-col gap-5'>
          <label className='text-xl font-bold'>
            ანტისხეულების ტესტი გაქვს გაკეთებული?*
          </label>
          <div className='flex items-center gap-3'>
            <input name='antigen-test' type='radio' className='w-6 h-6' />
            <label>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input name='antigen-test' type='radio' className='w-6 h-6' />
            <label>არა</label>
          </div>
        </div>
        {false && (
          <div className='flex flex-col gap-6 '>
            <label className='text-xl font-bold'>
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა*
            </label>
            <input
              className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
              placeholder='რიცხვი'
              type='text'
            />
            <input
              className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
              placeholder='ანტისხეულების რაოდენობა'
              type='text'
            />
          </div>
        )}
        <div className='flex flex-col gap-6 '>
          <label className='text-xl font-bold'>
            მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
          </label>
          <input
            className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
            placeholder='დდ/თთ/წწ'
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

export default CovidConditionForm;
