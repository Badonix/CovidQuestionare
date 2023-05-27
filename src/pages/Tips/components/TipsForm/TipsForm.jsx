import React from 'react';
import { Link } from 'react-router-dom';
function TipsForm() {
  return (
    <>
      <form className='relative overflow-y-auto overflow-x-hidden w-full h-auto flex flex-col'>
        <div className='flex flex-col gap-11'>
          <div className='mt-5'>
            <p>
              რედბერის მთავარი ღირებულება ჩვენი გუნდის თითოეული წევრია. გარემო,
              რომელსაც ჩვენი თანამშრომლები ქმნით, ბევრისთვის არის და ყოფილა
              წლების განმავლობაში მიზნებისთვის ერთად ბრძოლის მიზეზი, ბევრისთვის
              კი — ჩვენთან გადმოსვლის.
            </p>
            <p className='mt-3'>
              პანდემიის პერიოდში ერთმანეთსაც იშვიათად ვნახულობთ პირისპირ და
              ყოველდღიური კომუნიკაციაც გაიშვიათდა.
            </p>
          </div>
          <div className='flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </label>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>კვირაში ორჯერ</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>კვირაში ერთხელ</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>ორ კვირაში ერთხელ</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>თვეში ერთხელ</label>
            </div>
          </div>
          <div className='flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              კვირაში რამდენი დღე ისუვრებდი ოფისიდან მუშაობას?*
            </label>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>0</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>1</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>2</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>3</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>4</label>
            </div>
            <div className='flex items-center gap-3'>
              <input name='covid-test' type='radio' className='w-6 h-6' />
              <label className='text-xl'>5</label>
            </div>
          </div>
          <div className='flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              რას ფიქრობ ფიზიკურ შეკრებებზე?
            </label>
            <textarea className='h-44 border border-neutral-700 p-2'></textarea>
          </div>
          <div className='relative flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
              შეცვლიდი?
            </label>
            <textarea className='h-44 border border-neutral-700 p-2'></textarea>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div></div>
          <Link
            className='mt-7 px-7 py-3 bg-cyan-700 rounded-full text-white font-bold'
            to='/thanks'
          >
            დასრულება
          </Link>
        </div>
      </form>
    </>
  );
}

export default TipsForm;
