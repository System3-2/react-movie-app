import React, { useState, useEffect } from 'react';
import  ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
//import './trailerMovies.css'

const TrailersTvShows = ( { tvShowTitle } ) => {
  const [ video, setVideo ] = useState('');
  const [ videoURL, setVideoURL ] = useState('');

  function handleSearch() {
    console.log(tvShowTitle);
    setVideo(tvShowTitle);
    movieTrailer(video).then(res => {
      console.log(res);
      setVideoURL(res);
    });
  }
  useEffect(() => {
    handleSearch()
  },[videoURL])
  return (
    <>
      <div className="Container">

      </div>
        <div className="player">

          <ReactPlayer url={videoURL}  muted={false}/>
        </div>
    </>
  )
}

export default TrailersTvShows;
