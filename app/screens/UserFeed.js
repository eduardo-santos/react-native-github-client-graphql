import React, { PureComponent } from "react";
import {
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  FlatList,
  RefreshControl,
  Text,
  View,
  Alert
} from "react-native";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import { LocationListItem, Separator } from "../components/ListItem";

const styles = StyleSheet.create({
  flatList: {
    width: "100%"
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  emptyList: {
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 18,
    fontSize: 16
  }
});

class UserFeed extends PureComponent {
  render() {
    return (
      <View>
        <Text>Feed do usuário.</Text>
      </View>
    );
  }
}

UserFeed.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

export default UserFeed;
