import React from "react";
import PropTypes from "prop-types";
import { Modal, View, Text, ActivityIndicator, Dimensions, ScrollView } from "react-native";
import {
  Container,
  Header,
  Button,
  Icon,
  Left,
  Body,
  Tabs,
  Tab
} from "native-base";
import MovieAPI from "../network/MovieAPI";
import ImageOverlay from "react-native-image-overlay";

const IMG_URL_PREPEND = "https://image.tmdb.org/t/p/w780";
const dimensions = Dimensions.get("window");

const viewStyles = {
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black"
  }
};

const SingleMovieDescScreen = ({imgURL}) => {
  return (
    <ImageOverlay
      source={{ uri: imgURL }}
      containerStyle={{ flex: 1 }}
      overlayColor={"black"}
      overlayAlpha={0.2}
    />
  );
}

const LoadingToMovieDeck = ({ isDataLoaded, dataSource }) => {

  const movieDeck = dataSource.map((movie, idx) => {
    console.log("movie index == ", movie.id);
    return(
      <View style={{height: dimensions.height, width: dimensions.width}} key={idx}>
        <SingleMovieDescScreen
          imgURL={`${IMG_URL_PREPEND}${movie.poster_path}`}
          isImageLoaded={isDataLoaded}
        />
      </View>
    );
  });

  if (isDataLoaded) {
    return (
      <ScrollView pagingEnabled>
        {movieDeck}
      </ScrollView>
    );
  }

  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        flex: 1
      }}
    >
      <ActivityIndicator size={"large"} />
    </View>
  );
};

class MoviesScreen extends React.Component {

  constructor(props) {
    super(props);
    this.movieAPIConnector = new MovieAPI();
    this.state = {
      areAPICallsCompleted: false,
      trendingMovies: [],
      popularMovies: []
    };
  }

  componentDidMount = async () => {

    try {

      const trendingMs = await this.movieAPIConnector.getTrendingMovies();

      this.setState({
        areAPICallsCompleted: (trendingMs.length > 0),
        trendingMovies: trendingMs
      });

    }
    catch (e) {
      console.log("error thrown == ", e);
    }
  };

  render = () => {

    const self = this;
    let componentToReturn;

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.modalVisible}
      >
        <LoadingToMovieDeck
          isDataLoaded={self.state.areAPICallsCompleted}
          dataSource={self.state.trendingMovies}
        />
      </Modal>
    );
  };
}

export default MoviesScreen;
