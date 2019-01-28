import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import PropTypes from "prop-types";

import gql from "graphql-tag";
import { graphql, Query } from "react-apollo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16
  },
  subItems: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 4
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3C4146",
    marginTop: 18,
    textAlign: "center"
  },
  address: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#637381",
    marginTop: 2,
    textAlign: "center"
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    alignSelf: "stretch",
    backgroundColor: "#3C4146",
    marginVertical: 20
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#637381"
  },
  value: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#637381",
    textAlign: "center"
  }
});

const QUERY = gql`
  {
    viewer {
      name
      email
    }
  }
`;

class UserProfile extends Component {
  componentWillMount() {
    // this.getUserProfileInfo();
  }

  getUserProfileInfo = () => (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <Text>Carregando...</Text>;
        if (error) return <Text>Erro :(</Text>;

        const { name, email } = data.viewer;

        return (
          <View>
            <Text style={styles.value}>{name}</Text>
            <Text style={styles.value}>{email}</Text>
          </View>
        );
      }}
    </Query>
  );
  render() {
    return <View style={styles.container}>{this.getUserProfileInfo()}</View>;
  }
}

UserProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

export default UserProfile;
