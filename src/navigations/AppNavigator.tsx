import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "screens/HomeScreen";
import DetailsScreen from "screens/DetailsScreen";
import ProfileScreen from "screens/ProfileScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: { drinkId: string };
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen component={HomeScreen} name="Home" />
        <Stack.Screen component={DetailsScreen} name="Details" />
        <Stack.Screen component={ProfileScreen} name="Profile" />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
