import * as React from 'react';
import {
  Text,
  ActivityIndicator,
} from 'react-native';

const FontLoadedText = ({isFontLoaded, font, style, children}) => {
  if (!isFontLoaded) {
    return (
      <ActivityIndicator size={'large'}/>
    );
  }

  return (
    <Text style={[{fontFamily: font}, style]}>
      {children}
    </Text>
  );

}

export default FontLoadedText;
