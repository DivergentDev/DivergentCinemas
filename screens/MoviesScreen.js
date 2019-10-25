import React from "react";
import PropTypes from "prop-types";
import { Modal, View, Text } from "react-native";
import { Container, Header, Button, Icon, Left, Body } from "native-base";

class MoviesScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render = () => {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.modalVisible}
        onRequestClose={() => {
          console.log("Modal has been closed.");
        }}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text>This is how we do it</Text>
        </View>
      </Modal>
    );
  };
}

export default MoviesScreen;
