import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet, ImageBackground } from "react-native";

//* Screens
import Login from "./src/screens/Login";
import AddScreen from "./src/screens/Add";
//import ChatScreen from "./screens/Chat";
import FeedScreen from "./src/screens/Feed";
import MessageScreen from "./src/screens/Messages";
import NotificationScreen from "./src/screens/Notification";
import UserScreen from "./src/screens/User";
import FeedIcon from "./src/components/navigation/FeedIcon";
import NotificationIcon from "./src/components/navigation/NotificationIcon";
import MessageIcon from "./src/components/navigation/MessageIcon";
import UserIcon from "./src/components/navigation/UserIcon";
import AddIcon from "./src/components/navigation/AddIcon";

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.main_TabBar,
      }}
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarLabel: "feed",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <FeedIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: "notification",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <NotificationIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddScreen}
        options={{
          tabBarLabel: "add",
          tabBarShowLabel: false,
          tabBarIcon: ({ size, color }) => <AddIcon />,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: "message",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <MessageIcon focused={focused} />,
        }}
      />
      <Tab.Screen
        name="User"
        component={UserScreen}
        options={{
          tabBarLabel: "user",
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => <UserIcon focused={focused} />,
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;

const styles = StyleSheet.create({
  main_TabBar: {
    height: 55,
    backgroundColor: "#2f2f2f",
    borderColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});
