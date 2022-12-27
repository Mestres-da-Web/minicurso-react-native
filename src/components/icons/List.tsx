import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";

const ListIcon = (props: SvgProps) => (
  <Svg width={18.22} height={18.22} {...props}>
    <G
      data-name="Group 414"
      fill="#fff"
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      strokeDasharray="0 0"
    >
      <Path d="M2.43 7.47A1.677 1.677 0 0 1 .75 5.79V2.43A1.677 1.677 0 0 1 2.43.75h3.36a1.677 1.677 0 0 1 1.68 1.68v3.36a1.677 1.677 0 0 1-1.68 1.68Z" />
      <Path
        data-name="Vector"
        d="M12.43 7.47a1.677 1.677 0 0 1-1.68-1.68V2.43A1.677 1.677 0 0 1 12.43.75h3.36a1.677 1.677 0 0 1 1.68 1.68v3.36a1.677 1.677 0 0 1-1.68 1.68ZM2.43 17.47a1.677 1.677 0 0 1-1.68-1.68v-3.36a1.677 1.677 0 0 1 1.68-1.68h3.36a1.677 1.677 0 0 1 1.68 1.68v3.36a1.677 1.677 0 0 1-1.68 1.68ZM12.43 17.47a1.677 1.677 0 0 1-1.68-1.68v-3.36a1.677 1.677 0 0 1 1.68-1.68h3.36a1.677 1.677 0 0 1 1.68 1.68v3.36a1.677 1.677 0 0 1-1.68 1.68Z"
      />
    </G>
  </Svg>
);

export default ListIcon;
