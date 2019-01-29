import React from "react";
import { Image } from "react-native";

import PropTypes from "prop-types";
import styles from "./styles";

const SimpleRoundedImage = ({
  source = require("./images/default-profile.png"),
  width,
  height,
  opacity,
  borderWidth,
  borderColor,
  resizeMode = "contain"
}) => {
  const stylesImage = [styles.image];

  if (width) {
    stylesImage.push({ width });
  }

  if (height) {
    stylesImage.push({ height });
  }

  if (opacity) {
    stylesImage.push({ opacity });
  }

  if (borderWidth) {
    stylesImage.push({ borderWidth });
  }

  if (borderColor) {
    stylesImage.push({ borderColor });
  }

  return <Image resizeMode={resizeMode} style={stylesImage} source={source} />;
};

SimpleRoundedImage.propTypes = {
  source: PropTypes.any,
  width: PropTypes.number,
  height: PropTypes.number,
  opacity: PropTypes.number,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  resizeMode: PropTypes.string
};

export default SimpleRoundedImage;
