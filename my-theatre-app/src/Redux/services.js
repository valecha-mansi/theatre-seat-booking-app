const base_url = 'http://localhost:3030';

export const getMoviesListApi = async() => {
   return fetch(`${base_url}/movies`)
    .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
}

export const getMovieDetailsApi = (id) => {
  return fetch(`${base_url}/movies/${id}`)
    .then((response) => response.json())
      .then((result) => result)
      .catch((error) => console.log("error", error));
}