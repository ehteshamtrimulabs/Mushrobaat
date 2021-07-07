import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Right = (props: SvgProps) => {
  return (
    <Svg width="13" height="22" viewBox="0 0 13 22" fill="none" {...props}>
      <Path
        d="M1.66669 21L11.6667 11L1.66669 1"
        stroke="black"
        stroke-linecap="square"
      />
    </Svg>
  );
};

export default Right;
