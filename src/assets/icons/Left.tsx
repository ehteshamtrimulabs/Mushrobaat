import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Left = (props: SvgProps) => {
  return (
    <Svg width="13" height="22" viewBox="0 0 13 22" fill="none" {...props}>
      <Path
        d="M11.3334 1.00005L1.33337 11L11.3334 21"
        stroke="black"
        stroke-linecap="square"
      />
    </Svg>
  );
};

export default Left;
