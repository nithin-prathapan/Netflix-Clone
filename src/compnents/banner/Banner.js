import React, { useState } from "react";
import "../banner/bnr.css";
import axios from "../axios";
import { useEffect } from "react";
import {API_KEY,imageUrl} from '../../constants/constants'

function Banner() {
  const [movie, setMovie] = useState()
  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`).then((response)=>{
      console.log(response.data.results[0]);

      setMovie(response.data.results[Math.floor(Math.random()*(response.data.results).length)])
    })

  },[])

  
  return (
    <div style={{backgroundImage :`url(${movie ? imageUrl+movie.backdrop_path : ""})` }} className="banner">
      <div className="content">
        
        <h1 id="title">{movie ? movie.title : ""}</h1>
    <i class="fa-solid fa-angles-right"></i>
  

        <button className="banner_buttons">Play</button>
        <button className="banner_buttons">My List</button>
      </div>
      <div id="description">
      <p className="description">
       {movie ? movie.overview : ""}
      </p>
      </div>
     
      <div className="fade_bottom">

      </div>
    </div>
  );
}

export default Banner;
