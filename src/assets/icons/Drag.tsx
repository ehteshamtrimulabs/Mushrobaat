import React from "react";
import { Svg, Path, SvgProps } from "react-native-svg";

const Drag = (props: SvgProps) => {
  return (
    <Svg width="48" height="5" viewBox="0 0 48 5" fill="none" {...props}>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0 2.5C0 1.11929 1.11929 0 2.5 0H45.3572C46.7379 0 47.8571 1.11929 47.8571 2.5C47.8571 3.88071 46.7379 5 45.3571 5H2.5C1.11929 5 0 3.88071 0 2.5Z"
        fill="#CDCFD0"
      />
    </Svg>
  );
};

export default Drag;
