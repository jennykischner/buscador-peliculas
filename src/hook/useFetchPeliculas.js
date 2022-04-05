import { useState, useEffect } from 'react';

const useFetchPeliculas = ( endpointFetch, page ) => {
    const [peliculas, setPeliculas] = useState([]);
    const [totalPages, setTotalPages] = useState([])
  
    useEffect(() => {
      
      fetch(`https://api.themoviedb.org/3/movie/${endpointFetch}?api_key=96357f7f10ae428b53766292b46e8b8e&language=es-AR&page=${page}`)

        .then(res => res.json())
        .then(data => {
          setPeliculas(data.results);
          setTotalPages(data.total_pages)
        });
    }, [page, endpointFetch]);
  
    return {
      peliculas: peliculas, 
      totalPages: totalPages,
    }
    

  };
  
  export default useFetchPeliculas;
