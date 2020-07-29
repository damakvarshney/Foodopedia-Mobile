import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screen/SearchScreen";
import ResultsShowScreen from "./src/screen/ResultsShowScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultScreen: ResultsShowScreen,
  },
  {
    initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Business Search",
    },
  }
);

const App = createAppContainer(navigator);
export default () => {
  return <App />;
};
