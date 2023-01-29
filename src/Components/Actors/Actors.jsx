import React, { useContext } from 'react'
import { MediaContext } from './../MediaContext/MediaContext';
import { useNavigate } from 'react-router-dom';

export default function Actors() {
  let {trendingPerson}  = useContext(MediaContext);
let navigate = useNavigate()
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";



  function renderPerson() {
    return trendingPerson.length > 0 ? (
      trendingPerson.map((person, index) => {
        return (
          <div key={index} className="col-md-2 my-2">
            <img
            onClick={()=>{goToMovieDetailsPerson(person.id)}}
              className="w-100"
              src={baseImgSrc + person.profile_path}
              alt={person.profile_path}
            />
            <h3>{person.name}</h3>
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
  function goToMovieDetailsPerson(id){
    navigate({
     pathname:'/detailsperson',
     search:`?id=${id}`
    })
  
  }
  return (  <>
  
  <div className="row justify-content-center">
        <div className="col-md-4 d-flex justify-content-center align-items-center">
        <div  >
        <hr className="w-50"></hr>
          
          <h3 >Trending Persons</h3> 
          <h2> To Watch Now</h2>
          <p className="text-muted">Most Person Watched by weeke</p>
          <hr className="w-100"></hr>
        </div>
        </div>
       
        {renderPerson()}
      </div>
    </>
  )
}

