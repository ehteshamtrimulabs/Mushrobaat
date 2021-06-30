import React from "react";
import { Svg, Line, SvgProps } from "react-native-svg";

const Right = (props: SvgProps) => {
  return (
    <Svg width="21" height="32" viewBox="0 0 21 32" fill="none" {...props}>
      <Line
        y1="-3"
        x2="22.6123"
        y2="-3"
        transform="matrix(0.705686 0.708525 0.707576 -0.706637 5.04272 0)"
        stroke="#313234"
        stroke-width="6"
      />
      <Line
        y1="-3"
        x2="22.6122"
        y2="-3"
        transform="matrix(-0.707576 0.706637 0.705686 0.708525 20.9999 16.0214)"
        stroke="#313234"
        stroke-width="6"
      />
    </Svg>
  );
};

export default Right;
