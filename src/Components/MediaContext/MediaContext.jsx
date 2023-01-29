
import { createContext } from 'react';
import axios from "axios";
import { useState, useEffect } from "react";


export const MediaContext = createContext([]);


export function MediaContextProvider(props){
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [trendingTv, setTrendingTv] = useState([]);
    const [trendingPerson, setTrendingPerson] = useState([]);


    async function getMedia(mediaType, callback) {
        let { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=a1bc505bd9d0095c403fb9d28fa78923`
        );
        callback(data.results);
      }


      useEffect(() => {
        getMedia("movie", setTrendingMovies);
        getMedia("tv", setTrendingTv);
        getMedia("person", setTrendingPerson);
      }, []);

      return <MediaContext.Provider value={{trendingMovies,trendingTv,trendingPerson}}>
      {props.children}
      </MediaContext.Provider>
}
