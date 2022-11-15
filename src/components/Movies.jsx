import axios from 'axios'
import React, { useEffect, useState, useContext} from 'react';
import { AiFillPlayCircle, AiOutlineClose } from 'react-icons/ai';
import { Container } from './Navbar';
import '../components/movies.css';
import TrailerMovies from './Trailers/TrailerMovies';

const Movies = () => {
  const { toggle, inputValue } = useContext(Container);
  const [ moviesData, setMoviesData] = useState([]);
  const [ trailer, setTrailer ] = useState(true);
  const [ title, setTitle ] = useState('');
  const shown =  inputValue ? 'search' : 'discover';

  const API = `https://api.themoviedb.org/3/${shown}/movie`;
  const images = 'https://image.tmdb.org/t/p/w500';
  const movieCall = async () =>{
    const data = await axios.get(API,{
      params: {
        api_key: '3815bdeb8f4e542d67f219491f02f562',
        query: inputValue
      }
    })
   // console.log(data);
    const results = data.data.results;
    setMoviesData(results);
  }
  useEffect(() => {
    setTimeout(() => {
    movieCall();

    }, 1000)
  },[inputValue]);
 // console.log(moviesData);

 
 const tvShowTitle = (movie) =>{
  setTitle(movie.title);
  setTrailer(!trailer);
 }

  return (
    <>
    <div className={ toggle ? 'mainBgColor' : 'secondaryBgColor'}>
    <div className='movies-container'>
      { moviesData.map(movie => {

        const { poster_path, title, id,  } = movie;
       // console.log(poster_path);
        return <>
          <div id={ trailer ? 'container' : 'NoContainer'} key={id}>
            <AiFillPlayCircle color='#fff' fontSize={40} id={ trailer ? 'playIcon' : 'hide'} onClick={() => tvShowTitle(movie)}/>
            <img src={ poster_path ? images+poster_path :  'https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns=' } alt={poster_path} />
            <h3 id={ title.length > 28 ? 'smaller-Text' : ''} className={ toggle ? 'DarkTheme' : 'LightThemeClose'}>{ title}</h3>
          </div>
        </>
      })};
      { trailer ? console.log : <TrailerMovies moviesTitle={title}/>}
        <AiOutlineClose onClick={() => setTrailer(true)} className={ toggle ? 'DarkTheme' : 'LightTheme'} fontSize={55} id={ trailer ? 'Nothing' : ''}/>
      </div>
      </div> 
    </>
  )
}

export default Movies
