import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { handleAddDeckTitle } from "../store/decks";

const AddDeck = ({ navigation, handleAddDeckTitle }) => {
  const [title, setTitle] = useState("");
  const handleTitle = (title) => {
    setTitle(title);
  };
  const handleSubmit = () => {
    handleAddDeckTitle(title);
    setTitle("");
    navigation.navigate("DeckScreen", { title });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
    >
      <View style={styles.container}>
        <View>
          <Text>What is the title of your new deck?</Text>
          <TextInput style={styles.textinput} onChangeText={handleTitle} />
        </View>
        <View style={styles.button}>
          <Button
            title="Create Deck"
            onPress={handleSubmit}
            disabled={title === ""}
          >
            Create Deck
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  textinput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    color: "black",
    backgroundColor: "white",
  },
  button: {
    margin: 30,
  },
});

export default connect(null, { handleAddDeckTitle })(AddDeck);
