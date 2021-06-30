import React from "react";
import { Svg, Path, SvgProps, G, Mask, Circle } from "react-native-svg";

const France = (props: SvgProps) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <G opacity={props.opacity}>
        <Mask id="mask0" mask-type="alpha" x="0" y="0" width="25" height="25">
          <Circle cx="12.5" cy="12.5" r="12.5" fill="#C4C4C4" />
        </Mask>
        <G mask="url(#mask0)">
          <Path d="M8.33333 -12.5H0V37.5H8.33333V-12.5Z" fill="#00267F" />
          <Path d="M16.6666 -12.5H8.33331V37.5H16.6666V-12.5Z" fill="white" />
          <Path d="M25 -12.5H16.6667V37.5H25V-12.5Z" fill="#FF0000" />
        </G>
      </G>
    </Svg>
  );
};

export default France;
