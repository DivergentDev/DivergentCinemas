class Utils {

  static generateRandomNumber (lower, upper) {
    return Math.floor(Math.random() * upper) + lower;
  }
  
}

export default Utils;