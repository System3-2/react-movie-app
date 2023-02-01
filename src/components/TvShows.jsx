import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import './tvshows.css';
import {AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import { Container } from './Navbar';
//import TrailerMovies from './Trailers/TrailersTvShows';
import TrailerTvShows from './Trailers/TrailersTvShows';
const TvShows = () => {
  const [ showData, setShowData ] = useState([]);
  const { toggle, inputValue } = useContext(Container);
  const shown =  inputValue ? 'search' : 'discover';
  const API = `https://api.themoviedb.org/3/${shown}/tv`;
  const images = 'https://image.tmdb.org/t/p/w500';
  const [ trailer, setTrailer ] = useState(true);
  const [ title, setTitle ] = useState('');
  
  


  const tvshows = async() => {
    const data = await axios.get(API, {
      params: {
        api_key: '3815bdeb8f4e542d67f219491f02f562',
        query: inputValue
      }
    })
    const results = data.data.results;
    setShowData(results);
   // console.log(showData);
  }
   useEffect(() => {
    setTimeout(() => {
    tvshows();
    },1000)
  },[inputValue])
   console.log(showData);

   const tvShowTitle = (movie) =>{
    setTitle(movie);
    setTrailer(!trailer);
   }

  return (
    <>
       <div className={ toggle ? 'mainBgColor' : 'secondaryBgColor'}>
        <div className='movies-container'>
      { showData.map((movie) => {
        const {name, poster_path, id } = movie;
        return (
          <>
            <div id={ trailer ? 'container' : 'NoContainer'} key={id}>
            <AiFillPlayCircle color='#fff' fontSize={40} id={ trailer ? 'playIcon' : 'hide'} onClick={() => tvShowTitle(name)}/>
            <img src={ poster_path ? images+poster_path : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='} alt=""/>
            <h3 id={ name.length > 28 ? 'smaller-Text' : ''} className={ toggle ? 'DarkTheme' : 'LightThemeClose'}>{ name }</h3>
            </div>
          </>
          
        )
        
      })};
      { trailer ? console.log  : <TrailerTvShows tvShowsTitle={title}/>}

      <AiOutlineClose onClick={() => setTrailer(true)} className={ toggle ? 'DarkTheme' : 'LightTheme'} fontSize={55} id={ trailer ? 'Nothing' : ''}/>
    </div>
    </div>
  </>
   
  )
}

export default TvShows
