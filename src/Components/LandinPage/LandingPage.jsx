import React from 'react'
import styles from './LandingPage.module.css'
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  let navigate = useNavigate();
 function goToLogin(){
  navigate('/login')
  }
  return <>
  <div className={styles.main}  >
    <h3 className=' fs-4'>Welcome  </h3>
    <p className=' fs-3 '>Millions of movies,<br/> TV shows and people to discover.<br/> Explore now.</p>
    <button onClick={()=>{goToLogin()}} className=' btn bg-info fs-3  '>Watch Now</button>

  </div>
 
  </>
    
  
}
