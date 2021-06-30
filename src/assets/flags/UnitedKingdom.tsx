import React from "react";
import { Svg, Path, SvgProps, G, Mask, Circle } from "react-native-svg";

const UnitedKingdom = (props: SvgProps) => {
  return (
    <Svg width="32" height="30" viewBox="0 0 32 30" fill="none" {...props}>
      <Mask id="mask0" mask-type="alpha" x="0" y="-1" width="32" height="32">
        <Circle
          cx="16"
          cy="15"
          r="15.05"
          fill="#C4C4C4"
          stroke="black"
          stroke-width="0.1"
        />
      </Mask>
      <G mask="url(#mask0)">
        <Path
          d="M19.0267 0.00012207H12.9718V29.9996H19.0267V0.00012207Z"
          fill="#F10002"
        />
        <Path d="M46 12.4286H-13.998V17.5714H46V12.4286Z" fill="#F10002" />
        <Path d="M-7.39447 0L11.871 10.7141V0H-7.39447Z" fill="#092C70" />
        <Path
          d="M-13.998 2.57161V11.5715H3.06562L-13.998 2.57161Z"
          fill="#092C70"
        />
        <Path
          d="M-13.999 0V1.28569L5.81684 11.5712H8.56905L-13.999 0Z"
          fill="#F10002"
        />
        <Path d="M39.3929 0L20.1275 10.7141V0H39.3929Z" fill="#092C70" />
        <Path
          d="M45.9983 2.57161V11.5715H28.9346L45.9983 2.57161Z"
          fill="#092C70"
        />
        <Path
          d="M45.9983 0V1.28569L26.1824 11.5712H23.4302L45.9983 0Z"
          fill="#F10002"
        />
        <Path
          d="M39.3929 29.9997L20.1275 19.2856V29.9997H39.3929Z"
          fill="#092C70"
        />
        <Path
          d="M45.9983 27.4283V18.4285H28.9346L45.9983 27.4283Z"
          fill="#092C70"
        />
        <Path
          d="M45.9983 29.9997V28.714L26.1824 18.4285H23.4302L45.9983 29.9997Z"
          fill="#F10002"
        />
        <Path
          d="M5.26544 18.4285L-14 29.1426V18.4285H5.26544Z"
          fill="#092C70"
        />
        <Path
          d="M11.8707 20.9999V29.9997H-5.19294L11.8707 20.9999Z"
          fill="#092C70"
        />
        <Path
          d="M11.8707 18.4285V19.7142L-7.94514 29.9997H-10.6973L11.8707 18.4285Z"
          fill="#F10002"
        />
      </G>
    </Svg>
  );
};

export default UnitedKingdom;
