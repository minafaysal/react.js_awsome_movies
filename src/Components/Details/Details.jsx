import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import  axios  from 'axios';

export default function Details() {
    let [searchParams,setSearchParams] = useSearchParams();
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";

    const [movie, setMovie] = useState({});

  async  function getMovieDetails(){
    let id =    searchParams.get('id')
       let {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a1bc505bd9d0095c403fb9d28fa78923`);
       setMovie(data);
       console.log(data.poster_path);
    }
    useEffect(() => {
   getMovieDetails();
    
    
    }, [])
    
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
       <a href={movie.homepage} target='_blank'><img className='w-100' src={baseImgSrc+movie.poster_path} alt={movie.poster_path} /></a> 
        </div>
        <div className='col-md-6 text-muted'>
           <h3>{movie.original_title}</h3>
           <p>{movie.overview }</p>
           <p> tagline : {movie.tagline}</p>
           <p>vote_average : {movie.vote_average}</p>
           <p>status : {movie.status}</p>
           
           <button  className='btn btn-outline-light me-2'><a  className='text-decoration-none text-success' href={movie.homepage} target='_blank'>watch</a></button>
           <button className='btn btn-outline-light'><a  className='text-decoration-none text-success' href={movie.homepage} target='_blank'>Dowenload</a></button>

        </div>

    </div>
    </>
  )
}
