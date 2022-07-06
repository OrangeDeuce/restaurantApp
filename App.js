//import React Navigation library
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

//import the SearchScreen.js screen
import SearchScreen from "./src/screens/SearchScreen";
// create navigator object:
const navigator = createStackNavigator(
  {
    Search: SearchScreen, //This is the 'Search' key which references the SearchScreen.js screen (Name this appropriately)
  },
  {
    initialRouteName: "Search", //Which screen to show on every startup
    defaultNavigationOptions: {
      //default options to show on every screen
      title: "BusinessSearch", // the title to be this on every screen
    },
  }
);

export default createAppContainer(navigator); //To make sure this App.js exports a react component: navigator!
