import React from "react";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Login from "../screens/Login";
import LocationList from "../screens/LocationList";
import LocationDetails from "../screens/LocationDetails";

import Icon from "react-native-vector-icons/MaterialIcons";

const headerStyleOptions = (isBottomTab = false) => ({
  headerMode: "screen",
  defaultNavigationOptions: ({ navigation }) => ({
    headerStyle: {
      backgroundColor: "#2695D2"
    },
    headerTitleStyle: "#FFFFFF",
    headerTintColor: "#FFFFFF",
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      if (isBottomTab) {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "LocationListScreen") {
          iconName = "home";
        } else if (routeName === "LocationDetailsScreen") {
          iconName = "person";
        }

        return <Icon name={iconName} size={25} color={tintColor} />;
      }
    }
  })
});

// Not authenticated route
const LoginStack = createStackNavigator(
  {
    LoginScreen: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    }
  },
  headerStyleOptions()
);

const LoggedStack = createBottomTabNavigator(
  {
    LocationListScreen: {
      screen: LocationList,
      navigationOptions: {
        headerTitle: "Feed",
        tabBarLabel: "Feed"
      }
    },
    LocationDetailsScreen: {
      screen: LocationDetails,
      navigationOptions: {
        headerTitle: "Perfil",
        tabBarLabel: "Perfil"
      }
    }
  },
  headerStyleOptions(true)
);

const routeStackNavigator = createStackNavigator(
  {
    LoginRoute: { screen: LoginStack },
    LoggedRoute: { screen: LoggedStack }
  },
  {
    mode: "modal",
    headerMode: "none",
    initialRouteName: "LoginRoute"
  }
);

export default createAppContainer(routeStackNavigator);
