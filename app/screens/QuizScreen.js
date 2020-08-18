import React, { useState } from "react";
import { View, Text } from "react-native";
import QuizResults from "../components/QuizResults";
import Card from "../components/Card";

import { connect } from "react-redux";

const QuizScreen = ({ deck, navigation }) => {
  const [correct, setCorrect] = useState(0);
  const [incorrect, setInCorrect] = useState(0);
  const [questionCount, setQuestionCount] = useState(deck.questions.length);
  const [seeAnswer, setSeeAnswer] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [restart, setRestart] = useState(false);

  const handleAnswer = (response) => {
    setCurrentQuestion(currentQuestion + 1);
    response === "correct"
      ? setCorrect(correct + 1)
      : setInCorrect(incorrect + 1);
  };

  const handleSeeAnswer = () => {
    setSeeAnswer(!seeAnswer);
  };

  const handleRestart = () => {
    setQuestionCount(deck.questions.length);
    setCorrect(0);
    setInCorrect(0);
    setCurrentQuestion(0);
    navigation.navigate("QuizScreen");
  };
  if (!deck || deck.questions.length === 0) {
    return (
      <View>
        <View>
          <Text>Oops, no cards in the deck.</Text>
        </View>
      </View>
    );
  }
  if (questionCount === currentQuestion) {
    return (
      <QuizResults
        totalQuestions={questionCount}
        correctAnswers={correct}
        incorrectAnswers={incorrect}
        navigation={navigation}
        restart={handleRestart}
      />
    );
  }
  return (
    <View>
      <View>
        <Card
          question={deck.questions[currentQuestion]}
          currentQuestion={currentQuestion}
          questions={deck.questions}
          handleSeeAnswer={handleSeeAnswer}
          handleAnswer={handleAnswer}
          title={deck.title}
          seeAnswer={seeAnswer}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({ decks }, props) => {
  const { title } = props.route.params;
  const deck = decks[title];

  return {
    deck,
  };
};

export default connect(mapStateToProps)(QuizScreen);
