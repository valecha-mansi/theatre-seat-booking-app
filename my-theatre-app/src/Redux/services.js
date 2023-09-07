const base_url = 'http://localhost:3030';

export const getMoviesList = async() => {
   return fetch(`${base_url}/movies`)
    .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
}