import { useTipsForm } from './useTipsForm';
import { ErrorMessage } from '@hookform/error-message';
function TipsForm() {
  const { handleSubmit, onSubmit, register, errors } = useTipsForm();
  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='relative overflow-y-auto overflow-x-hidden w-full h-auto flex flex-col'
      >
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
          <div className='flex flex-col gap-5 pt-4 relative'>
            <label className='text-xl font-bold'>
              რა სიხშირით შეიძლება გვქონდეს საერთო არაფორმალური ონლაინ
              შეხვედრები, სადაც ყველა სურვილისამებრ ჩაერთვება?*
            </label>
            <div className='flex items-center gap-3'>
              <input
                {...register('onlineMeets', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={'twice_a_week'}
                id='twice_a_week'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='twice_a_week' className='text-xl'>
                კვირაში ორჯერ
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('onlineMeets', {
                  required: 'ეს ველი აუცილებელია',
                })}
                id='once_a_week'
                value={'once_a_week'}
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='once_a_week' className='text-xl'>
                კვირაში ერთხელ
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('onlineMeets', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={'once_in_a_two_weeks'}
                id='once_in_a_two_weeks'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='once_in_a_two_weeks' className='text-xl'>
                ორ კვირაში ერთხელ
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('onlineMeets', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={'once_in_a_month'}
                id='once_in_a_month'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='once_in_a_month' className='text-xl'>
                თვეში ერთხელ
              </label>
            </div>
            <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
              <ErrorMessage errors={errors} name={'onlineMeets'} />
            </p>
          </div>
          <div className='flex flex-col gap-5 pt-4 relative'>
            <label className='text-xl font-bold'>
              კვირაში რამდენი დღე ისუვრებდი ოფისიდან მუშაობას?*
            </label>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={0}
                id='0-days'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='0-days' className='text-xl'>
                0
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={1}
                id='1-days'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='1-days' className='text-xl'>
                1
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                id='2-days'
                value={2}
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='2-days' className='text-xl'>
                2
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={3}
                id='3-days'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='3-days' className='text-xl'>
                3
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={4}
                id='4-days'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='4-days' className='text-xl'>
                4
              </label>
            </div>
            <div className='flex items-center gap-3'>
              <input
                {...register('offlineDays', {
                  required: 'ეს ველი აუცილებელია',
                })}
                value={5}
                id='5-days'
                type='radio'
                className='w-6 h-6'
              />
              <label htmlFor='5-days' className='text-xl'>
                5
              </label>
            </div>
            <p className='text-orange-600 whitespace-nowrap text-base ml-2 absolute -bottom-8'>
              <ErrorMessage errors={errors} name={'offlineDays'} />
            </p>
          </div>
          <div className='flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              რას ფიქრობ ფიზიკურ შეკრებებზე?
            </label>
            <textarea
              {...register('offlineMeetThoughts')}
              className='h-44 border border-neutral-700 p-2'
            ></textarea>
          </div>
          <div className='relative flex flex-col gap-5 pt-4'>
            <label className='text-xl font-bold'>
              რას ფიქრობ არსებულ გარემოზე: რა მოგწონს, რას დაამატებდი, რას
              შეცვლიდი?
            </label>

            <textarea
              {...register('enviromentThoughts')}
              className='h-44 border border-neutral-700 p-2'
            ></textarea>
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div></div>
          <button
            type='submit'
            className='mt-7 px-7 py-3 bg-cyan-700 rounded-full text-white font-bold'
            to='/thanks'
          >
            დასრულება
          </button>
        </div>
      </form>
    </>
  );
}

export default TipsForm;
