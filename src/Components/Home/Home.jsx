import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MediaContext } from "./../MediaContext/MediaContext";

export default function Home() {
  let { trendingMovies, trendingTv, trendingPerson } = useContext(MediaContext);

  let navigate = useNavigate();

  let baseImgSrc = "https://image.tmdb.org/t/p/w500";

  function renderMovies() {
    return trendingMovies.length > 0 ? (
      trendingMovies.map((movie, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
              onClick={() => {
                goToMovieDetailsMovie(movie.id);
              }}
              className="w-100 movieImg"
              src={baseImgSrc + movie.poster_path}
              alt={movie.poster_path}
            />
            <h3>{movie.original_title}</h3>
          </div>
        );
      })
    ) :'';
  }
  function renderTv() {
    return trendingTv.length > 0 ? (
      trendingTv.map((tv, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
              onClick={() => {
                goToMovieDetailsTv(tv.id);
              }}
              className="w-100"
              src={baseImgSrc + tv.poster_path}
              alt={tv.poster_path}
            />
            <h3>{tv.original_name}</h3>
          </div>
        );
      })
    ) :'';
  }
  function renderPerson() {
    return trendingPerson.length > 0 ? (
      trendingPerson.map((person, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
              onClick={() => {
                goToMovieDetailsPerson(person.id);
              }}
              className="w-100"
              src={baseImgSrc + person.profile_path}
              alt={person.profile_path}
            />
            <h3>{person.original_title}</h3>
          </div>
        );
      })
    ) : '';
  }
  function goToMovieDetailsMovie(id) {
    navigate({
      pathname: "/detailsMovie",
      search: `?id=${id}`,
    });
  }
  function goToMovieDetailsTv(id) {
    navigate({
      pathname: "/detailsTV",
      search: `?id=${id}`,
    });
  }
  function goToMovieDetailsPerson(id) {
    navigate({
      pathname: "/detailsperson",
      search: `?id=${id}`,
    });
  }

  return <>
  {trendingMovies.length>0?  <div>
   <div className="row justify-content-center">
        <>
          <div className="row justify-content-center">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div>
                <hr className="w-50"></hr>

                <h3>Trending Movies</h3>
                <h2> To Watch Now</h2>
                <p className="text-muted">Most movies Watched by weeke</p>
                <hr className="w-100"></hr>
              </div>
            </div>

            {renderMovies()}
          </div>
          <div className="col-md-4 d-flex justify-content-center align-items-center">
            <div>
              <hr className="w-50"></hr>

              <h3>Trending Tv</h3>
              <h2> To Watch Now</h2>
              <p className="text-muted">Most Tv Watched by weeke</p>
              <hr className="w-100"></hr>
            </div>
          </div>
        </>
        {renderTv()}
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
          <div>
            <hr className="w-50"></hr>

            <h3>Trending Person</h3>
            <h2> To Watch Now</h2>
            <p className="text-muted">Most Person Watched by weeke</p>
            <hr className="w-100"></hr>
          </div>
        </div>

        {renderPerson()}
      </div>
      
   </div>  : (<div className="d-flex align-items-center vh-100  justify-content-center  ">
    <div >
        <div className=" spinner-grow text-light ">
          <div className="visually-hidden"><p>loading</p></div>
        </div>
        
       

      </div>
   </div>
    
    )}
  
    </>
  
}
