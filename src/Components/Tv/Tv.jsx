import React, { useContext } from 'react'
import { MediaContext } from './../MediaContext/MediaContext';
import { useNavigate } from 'react-router-dom';

export default function Tv() {
  let {trendingTv}  = useContext(MediaContext);
  let navigate = useNavigate();
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";



  function renderTv() {
    return trendingTv.length > 0 ? (
      trendingTv.map((tv, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
            onClick={()=>{goToMovieDetailsTv(tv.id)}}
              className="w-100"
              src={baseImgSrc + tv.poster_path}
              alt={tv.poster_path}
            />
            <h3>{tv.name}</h3>
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
  function goToMovieDetailsTv(id){
    navigate({
     pathname:'/detailsTV',
     search:`?id=${id}`
    })
 }
  return (  <>
  
  <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div  >
        <hr className="w-50"></hr>
          
          <h3 >Trending Tv</h3> 
          <h2> To Watch Now</h2>
          <p className="text-muted">Most Tv Watched by weeke</p>
          <hr className="w-100"></hr>
        </div>
        </div>
       
        {renderTv()}
      </div>
    </>
  )
}
