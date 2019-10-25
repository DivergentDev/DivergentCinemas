import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ImageBackground,
  StatusBar,
  Image,
  ActivityIndicator,
  ScrollView
} from "react-native";
import Constants from "expo-constants";
import ImageOverlay from "react-native-image-overlay";
import Utils from "../Helpers/Utils";
import { Container, Header, Content, Button } from "native-base";
import * as Font from "expo-font";
import FLText from "../components/FLText";

const titleFontSize = 26;
const captionFontSize = titleFontSize * 0.75;
const logoSize = 220;
const dimensions = Dimensions.get("window");

const backgroundImage1 = require("../assets/wallpapers/acreed1.jpg");
const backgroundImage2 = require("../assets/wallpapers/aquaman1.jpg");
const backgroundImage3 = require("../assets/wallpapers/bp1.jpg");
const backgroundImage4 = require("../assets/wallpapers/bp2.jpg");
const backgroundImage6 = require("../assets/wallpapers/inception1.jpg");
const backgroundImage7 = require("../assets/wallpapers/infinitywar1.jpg");
const backgroundImage8 = require("../assets/wallpapers/lala1.jpeg");
const backgroundImage9 = require("../assets/wallpapers/kfupanda1.jpg");
const backgroundImage10 = require("../assets/wallpapers/skyscraper1.jpg");
const backgroundImage11 = require("../assets/wallpapers/starwars1.jpg");
const backgroundImage12 = require("../assets/wallpapers/tgwall1.jpg");
const backgroundImage13 = require("../assets/wallpapers/us1.jpg");

const imageArray = [
  backgroundImage1,
  backgroundImage2,
  backgroundImage3,
  backgroundImage4,
  backgroundImage6,
  backgroundImage7,
  backgroundImage8,
  backgroundImage9,
  backgroundImage10,
  backgroundImage11,
  backgroundImage12,
  backgroundImage13
];

const styles = {
  container: {
    height: "100%",
    width: "100%"
  },
  bottomHalf: {
    flex: 5,
    backgroundColor: "transparent",
    width: "100%"
  },
  topHalf: {
    flex: 5,
    backgroundColor: "transparent",
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: "5%"
  },
  bottomHalfTopHalf: {
    flex: 5,
    width: "100%",
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "10%"
  },
  bottomHalfBottomHalf: {
    flex: 5,
    width: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: "10%",
    paddingBottom: "15%"
  },
  logo: {
    width: logoSize,
    height: logoSize
  }
};

const textStyles = {
  welcomeText: {
    // fontWeight: 'bold',
    fontSize: titleFontSize,
    color: "white",
    marginBottom: 15,
    fontFamily: "josefinBold"
  },
  captionText: {
    fontSize: captionFontSize,
    color: "lightgrey",
    marginBottom: 10,
    textAlign: "center",
    width: "70%",
    lineHeight: 25,
    fontFamily: "josefin"
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "black",
    fontFamily: "josefinBold"
  }
};

class WelcomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fontLoaded: false
    };
  }

  componentDidMount = async () => {
    await Utils.loadAllFonts();
    this.setState({ fontLoaded: true });
  };

  getRandomBackground = () => {
    const randIdx = Utils.generateRandomNumber(0, imageArray.length - 1);
    const image = imageArray[randIdx];
    return image;
  };

  render = () => {
    const imageToDisplay = this.getRandomBackground();

    return (
      <ImageOverlay
        containerStyle={styles.container}
        source={imageToDisplay}
        overlayAlpha={0.4}
      >
        <ScrollView
          contentContainerStyle={{ flex: 1, width: dimensions.width }}
        >
          <View style={{ flex: 1, width: "100%" }}>
            <StatusBar backgroundColor="blue" barStyle="light-content" />
            <View style={styles.topHalf}>
              <Image
                source={require("../assets/icons/logo.png")}
                style={styles.logo}
                resizeMode={"contain"}
              />
            </View>
            <View style={styles.bottomHalf}>
              <View style={styles.bottomHalfTopHalf}>
                <FLText
                  isFontLoaded={this.state.fontLoaded}
                  style={textStyles.welcomeText}
                >
                  Welcome To Local Films!
                </FLText>
                <FLText
                  isFontLoaded={this.state.fontLoaded}
                  style={textStyles.captionText}
                >
                  Never waste your time searching for something to watch again.
                </FLText>
              </View>
              <View style={styles.bottomHalfBottomHalf}>
                <Button
                  block
                  light
                  style={{ height: "30%", backgroundColor: "white" }}
                  onPress={this.props.proceedButtonPressed}
                >
                  <FLText
                    isFontLoaded={this.state.fontLoaded}
                    style={textStyles.buttonText}
                  >
                    PROCEED
                  </FLText>
                </Button>
              </View>
            </View>
          </View>
        </ScrollView>
      </ImageOverlay>
    );
  };
}

export default WelcomeScreen;
