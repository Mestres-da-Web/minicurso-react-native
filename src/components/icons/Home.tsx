import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const HomeIcon = (props: SvgProps) => (
  <Svg width={21} height={21.159} {...props}>
    <Path
      d="M20.5 16.757a3.83 3.83 0 0 1-3.75 3.9H13v-4.8a1.161 1.161 0 0 0-1.16-1.16H9.16a1.152 1.152 0 0 0-1.15 1.16v4.8H4.25a3.83 3.83 0 0 1-3.75-3.9v-6.708a4.012 4.012 0 0 1 1.33-2.992L8.08 1.58a3.635 3.635 0 0 1 4.84 0l6.25 5.477a3.977 3.977 0 0 1 1.33 2.992Z"
      fill="none"
      stroke="#f5f5f5"
    />
  </Svg>
);

export default HomeIcon;
