import React from "react";
import { Svg, Path, SvgProps, Circle, G, Mask } from "react-native-svg";

const Germany = (props: SvgProps) => {
  return (
    <Svg width="25" height="25" viewBox="0 0 25 25" fill="none" {...props}>
      <G opacity={props.opacity}>
        <Mask id="mask0" mask-type="alpha" x="0" y="0" width="25" height="25">
          <Circle cx="12.5" cy="12.5" r="12.5" fill="#C4C4C4" />
        </Mask>
        <G mask="url(#mask0)">
          <Path d="M37.5 16.6667H-12.5V25H37.5V16.6667Z" fill="#FFE600" />
          <Path
            d="M37.5 3.05176e-05H-12.5V8.33337H37.5V3.05176e-05Z"
            fill="black"
          />
          <Path d="M37.5 8.33334H-12.5V16.6667H37.5V8.33334Z" fill="#FF0000" />
        </G>
      </G>
    </Svg>
  );
};

export default Germany;
