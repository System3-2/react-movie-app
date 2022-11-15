import React, { useState, useEffect } from 'react';
import  ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';
import './trailerMovies.css'

const TrailersTrending = ( { moviesTitle }) => {
  const [ video, setVideo ] = useState('');
  const [ videoURL, setVideoURL ] = useState('');

  function handleSearch({ trendsTitle }) {
    setVideo(trendsTitle);
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

export default TrailersTrending;
