import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Checked = (props: SvgProps) => {
  return (
    <Svg width="18" height="13" viewBox="0 0 18 13" fill="none" {...props}>
      <Path
        d="M17 1L6 12L1 7"
        stroke="#F5CA48"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default Checked;
