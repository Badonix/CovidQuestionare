import React from 'react';

function VaccineForm() {
  return (
    <form className='w-full h-auto max-w-lg flex flex-col justify-between'>
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-5'>
          <label className='text-xl font-bold'>უკვე აცრილი ხარ?*</label>
          <div className='flex items-center gap-3'>
            <input name='covid-test' type='radio' className='w-6 h-6' />
            <label className='text-xl'>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input name='covid-test' type='radio' className='w-6 h-6' />
            <label className='text-xl'>არა</label>
          </div>
        </div>
        {false && (
          <div className='flex flex-col gap-5'>
            <label className='text-xl font-bold'>აირჩიე რა ეტაპზე ხარ*</label>
            <div className='flex items-center gap-3'>
              <input name='antigen-test' type='radio' className='w-6 h-6' />
              <label className='text-xl whitespace-nowrap'>
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='antigen-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>სრულად აცრილი ვარ</label>
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <input name='antigen-test' type='radio' className='w-6 h-6' />
                <label className='text-xl whitespace-nowrap'>
                  პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                </label>
              </div>
              <p className='ml-6 mt-4 max-w-230 text-xl '>
                რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
              </p>
              <a
                className='ml-6 mt-4 text-xl text-blue-500'
                href='https://booking.moh.gov.ge/'
              >
                https://booking.moh.gov.ge/
              </a>
            </div>
          </div>
        )}

        {true && (
          <div className='flex flex-col gap-5'>
            <label className='text-xl font-bold'>რას ელოდები?*</label>
            <div className='flex items-center gap-3'>
              <input name='antigen-test' type='radio' className='w-6 h-6' />
              <label className='text-xl whitespace-nowrap'>
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='antigen-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>არ ვგეგმავ</label>
            </div>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <input name='antigen-test' type='radio' className='w-6 h-6' />
                <label className='text-xl whitespace-nowrap'>
                  გადატანილი მაქვს და ვგეგმავ აცრას
                </label>
              </div>

              <a
                className='ml-6 text-xl text-blue-500'
                href='https://booking.moh.gov.ge/'
              >
                👉 https://booking.moh.gov.ge/
              </a>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default VaccineForm;
