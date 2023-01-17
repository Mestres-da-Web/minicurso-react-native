import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const PlusIcon = (props: SvgProps) => (
  <Svg width={18} height={18} {...props}>
    <Path
      d="M10 8h7a1 1 0 0 1 0 2h-7v7a1 1 0 0 1-2 0v-7H1a1 1 0 0 1 0-2h7V1a1 1 0 0 1 2 0Z"
      fill="#462bb8"
    />
  </Svg>
);

export default PlusIcon;
