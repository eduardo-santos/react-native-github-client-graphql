import React, { Component } from "react";
import { View, Text, StyleSheet, RefreshControl } from "react-native";

import PropTypes from "prop-types";

import gql from "graphql-tag";
import { Query } from "react-apollo";

import SimpleRoundedImage from "../components/RoundedImage/SimpleRoundedImage";
import { Button } from "../components/Button";

import Icon from "react-native-vector-icons/MaterialIcons";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16
  },
  name: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#3C4146",
    marginTop: 18,
    textAlign: "center"
  },
  login: {
    fontWeight: "normal",
    fontSize: 18,
    color: "#637381",
    textAlign: "center"
  },
  defaultValue: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#637381",
    textAlign: "center"
  },
  email: {
    fontWeight: "normal",
    fontSize: 16,
    color: "#2695D2",
    textAlign: "center"
  },
  labeField: {
    flexDirection: "row",
    marginTop: 6
  },
  icon: {
    paddingRight: 4
  },
  separator: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#000000",
    marginVertical: 12
  },
  space: {
    height: 20
  },
  emptyContent: {
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 18,
    fontSize: 16
  },
  loadingContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  errorContainer: {
    paddingHorizontal: 16
  }
});

const QUERY = gql`
  {
    viewer {
      name
      login
      email
      avatarUrl
      bio
      location
    }
  }
`;

class UserProfile extends Component {
  renderEmptyContent = (loading, error) => {
    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.emptyContent}>Carregando...</Text>
        </View>
      );
    } else {
      return error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.emptyContent}>
            Ocorreu um erro ao obter as informações de perfil do seu usuário.
          </Text>
          <Button
            text="TENTAR NOVAMENTE"
            onPress={this.getUserProfileInfo}
            disabled={loading}
            width="100%"
            marginTop={16}
          />
        </View>
      ) : (
        <Text style={styles.emptyContent}>
          Nenhuma informação para esse usuário foi encontrada.
        </Text>
      );
    }
  };

  getUserProfileInfo = () => (
    <Query query={QUERY}>
      {({ loading, error, data }) => {
        if (loading || error) {
          return this.renderEmptyContent(loading, error);
        }

        const { name, login, email, avatarUrl, bio, location } = data.viewer;

        return (
          <View style={styles.container}>
            <SimpleRoundedImage
              resizeMode="cover"
              source={{ uri: avatarUrl }}
              width={130}
              height={130}
            />
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.login}>{login}</Text>
            <View style={styles.separator} />
            <Text style={styles.defaultValue}>{bio}</Text>
            <View style={styles.space} />
            <View style={styles.labeField}>
              <Icon name="location-on" size={20} style={styles.icon} />
              <Text style={styles.defaultValue}>{location}</Text>
            </View>
            <View style={styles.labeField}>
              <Icon name="email" size={20} style={styles.icon} />
              <Text style={styles.email}>{email}</Text>
            </View>
          </View>
        );
      }}
    </Query>
  );
  render() {
    return this.getUserProfileInfo();
  }
}

UserProfile.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

export default UserProfile;
