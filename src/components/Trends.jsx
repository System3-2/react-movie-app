import axios from 'axios';
import React, { useEffect, useState, useContext } from 'react';
import { Container } from './Navbar';
import { AiOutlineClose, AiFillPlayCircle } from 'react-icons/ai';
import TrailersTrending from './Trailers/TrailersTrending';

const Trends = () => {
  const API = `https://api.themoviedb.org/3/`;
  const trendsShown = '/trending/all/week';
  const images = 'https://image.tmdb.org/t/p/w500';
  //const trendsShown = '/account/watchlist/movies'
  const [trendsArray, setTrendsArray] = useState([]);
  const [ trailer, setTrailer ] = useState(true);
  const [ title, setTitle ] = useState('');
  const { toggle } = useContext(Container)

  const trends = async () => {
    const data = await axios.get(`${API}${trendsShown}`,{
      params: {
        api_key: '3815bdeb8f4e542d67f219491f02f562',

      }
    });
    const results = data.data.results
    setTrendsArray(results);
    console.log(trendsArray);
  }
  useEffect(() => {
    setTimeout(() => {
    trends();
    },1000)
  }, [])
  
 const trendsTitle = (movie) =>{
  setTitle(movie.title);
  setTrailer(!trailer);
 }

  return (
    <>
     <div className={ toggle ? 'mainBgColor' : 'secondaryBgColor'}>
    <div className='movies-container'>
      { trendsArray.map((movie) => {
        const { poster_path, title, id,  } = movie;
        console.log(poster_path);
        return (
         <div id={ trailer ? 'container' : 'NoContainer'}>
            <AiFillPlayCircle color='#fff' fontSize={40} id={ trailer ? 'playIcon' : 'hide'} onClick={() => trendsTitle(movie)}/>
            <img src={ poster_path ? images+poster_path : 'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns='} alt={ title } />
            <h3 className={ toggle ? 'DarkTheme' : 'LightThemeClose'} >{ title}</h3>
         </div>
        )
      })};
      <AiOutlineClose onClick={() => setTrailer(true)} className={ toggle ? 'DarkTheme' : 'LightTheme'} fontSize={55} id={ trailer ? 'Nothing' : ''}/> 
      </div>
      </div>
    </>
  )
}

export default Trends
