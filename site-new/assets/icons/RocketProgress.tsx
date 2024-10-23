import * as React from "react";
import { SVGProps } from "react";
const RocketProgress = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={36}
    fill="none"
    {...props}
  >
    <path
      fill="#FFEC19"
      d="M2.421 20.571v2.572H0V20.57h2.421ZM2.421 12.857v2.572H0v-2.572h2.421ZM2.421 2.571v2.572H0V2.57h2.421ZM2.421 30.857v2.572H0v-2.572h2.421ZM9.684 2.571v2.572H4.842V2.57h4.842ZM9.684 30.857v2.572H4.842v-2.572h4.842ZM46 20.571h-2.421V15.43H46v5.142ZM41.158 12.857h2.42v2.572h-2.42v-2.572ZM38.737 10.286h2.42v2.571h-2.42v-2.571Z"
    />
    <path
      fill="#FFEC19"
      fillRule="evenodd"
      d="M38.737 25.714H19.368V10.286h19.369V7.714H26.632V5.143H24.21V2.57h-2.42V0h-7.264v2.571h-2.42v2.572h2.42v2.571h2.421v2.572h-4.842v2.571h-2.42v2.572H7.262v5.142h2.421v2.572h2.421v2.571h4.842v2.572h-2.42v2.571h-2.422v2.572h2.421V36h7.264v-2.571h2.42v-2.572h2.422v-2.571h12.105v-2.572ZM24.21 30.857h-2.42v2.572h-7.264v-2.572h2.421v-2.571h7.264v2.571Zm-12.105-7.714V20.57h-2.42V15.43h2.42v-2.572h4.842v10.286h-4.842Zm4.842-15.429V5.143h-2.42V2.57h7.263v2.572h2.42v2.571h-7.263Z"
      clipRule="evenodd"
    />
    <path
      fill="#FFEC19"
      d="M41.158 23.143v2.571h-2.421v-2.571h2.42ZM41.158 23.143h2.42V20.57h-2.42v2.572ZM36.316 15.429h-4.842v-2.572h4.842v2.572ZM36.316 20.571V15.43h2.42v5.142h-2.42ZM31.474 20.571h4.842v2.572h-4.842V20.57ZM31.474 20.571V15.43h-2.421v5.142h2.42Z"
    />
  </svg>
);
export default RocketProgress;