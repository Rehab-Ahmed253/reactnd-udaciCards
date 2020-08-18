import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Button,
  StyleSheet,
} from "react-native";
import { connect } from "react-redux";
import { handleAddCardToDeck } from "../store/decks";

const AddCard = ({ handleAddCardToDeck, route, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleQuestion = (ques) => {
    setQuestion(ques);
  };
  const handleAnswer = (ans) => {
    setAnswer(ans);
  };
  const handleSubmit = () => {
    const card = {
      question,
      answer,
    };
    handleAddCardToDeck(route.params.title, card);
    setQuestion("");
    setAnswer("");
    navigation.navigate("DeckScreen", {
      sumQuestion: 1 + route.params.questionsNum,
    });
  };
  return (
    <View style={styles.container}>
      <TextInput
        value={question}
        style={styles.textinput}
        onChangeText={handleQuestion}
        placeholder="Question"
      />
      <TextInput
        value={answer}
        style={styles.textinput}
        onChangeText={handleAnswer}
        placeholder="Answer"
      />
      <Button title="Submit" onPress={handleSubmit}>
        Submit
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textinput: {
    fontSize: 20,
    height: 50,
    color: "#fff",
    borderColor: "gray",
    borderWidth: 1,
    margin: 20,
    backgroundColor: "#FFFFFF",
    paddingLeft: 20,
    color: "#000000",
  },
});

export default connect(null, { handleAddCardToDeck })(AddCard);
