import React from "react";
import tailwind from "tailwind-rn";
import * as RN from "react-native";
import * as RNGH from "react-native-gesture-handler";

const Platform = RN.Platform;
const TouchableOpacity =
  Platform.OS === "ios" ? RN.TouchableOpacity : RNGH.TouchableOpacity;
const Text = RN.Text;

export default function CustomButton({
  disabled,
  children,
  onPress,
  styleText = {},
  styleButton = {},
}) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled}>
      <Text>{children}</Text>
    </TouchableOpacity>
  );
}
