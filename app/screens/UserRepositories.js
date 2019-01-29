import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  RefreshControl,
  Text,
  View,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import gql from "graphql-tag";
import { Query } from "react-apollo";

import PropTypes from "prop-types";

import { LocationListItem, Separator } from "../components/ListItem";

const styles = StyleSheet.create({
  flatList: {
    width: "100%"
  },
  headerStyle: {
    backgroundColor: "#3F4448",
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  headerText: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    marginLeft: 4
  },
  emptyList: {
    textAlign: "center",
    marginTop: 50,
    marginHorizontal: 18,
    fontSize: 16
  }
});

const QUERY = last => gql`
  {
    viewer {
      repositories(last: ${last}) {
        nodes {
          name
          description
          primaryLanguage {
            name
          }
          stargazers {
            totalCount
          }
          licenseInfo {
            name
          }
          updatedAt
        }
      }
    }
  }
`;

class UserRepositories extends Component {
  renderEmptyList = (loading, error) => {
    if (loading) {
      return <Text style={styles.emptyList}>Carregando...</Text>;
    } else {
      return error ? (
        <Text style={styles.emptyList}>
          Ocorreu um erro ao obter a lista de respositórios. Faça um swipe para
          baixo e tente novamente.
        </Text>
      ) : (
        <Text style={styles.emptyList}>
          Você não possui repositórios criados.
        </Text>
      );
    }
  };

  queryDataIsValid = (data, error) => {
    return (
      data &&
      data.viewer &&
      data.viewer.repositories &&
      data.viewer.repositories.nodes &&
      !error
    );
  };

  getUserRepositories = (last = 100) => (
    <Query query={QUERY(last)}>
      {({ loading, error, data }) => {
        return (
          <View>
            <FlatList
              style={styles.flatList}
              data={
                this.queryDataIsValid(data, error)
                  ? data.viewer.repositories.nodes
                  : null
              }
              renderItem={({ item }) => (
                <LocationListItem
                  name={item.name}
                  description={item.description}
                  primaryLanguageName={
                    item.primaryLanguage ? item.primaryLanguage.name : ""
                  }
                  stargazersTotalCount={
                    item.stargazers ? item.stargazers.totalCount : 0
                  }
                  licenseInfoName={
                    item.licenseInfo ? item.licenseInfo.name : ""
                  }
                  updatedAt={item.updatedAt}
                />
              )}
              keyExtractor={item => item.id}
              ItemSeparatorComponent={Separator}
              ListHeaderComponent={
                <View style={styles.headerStyle}>
                  <Image
                    source={require("../resources/images/octo-icon.png")}
                    width={22}
                    height={22}
                  />
                  <Text style={styles.headerText}>Repositórios</Text>
                </View>
              }
              ListEmptyComponent={
                <TouchableWithoutFeedback onPress={this.getUserRepositories}>
                  {this.renderEmptyList(loading, error)}
                </TouchableWithoutFeedback>
              }
              refreshControl={
                <RefreshControl
                  refreshing={loading}
                  onRefresh={() => this.getUserRepositories()}
                  tintColor="#53B5E1"
                  colors={["#53B5E1"]}
                />
              }
            />
          </View>
        );
      }}
    </Query>
  );
  render() {
    return this.getUserRepositories();
  }
}

UserRepositories.propTypes = {
  navigation: PropTypes.object,
  dispatch: PropTypes.func
};

export default UserRepositories;
