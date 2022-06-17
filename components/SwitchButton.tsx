import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Svg, { Path, SvgUri } from "react-native-svg";
import useColorScheme from "../hooks/useColorScheme";
import Colors from "../constants/Colors";

type SwitchButtonProps = {
  size: number;
  onClick: Function;
};

const SwitchButton: React.FC<SwitchButtonProps> = ({ size, onClick }) => {
  const colorScheme = useColorScheme();

  const [color, setColor] = useState<string>(
    colorScheme === "light" ? Colors.dark.text : Colors.light.text
  );
  const [backgroung, setBackgroung] = useState<string>(
    colorScheme === "light" ? Colors.dark.background : Colors.light.background
  );

  return (
    <TouchableOpacity
      onPress={(event: GestureResponderEvent) => {
        onClick();
        // if (
        //   color === Colors.dark.text &&
        //   backgroung === Colors.dark.background
        // ) {
        //   setColor(Colors.light.text);
        //   setBackgroung(Colors.light.background);
        // } else {
        //   setColor(Colors.dark.text);
        //   setBackgroung(Colors.dark.background);
        // }
      }}
      style={[
        {
          width: size,
          height: size,
          backgroundColor: backgroung,
        },
        styles.button,
      ]}
    >
      <Svg viewBox="0 0 1024 1024">
        <Path
          fill={color}
          d="M884.3,357.6c116.8,117.7,151.7,277-362.2,320V496.4L243.2,763.8L522,1031.3V860.8C828.8,839.4,1244.9,604.5,884.3,357.6z"
        ></Path>
        <Path
          fill={color}
          d="M557.8,288.2v138.4l230.8-213.4L557.8,0v142.8c-309.2,15.6-792.1,253.6-426.5,503.8C13.6,527.9,30,330.1,557.8,288.2z"
        ></Path>
      </Svg>
    </TouchableOpacity>
  );
};

export default SwitchButton;

const styles = StyleSheet.create({
  button: {
    opacity: 0.6,
    borderRadius: 25,
    border: "2px solid #343242",
    padding: 7,
    color: "black",
    transition: "background-color 200ms linear, opacity 50ms linear",
  },
  svg: {},
});
