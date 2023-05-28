import { FormContext } from '@/context';
import { useEffect, useContext } from 'react';
import { getRegisterRequest } from '@/services';

export const usePostData = () => {
  const { getValues } = useContext(FormContext);
  const getData = async (data) => {
    const response = await getRegisterRequest(data);
    return response;
  };
  useEffect(() => {
    const formData = getValues();
    const data = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      had_covid: formData.hadCovid,
      had_vaccine: formData.vaccinated === 'yes' ? true : false,
      non_formal_meetings: formData.onlineMeets,
      number_of_days_from_office: formData.offlineDays,
      what_about_meetings_in_live: formData.offlineMeetThoughts,
      tell_us_your_opinion_about_us: formData.enviromentThoughts,
    };
    if (data.had_covid === 'yes') {
      data.had_antibody_test = formData.antiBody === 'yes' ? true : false;
    }
    if (data?.had_antibody_test) {
      data.antibodies = {
        test_date: formData.antibodyDate,
        number: formData.amount,
      };
    } else if (!data?.had_antibody_test) {
      data.covid_sickness_date = formData.covidDate;
    }

    if (data.had_vaccine) {
      data.vaccination_stage = formData.step;
    } else {
      data.i_am_waiting = formData.waitingFor;
    }
    try {
      getData(data);
    } catch (e) {
      console.log(e);
    }
  });
};
