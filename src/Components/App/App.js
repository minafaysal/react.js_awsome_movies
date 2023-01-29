 import styles from './App.module.css';
import React from 'react';
import Navber from '../Navber/Navber';
import Home from './../Home/Home';
import NotFonud from '../NotFound/NotFonud';
import { Route, Routes, useNavigate } from 'react-router-dom';

import Register from '../Register/Register';
import Login from '../Login/Login';
import Tv from '../Tv/Tv';
import Movies from '../Movies/Movies';
import Actors from '../Actors/Actors';
import About from './../About/About';
import LandingPage from '../LandinPage/LandingPage';
import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useEffect } from 'react';
import ProtectedRout from '../ProtectedRoute/ProtectedRout';
import Details from '../Details/Details';
import { MediaContextProvider } from '../MediaContext/MediaContext';
import Footer from '../Footer/Footer';
import DetailsTv from './../DetailsTv/DetailsTv';
import DetailsActros from './../DetailsActros/DetailsActros';

function App() {
  const [loginData, setLoginData] = useState(null);
  let navigate = useNavigate();

 function getUserData(){
 let token = sessionStorage.getItem('userToken');
 let decode = jwtDecode(token);
 setLoginData(decode)

 }
 function logOut(){
  sessionStorage.removeItem('userToken');
  setLoginData(null);
  navigate('/login');
 }
 useEffect(() => {
  if(sessionStorage.getItem('userToken')){
    getUserData();
  }
 }, [])
 
  return (
   
          <React.Fragment >
      
            <MediaContextProvider>
            <Navber loginData={loginData} logOut={logOut}/>
           
            <div className={`container-fluid  ${styles.main}`}>
            <Routes>
              
              
              <Route path='/home' element={<ProtectedRout><Home/></ProtectedRout> } />
              <Route path='/about' element={<ProtectedRout><About/></ProtectedRout>} />
              <Route path='/movies' element={<ProtectedRout><Movies/></ProtectedRout>} />
              <Route path='/tv' element={<ProtectedRout><Tv/></ProtectedRout>} />
              <Route path='/actors' element={<ProtectedRout><Actors/></ProtectedRout>} />
              <Route path='/detailsMovie' element={<ProtectedRout><Details/></ProtectedRout>}/>
              <Route path='/detailsTV' element={<ProtectedRout><DetailsTv/></ProtectedRout>}/>
              <Route path='/detailsperson' element={<ProtectedRout><DetailsActros/></ProtectedRout>}/>

     
              <Route path='/' element={<LandingPage/>} />
              <Route path='/Noxi-Movies//' element={<LandingPage/>}/>
              <Route path='/register' element={<Register/>} />
              <Route path='/login' element={ < Login getUserData={getUserData}/>} />
              <Route path='*' element={<NotFonud/>} />

            </Routes>
            </div>
           
            </MediaContextProvider>
            <Footer/>
          </React.Fragment>
    
  );
}

export default App;
