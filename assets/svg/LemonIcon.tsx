import * as React from "react";
import Svg, { Path, Defs, Pattern, Use } from "react-native-svg";
const LemonIcon = (props: any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={120}
    height={123}
    fill="none"
    {...props}
  >
    <Path fill="url(#a)" d="M0 0h120v123H0z" />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use transform="matrix(.00427 0 0 .00417 -.013 0)" />
      </Pattern>
    </Defs>
  </Svg>
);
export default LemonIcon;
