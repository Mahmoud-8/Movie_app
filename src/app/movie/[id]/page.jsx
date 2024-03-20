import React from 'react'

export default async function MoviePage({params}) {
    const movieId = params.id;
    
    // Fetch the data for the movie with the given ID
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?
    api_key=${process.env.API_KEY}&language=en-US`);
    const data = await res.json();
  return (
    <div>MoviePage</div>
  )
}
