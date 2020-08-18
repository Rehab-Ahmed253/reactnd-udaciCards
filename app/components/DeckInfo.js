import React from "react";
import { Text, View, StyleSheet } from "react-native";

const DeckInfo = ({ title, questionsNum }) => {
  return (
    <View style={styles.deck}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>
        {questionsNum} {questionsNum === 1 ? "card" : "cards"}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  deck: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    margin: 30,
    borderRadius: 30,
    borderColor: "royalblue",
  },
  text: {
    fontSize: 20,
    fontWeight: "600",
  },
});

export default DeckInfo;
