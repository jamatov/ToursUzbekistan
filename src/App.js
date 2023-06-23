import './App.scss';
import './Responsive.scss';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Tours from './Pages/Tours';
import Transport from './Pages/Transport';
import SetCodes from './Pages/SetCodes';
import Samarkand from './Pages/Samarkand';
import Bukhara from './Pages/Bukhara';
import Khiva from './Pages/Khiva';
import ScrollToTop from './Components/ScrollToTop';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/transport' element={<Transport/>}/>
        <Route path='/aboutPage' element={<About/>}/>
        <Route path='/samarkand' element={<Samarkand />}/>
        <Route path='/bukhara' element={<Bukhara/>}/>
        <Route path='/khiva' element={<Khiva />}/>
      </Routes>
      <SetCodes />
    </div>
  );
}

export default App;
