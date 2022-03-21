import { useState, useEffect } from 'react';

const useFetchPeliculas = ( endpointFetch ) => {
    const [peliculas, setPeliculas] = useState([]);
  
  
    useEffect(() => {
      
      fetch(`https://api.themoviedb.org/3/movie/${endpointFetch}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-AR$page=1`)
        .then(res => res.json())
        .then(data => {
          setPeliculas(data.results);
          
        });
    }, []);
  
    return peliculas;

  };
  
  export default useFetchPeliculas;
