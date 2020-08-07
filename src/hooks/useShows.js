import {useState, useEffect} from 'react';
import show from '../../src/api/show';

export const useShows = ()=>{
  const [stateShows, setStateShows] = useState(null);

  useEffect(() => {
    show.get("/shows")
      .then(response =>{
        setStateShows(response.data)
      })
  },[]);

  return {shows:stateShows};
}