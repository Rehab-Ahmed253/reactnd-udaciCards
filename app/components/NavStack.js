import "react-native-gesture-handler";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import AddCardScreen from "../screens/AddCardScreen";
import DeckScreen from "../screens/DeckScreen";
import QuizScreen from "./../screens/QuizScreen";

const Stack = createStackNavigator();

export default function NavStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="DeckScreen" component={DeckScreen} />
      <Stack.Screen name="AddCardScreen" component={AddCardScreen} />
      <Stack.Screen name="QuizScreen" component={QuizScreen} />
    </Stack.Navigator>
  );
}
