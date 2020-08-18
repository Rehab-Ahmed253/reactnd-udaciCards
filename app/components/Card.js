import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Card = ({
  question,
  currentQuestion,
  questions,
  title,
  seeAnswer,
  handleSeeAnswer,
  handleAnswer,
}) => {
  return (
    <View>
      {!seeAnswer ? (
        <View>
          <View>
            <Text>
              Question {currentQuestion + 1} out of {questions.length} of{" "}
              {title} Deck
            </Text>
          </View>
          <View style={styles.questioncontainer}>
            <View>
              <Text style={styles.question}>{question.question}</Text>
            </View>
            <Text style={styles.link} onPress={handleSeeAnswer}>
              See the answer of the question
            </Text>
          </View>
        </View>
      ) : (
        <View>
          <View>
            <Text>Answer of question {currentQuestion + 1}</Text>
          </View>
          <View style={styles.questioncontainer}>
            <View>
              <Text style={styles.question}>{question.answer}</Text>
            </View>
            <Text style={styles.link} onPress={handleSeeAnswer}>
              See the question
            </Text>
          </View>
        </View>
      )}
      <View style={styles.bottomcontainer}>
        <Button
          title="Correct"
          color="#2da84c"
          onPress={() => handleAnswer("correct")}
        >
          Correct
        </Button>
        <Button
          title="Incorrect"
          color="#ba2231"
          onPress={() => handleAnswer("incorrect")}
        >
          Incorrect
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomcontainer: {
    margin: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  link: {
    color: "blue",
    justifyContent: "center",
    fontWeight: "800",
    fontSize: 16,
  },
  questioncontainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    margin: 20,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 30,
  },
  question: {
    fontSize: 18,
  },
});
export default Card;
