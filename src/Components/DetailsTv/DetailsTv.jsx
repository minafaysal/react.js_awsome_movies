import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import  axios  from 'axios';
export default function DetailsTv() {

    let [searchParams,setSearchParams] = useSearchParams();
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";

    const [tv, setTv] = useState({});

  async  function getMovieDetails(){
    let id =    searchParams.get('id')
       let {data} = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=a1bc505bd9d0095c403fb9d28fa78923`);
       setTv(data);
    }
    useEffect(() => {
   getMovieDetails();
    
    
    }, [])
    
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
      <a href={tv.homepage} target='_blank'>  <img className='w-100' src={baseImgSrc+tv.poster_path} alt={tv.poster_path} /></a>
        </div>
        <div className='col-md-6 text-muted'>
           <h3>{tv.original_name}</h3>
           <p>{tv.overview }</p>
           <p> tagline : {tv.tagline}</p>
           <p>vote_average : {tv.vote_average}</p>
           <p>status : {tv.status}</p>
           
           <button  className='btn btn-outline-light me-2'><a  className='text-decoration-none text-success' href={tv.homepage} target='_blank'>watch</a></button>
           <button className='btn btn-outline-light'><a  className='text-decoration-none text-success' href={tv.homepage} target='_blank'>Dowenload</a></button>

        </div>

    </div>
    </>
  )
}
