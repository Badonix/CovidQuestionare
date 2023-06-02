import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  Landing,
  PrivateInfo,
  Vaccine,
  Tips,
  Thanks,
  CovidCondition,
} from './pages';
import { useForm, FormProvider } from 'react-hook-form';

function App() {
  const defaultValues = {
    ...JSON.parse(localStorage.getItem('privateInfo')),
    ...JSON.parse(localStorage.getItem('privateInfo')),
    ...JSON.parse(localStorage.getItem('vaccine')),
    ...JSON.parse(localStorage.getItem('tips')),
  };
  const methods = useForm({ defaultValues });
  return (
    <BrowserRouter>
      <FormProvider {...methods}>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/privateinfo' element={<PrivateInfo />} />
          <Route path='/covid-condition' element={<CovidCondition />} />
          <Route path='/vaccine' element={<Vaccine />} />
          <Route path='/tips' element={<Tips />} />
          <Route path='/thanks' element={<Thanks />} />
        </Routes>
      </FormProvider>
    </BrowserRouter>
  );
}

export default App;
