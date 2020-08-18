import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import CustomButton from "./CustomButton";
import tailwind from "tailwind-rn";

const QuizResult = ({
  totalQuestions,
  correctAnswers,
  restart,
  navigation,
}) => {
  const percent = ((correctAnswers / totalQuestions) * 100).toFixed(0);
  return (
    <View>
      <View style={styles.textcontainer}>
        <Text style={styles.heading}>Quiz Complete!</Text>
        <Text>
          {correctAnswers} / {totalQuestions} correct
        </Text>
        <Text style={styles.percentage}>{percent}%</Text>
      </View>
      <View style={styles.button}>
        <Button title="Restart Quiz" onPress={restart}>
          Restart Quiz
        </Button>
      </View>
      <View style={styles.button}>
        <Button
          color="green"
          title=" Back to Deck"
          onPress={() => navigation.navigate("DeckScreen")}
        >
          Back to Deck
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textcontainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  heading: {
    fontSize: 18,
    fontWeight: "800",
    margin: 10,
  },
  percentage: {
    color: "#730fd1",
    fontSize: 24,
    margin: 20,
  },
  button: {
    margin: 20,
  },
});

export default QuizResult;
