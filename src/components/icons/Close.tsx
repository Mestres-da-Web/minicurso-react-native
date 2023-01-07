import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const CloseIcon = (props: SvgProps) => (
  <Svg
    fill="#707070"
    viewBox="0 0 48 48"
    stroke="#707070"
    strokeWidth={2}
    height={28}
    width={28}
    {...props}
  >
    <Path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
  </Svg>
);

export default CloseIcon;
