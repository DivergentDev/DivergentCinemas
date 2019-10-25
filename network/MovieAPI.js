import React from 'react';
import PropTypes from 'prop-types';


const axios = require('axios');
const IMG_URL_PREPEND = "https://image.tmdb.org/t/p/w500";
const API_KEY = "31b3c9dba1a512f997a69f344b235e3d";

const AXIOS_SETUP = {
  baseURL: "https://api.themoviedb.org/3",
  timeout: 20000
}


class MovieAPI extends React.Component {

  constructor(props){
    super(props);
    this.apiConnector = axios.create(AXIOS_SETUP);
    this.state = {
      
    }
  }

  render () {

  }
}

export default MovieAPI;
