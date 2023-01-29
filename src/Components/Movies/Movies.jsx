import React, { useContext } from "react";
import { MediaContext } from "../MediaContext/MediaContext";
import { useNavigate } from 'react-router-dom';


export default function Movies() {
  let {trendingMovies} =useContext(MediaContext)
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";
  let navigate = useNavigate();


  function renderMovies() {
    return trendingMovies.length > 0 ? (
      trendingMovies.map((movie, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
              onClick={()=>{goToMovieDetails(movie.id)}}
              className="w-100 movieImg"
              src={baseImgSrc + movie.poster_path}
              alt={movie.poster_path}
            />
            <h3>{movie.original_title}</h3>
          </div>
        );
      })
    ) : (
      <div className="d-flex justify-content-center align-items-center">
        <div className=" spinner-grow text-light ">
          <div className="visually-hidden  "></div>
        </div>
      </div>
    );
  }

  function goToMovieDetails(id){
    navigate({
     pathname:'/details',
     search:`?id=${id}`
    })
  }
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div  >
        <hr className="w-50"></hr>
          
          <h3 >Trending Movies</h3> 
          <h2> To Watch Now</h2>
          <p className="text-muted">Most movies Watched by weeke</p>
          <hr className="w-100"></hr>
        </div>
        </div>
       
        {renderMovies()}
      </div>
    </>
  );
}
