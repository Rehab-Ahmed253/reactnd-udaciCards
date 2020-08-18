import React, { useEffect } from "react";
import { Text, View, FlatList } from "react-native";
import { connect } from "react-redux";
import * as RN from "react-native";
import * as RNGH from "react-native-gesture-handler";
import { handleInitialData } from "../store/decks";

import DeckInfo from "./DeckInfo";

const DeckList = ({ handleInitialData, deckList, navigation }) => {
  useEffect(() => handleInitialData(), []);

  const Platform = RN.Platform;
  const TouchableOpacity =
    Platform.OS === "ios" ? RN.TouchableOpacity : RNGH.TouchableOpacity;

  if (!deckList || deckList.length === 0) {
    return (
      <View>
        <Text>No decks available</Text>
      </View>
    );
  }
  return (
    <View>
      <FlatList
        data={deckList}
        keyExtractor={(item) => item.deckId}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("DeckScreen", {
                title: item.title,
                questionsNum: item.questionsNum,
              })
            }
          >
            <DeckInfo title={item.title} questionsNum={item.questionsNum} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const mapStateToProps = ({ decks }) => {
  const deckList = Object.keys(decks).map((deckId) => ({
    deckId,
    questionsNum: decks[deckId].questions.length,
    title: decks[deckId].title,
  }));

  return {
    deckList,
  };
};

export default connect(mapStateToProps, { handleInitialData })(DeckList);
