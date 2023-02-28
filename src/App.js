import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import NavBarPage from './Components/Home/NavBarPage';
// import Projects from './Components/Projects/Projects';
import Qualification from './Components/Qualification/Qualification';
import Projects from './Components/About/Projects';
import Challenge from './Components/UIChallengle/Challenge';


function App() {
  return (
    <> 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <NavBarPage/> }> 
            <Route index element={<Hero/>} />
            <Route path='/home' element={ <Hero/> } />
            <Route path='/about' element={ <Qualification/> } />
            <Route path='/project' element={ <About/> } />
            <Route path='/education' element={ <Challenge/> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
