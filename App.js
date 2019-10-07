import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen
  },
  {
    // initialRouteName: "Home",
    // initialRouteName: "Components",
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "React Native App Title"
    }
  }
);

export default createAppContainer(navigator);
