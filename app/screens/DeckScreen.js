import React from "react";
import { View, Text, Button, StyleSheet, Card } from "react-native";
import { connect } from "react-redux";
import { handleRemoveDeck } from "../store/decks";

const DeckScreen = ({ handleRemoveDeck, navigation, route }) => {
  const deleteDeck = () => {
    handleRemoveDeck(route.params.title);
    navigation.navigate("DeckList");
  };
  return (
    <View style={styles.container}>
      <View style={styles.deck}>
        <Text style={styles.text}>{route.params.title}</Text>
        <Text style={styles.text}>
          {route.params.sumQuestion
            ? route.params.questionsNum + route.params.sumQuestion
            : route.params.questionsNum || 0}
          {route.params.sumQuestion
            ? route.params.questionsNum + route.params.sumQuestion === 1
              ? " card"
              : " cards"
            : route.params.questionsNum === 1
            ? " card"
            : " cards"}
        </Text>
      </View>
      <View style={styles.buttoncontainer}>
        <Button
          title="Add Card"
          onPress={() =>
            navigation.navigate("AddCardScreen", {
              title: route.params.title,
            })
          }
        >
          Add Card
        </Button>
      </View>
      <View style={styles.buttoncontainer}>
        <Button
          color="#32a834"
          title="Start Quiz"
          onPress={() =>
            navigation.navigate("QuizScreen", {
              title: route.params.title,
              questionsNum: route.params.questionsNum,
            })
          }
        >
          Start Quiz
        </Button>
      </View>
      <View style={styles.buttoncontainer}>
        <Button color="#a83234" title="Delete Deck" onPress={deleteDeck}>
          Delete Deck
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  deck: {
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 30,
    borderRadius: 30,
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
  buttoncontainer: {
    marginVertical: 10,
  },
});

export default connect(null, { handleRemoveDeck })(DeckScreen);
