import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import NavStack from "./app/components/NavStack";
import { setNotification } from "./app/utils/notifications";
import configureStore from "./app/store/configureStore";

const App = () => {
  useEffect(() => setNotification(), []);
  const store = configureStore();
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
