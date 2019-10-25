import * as Font from 'expo-font';

class Utils {

  static generateRandomNumber (lower, upper) {
    return Math.floor(Math.random() * upper) + lower;
  }

  static async loadAllFonts () {
    await Font.loadAsync({
      'josefinBold': require('../assets/fonts/JosefinSans-Bold.ttf'),
      // 'josefin-bold-italic': require('../assets/fonts/JosefinSans-BoldItalic.ttf'),
      // 'josefin-italic': require('../assets/fonts/JosefinSans-Italic.ttf'),
      // 'josefin-light': require('../assets/fonts/JosefinSans-Light.ttf'),
      'josefin': require('../assets/fonts/JosefinSans-Regular.ttf'),
      // 'josefin-semi-bold': require('../assets/fonts/JosefinSans-SemiBold.ttf'),
      // 'josefin-thin': require('../assets/fonts/JosefinSans-Thin.ttf')
    });
  }

}

export default Utils;
