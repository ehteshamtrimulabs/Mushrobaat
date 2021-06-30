import React from "react";
import { Svg, Path, SvgProps, G, Mask, Circle } from "react-native-svg";

const Spain = (props: SvgProps) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <G opacity={props.opacity}>
        <Mask id="mask0" mask-type="alpha" x="0" y="0" width="25" height="25">
          <Circle cx="12.5" cy="12.5" r="12.5" fill="#C4C4C4" />
        </Mask>
        <G mask="url(#mask0)">
          <Path d="M37.5 19.1667H-12.5V25.4167H37.5V19.1667Z" fill="#C60B1E" />
          <Path d="M37.5 0H-12.5V6.25H37.5V0Z" fill="#C60B1E" />
          <Path d="M37.5 5.83333H-12.5V19.1667H37.5V5.83333Z" fill="#FFC400" />
        </G>
      </G>
    </Svg>
  );
};

export default Spain;
