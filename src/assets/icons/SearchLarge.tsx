import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const SVGComponent = (props: SvgProps) => (
  <Svg width={103} height={103} viewBox="0 0 103 103" fill="none" {...props}>
    <Path
      d="M46.4167 87.0833C68.8763 87.0833 87.0833 68.8763 87.0833 46.4167C87.0833 23.9571 68.8763 5.75 46.4167 5.75C23.9571 5.75 5.75 23.9571 5.75 46.4167C5.75 68.8763 23.9571 87.0833 46.4167 87.0833Z"
      stroke="#A59C9C"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M97.25 97.2499L75.1375 75.1375"
      stroke="#A59C9C"
      strokeWidth={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SVGComponent;
