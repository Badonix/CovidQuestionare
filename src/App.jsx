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
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/privateinfo' element={<PrivateInfo />} />
        <Route path='/covid-condition' element={<CovidCondition />} />
        <Route path='/vaccine' element={<Vaccine />} />
        <Route path='/tips' element={<Tips />} />
        <Route path='/thanks' element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
