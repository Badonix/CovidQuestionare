import React from 'react';
import { CovidConditionNavigation } from '../CovidConditionNavigation';
import { useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage } from '@hookform/error-message';
function CovidConditionForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  const hadCovid = useWatch({ control, name: 'hadCovid' });
  const hadAntibodyTest = useWatch({ control, name: 'antiBody' });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    navigate('/vaccine');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-auto max-w-lg flex flex-col justify-between'
    >
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-5'>
          <label className='text-xl font-bold'>
            გაქვს გადატანილი Covid-19?*
          </label>
          <div className='flex items-center gap-3'>
            <input
              {...register('hadCovid', { required: true })}
              value='yes'
              name='hadCovid'
              type='radio'
              className='w-6 h-6'
            />
            <label>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input
              {...register('hadCovid', { required: true })}
              value='no'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                hadCovid === 'yes' && reset();
                setValue('hadCovid', 'no');
              }}
            />
            <label>არა</label>
          </div>
          <div className='flex items-center gap-3'>
            <input
              {...register('hadCovid', { required: true })}
              value='now'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                hadCovid === 'yes' && reset();
                setValue('hadCovid', 'now');
              }}
            />
            <label>ახლა მაქვს</label>
          </div>
        </div>

        {hadCovid === 'yes' && hadCovid === 'yes' && (
          <div className='flex flex-col gap-5'>
            <label className='text-xl font-bold'>
              ანტისხეულების ტესტი გაქვს გაკეთებული?*
            </label>
            <div className='flex items-center gap-3'>
              <input
                {...register('antiBody', { required: true })}
                value='yes'
                type='radio'
                className='w-6 h-6'
              />
              <label>კი</label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('antiBody', { required: true })}
                value='no'
                type='radio'
                className='w-6 h-6'
              />
              <label>არა</label>
            </div>
          </div>
        )}
        {hadAntibodyTest === 'yes' && hadCovid === 'yes' && (
          <div className='flex flex-col gap-6 '>
            <label className='text-xl font-bold'>
              თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებითი რიცხვი და
              ანტისხეულების რაოდენობა
            </label>
            <input
              {...register('antibodyDate')}
              className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
              placeholder='რიცხვი'
              type='text'
            />
            <input
              {...register('amount')}
              className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
              placeholder='ანტისხეულების რაოდენობა'
              type='text'
            />
          </div>
        )}
        {hadAntibodyTest === 'no' && hadCovid === 'yes' && (
          <div className='flex flex-col gap-6 relative'>
            <label className='text-xl font-bold'>
              მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*
            </label>
            <input
              {...register('covidDate', {
                required: 'თარიღის ველი აუცილებელია',
                pattern: {
                  value: /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{2}$/,
                  message: 'არასწორი თარიღის ფორმატი',
                },
              })}
              className='px-2 py-2 border border-neutral-700 bg-transparent outline-none'
              placeholder='დდ/თთ/წწ'
              type='text'
            />
            <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
              <ErrorMessage errors={errors} name={'covidDate'} />
            </p>
          </div>
        )}
      </div>
      <div className='border-t border-t-black w-72 pt-3'>
        <p className='text-zinc-600 text-base'>
          *-ით მონიშნული ველების შევსება სავალდებულოა
        </p>
      </div>

      <CovidConditionNavigation />
    </form>
  );
}

export default CovidConditionForm;
