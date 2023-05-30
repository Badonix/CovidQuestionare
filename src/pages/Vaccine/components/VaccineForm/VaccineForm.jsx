import { ErrorMessage } from '@hookform/error-message';
import { VaccineNavigation } from '../VaccineNavigation';
import { useVaccineForm } from './useVaccineForm';
function VaccineForm() {
  const {
    onSubmit,
    handleSubmit,
    isVaccinated,
    setValue,
    reset,
    register,
    step,
    waitingFor,
    errors,
  } = useVaccineForm();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='w-full h-auto max-w-lg flex flex-col justify-between'
    >
      <div className='flex flex-col gap-11 pt-8'>
        <div className='flex flex-col gap-5 relative'>
          <label className='text-xl font-bold'>უკვე აცრილი ხარ?*</label>
          <div className='flex items-center gap-3'>
            <input
              {...register('vaccinated', { required: 'ეს ველი აუცილებელია' })}
              value='yes'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                isVaccinated === 'no' && reset();
                setValue('vaccinated', 'yes');
              }}
            />
            <label className='text-xl'>კი</label>
          </div>
          <div className='flex items-center gap-3'>
            <input
              {...register('vaccinated', { required: 'ეს ველი აუცილებელია' })}
              value='no'
              type='radio'
              className='w-6 h-6'
              onChange={() => {
                isVaccinated === 'yes' && reset();
                setValue('vaccinated', 'no');
              }}
            />
            <label className='text-xl'>არა</label>
          </div>
          <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
            <ErrorMessage errors={errors} name={'vaccinated'} />
          </p>
        </div>
        {isVaccinated === 'yes' && (
          <div className='flex flex-col gap-5 relative'>
            <label className='text-xl font-bold'>აირჩიე რა ეტაპზე ხარ*</label>
            <div className='flex items-center gap-3'>
              <input
                {...register('step', { required: 'ეს ველი აუცილებელია' })}
                value='first_dosage_and_registered_on_the_second'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl whitespace-nowrap'>
                პირველი დოზა და დარეგისტრირებული ვარ მეორეზე
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('step', { required: 'ეს ველი აუცილებელია' })}
                value='fully_vaccinated'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl'>სრულად აცრილი ვარ</label>
            </div>
            <div>
              <div className='flex items-center gap-3'>
                <input
                  {...register('step', { required: 'ეს ველი აუცილებელია' })}
                  value='first_dosage_and_not_registered_yet'
                  type='radio'
                  className='w-6 h-6'
                />
                <label className='text-xl whitespace-nowrap'>
                  პირველი დოზა და არ დავრეგისტრირებულვარ მეორეზე
                </label>
              </div>
              {step === 'first_dosage_and_not_registered_yet' && (
                <>
                  <p className='ml-6 mt-4 max-w-230 text-xl '>
                    რომ არ გადადო, ბარემ ახლავე დარეგისტრირდი
                  </p>
                  <a
                    className='ml-6 mt-4 text-xl text-blue-500'
                    href='https://booking.moh.gov.ge/'
                  >
                    https://booking.moh.gov.ge/
                  </a>
                </>
              )}
            </div>
            <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
              <ErrorMessage errors={errors} name={'step'} />
            </p>
          </div>
        )}

        {isVaccinated === 'no' && (
          <div className='flex flex-col gap-5 relative'>
            <label className='text-xl font-bold'>რას ელოდები?*</label>
            <div className='flex items-center gap-3'>
              <input
                {...register('waitingFor', { required: 'ეს ველი აუცილებელია' })}
                value='registered_and_waiting'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl whitespace-nowrap'>
                დარეგისტრირებული ვარ და ველოდები რიცხვს
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('waitingFor', { required: 'ეს ველი აუცილებელია' })}
                value='not_planning'
                type='radio'
                className='w-6 h-6'
              />
              <label className='text-xl'>არ ვგეგმავ</label>
            </div>
            <div>
              <div className='flex items-center gap-3 mb-6'>
                <input
                  {...register('waitingFor', {
                    required: 'ეს ველი აუცილებელია',
                  })}
                  value='had_covid_and_planning_to_be_vaccinated'
                  type='radio'
                  className='w-6 h-6'
                />
                <label className='text-xl whitespace-nowrap'>
                  გადატანილი მაქვს და ვგეგმავ აცრას
                </label>
              </div>
              {waitingFor === 'had_covid_and_planning_to_be_vaccinated' && (
                <a
                  className='ml-6 text-xl text-blue-500'
                  href='https://booking.moh.gov.ge/'
                >
                  👉 https://booking.moh.gov.ge/
                </a>
              )}
            </div>
            <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
              <ErrorMessage errors={errors} name={'waitingFor'} />
            </p>
          </div>
        )}
      </div>
      <VaccineNavigation />
    </form>
  );
}

export default VaccineForm;
