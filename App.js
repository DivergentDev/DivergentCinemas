import * as React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";
import WelcomeScreen from "./screens/WelcomeScreen";
import MoviesScreen from "./screens/MoviesScreen";

const dimensions = Dimensions.get("window");

const styles = {
  container: {
    width: dimensions.width,
    height: dimensions.height,
    justifyContent: "center",
    alignItems: "center"
  }
};


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowMovieScreen: false
    };
  }

  componentDidMount = () => {};

  welcomeProceedButtonPressed = () => {
    this.setState({ shouldShowMovieScreen: true });
  };

  render() {
    let screenToDisplay = (
      <WelcomeScreen
        proceedButtonPressed={() => this.welcomeProceedButtonPressed()}
      />
    );

    if (this.state.shouldShowMovieScreen) {
      screenToDisplay = (
        <MoviesScreen modalVisible={this.state.shouldShowMovieScreen} />
      );
    }

    return <View style={styles.container}>{screenToDisplay}</View>;
  }
}

export default App;
