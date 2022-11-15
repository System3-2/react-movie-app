import React, { useState} from 'react';
import { HiSearch } from 'react-icons/hi';
import { Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Movies from './Movies';
import Trends from './Trends';
import Pricing from './Pricing';
import TvShows from './TvShows';
import '../styles/Navbar.css';


export const Container = React.createContext();

const Navbar = () => {
  const [toggle, setToggle ] = useState(true);
  const [ inputValue, setInputValue ] = useState('');
  return <Container.Provider value={{toggle, inputValue}}>
    <>
      <nav className={ toggle ? '' : 'navBarColor'}>
        <div className="nav-options">
          <h1 id={ toggle ? '' : 'heading'}>MoviesFlix</h1>
          <Link to='/' >
            <span id={ toggle ? '' : 'MoviesLight'}>Movies</span>
          </Link>
          <Link to='TvShows'>
            <span id={ toggle ? '' : 'MoviesLight'}>TV Shows</span>
          </Link>
          <Link to='Trends'>
            <span id={ toggle ? '' : 'MoviesLight'}>Trending</span>
          </Link>
          <Link to='Pricing'>
            <span id={ toggle ? '' : 'MoviesLight'}>Pricing</span>
          </Link>
        </div>
        <div className="input-group">
        <input type="text" placeholder='Search a Movie' onChange={(e) => setInputValue(e.target.value)}/>
        <HiSearch fontSize={21} color='black'id='search' />
        <div id="Color-switcher" onClick={() => setToggle(!toggle)}>
          <div id={ toggle ? 'Color-switcher-mover' : 'Color-switcher-moved'}></div>
        </div>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Movies />} /> 
        <Route path='TvShows' element={<TvShows />} />
        <Route path='Trends' element={<Trends />} />
        <Route path='Pricing' element={<Pricing />} />
      </Routes>
    </>
  </Container.Provider>

}

export default Navbar
