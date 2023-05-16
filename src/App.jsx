import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing, PrivateInfo } from './pages';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/privateinfo' element={<PrivateInfo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
