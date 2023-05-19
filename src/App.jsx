import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, PrivateInfo, Vaccine, Tips } from './pages';
import { CovidCondition } from './pages/CovidCondition';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/privateinfo' element={<PrivateInfo />} />
        <Route path='/covid-condition' element={<CovidCondition />} />
        <Route path='/vaccine' element={<Vaccine />} />
        <Route path='/tips' element={<Tips />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
