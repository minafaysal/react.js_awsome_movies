import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import  axios  from 'axios';

export default function DetailsActros() {
    let [searchParams,setSearchParams] = useSearchParams();
  let baseImgSrc = "https://image.tmdb.org/t/p/w500";

    const [person, setPerson] = useState({});

  async  function getPersonDetails(){
    let id =    searchParams.get('id')
       let {data} = await axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=a1bc505bd9d0095c403fb9d28fa78923`);
       setPerson(data);
       console.log(data);
    }
    useEffect(() => {
        getPersonDetails();
    
    
    }, []);
    
  return (
    <>
    <div className='row'>
        <div className='col-md-4'>
      <a href={person.homepage} target='_blank'> <img className='w-100' src={baseImgSrc+person.profile_path} alt={person.profile_path} /></a> 
        </div>
        <div className='col-md-6 text-muted'>
           <h3>{person.name}</h3>
           <p>{person.biography }</p>
           <p>birthDay : {person.birthday}</p>
           <p>popularity : {person.popularity}</p>
           
           <button  className='btn btn-outline-light me-2'><a  className='text-decoration-none text-success' href={person.homepage} target='_blank'>Read More</a></button>

        </div>

    </div>
    </>
  )
}
