import Albums from './pages/albums';
import Home from './pages/homepages';
import { Route, Link, BrowserRouter,Routes } from 'react-router-dom';
import NavBar from './pages/navbar';
import About from './pages/about';
import Tour from './pages/tour';
import Video from './pages/video';
import Archive from './pages/archive';
import Merch from './pages/merch';
import About_product from './pages/about_product';
import Auth from './pages/autch';
import Policy from './pages/policy';
import Card from './pages/card';
import Setting from './pages/setting';



function App() {
  return (
      <div className='App'>

        <Routes> 
            <Route path='/' element={<Home/>} />
            <Route path='merch' element={<Merch/>} />
            <Route path='tour' element={<Tour/>} />
            <Route path='video' element={<Video/>} />
            <Route path='about' element={<About/>} />
            <Route path='albums' element={<Albums/>} />
            <Route path='archive' element={<Archive/>} />
        </Routes> 
      </div>
  );
}

export default App;
