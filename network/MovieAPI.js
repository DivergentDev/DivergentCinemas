const axios = require('axios');
const IMG_URL_PREPEND = "https://image.tmdb.org/t/p/w500";
const API_KEY = "31b3c9dba1a512f997a69f344b235e3d";

const AXIOS_SETUP = {
  baseURL: "https://api.themoviedb.org/3",
  timeout: 20000
}


class MovieAPI {

  constructor(){
    this.apiConnector = axios.create(AXIOS_SETUP);
  }

  //this function will retrieve all trending movies from the movie api db
  getTrendingMovies = async () => {

    //this is the url that you have to go to in order to get the day's trending movies
    //visit: https://developers.themoviedb.org/3/trending/get-trending for info
    const endpoint = "/trending/movie/day";
    const extraData = {
      params: {
        api_key: API_KEY
      }
    };

    try {
      const res = await this.apiConnector.get(endpoint, extraData);
      console.log("response from API call for trending movies == ", res.data);
    }
    catch (e) {
      console.log(`Uh Oh, there's been an error
      attempting to retrieve the trending movies of the day`);
      throw(e);
    }

  }

}

export default MovieAPI;
