import React, { SVGProps } from "react";
import { stringDurationToFloat } from "../util";

export default function WifiFade({
  size = 24,
  dur = "0.25s",
  color = 'currenColor',
}: SVGProps<SVGElement>): JSX.Element {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,21L15.6,16.2C14.6,15.45 13.35,15 12,15C10.65,15 9.4,15.45 8.4,16.2L12,21"
        opacity="0"
      >
        <animate
          id="a"
          begin="0;d.end+0.2s"
          attributeName="opacity"
          dur={dur}
          values="0;1"
          fill="freeze"
        />
        <animate
          id="d"
          begin="c.end+0.5s"
          attributeName="opacity"
          dur={stringDurationToFloat(dur) / 2.5}
          values="1;0"
          fill="freeze"
        />
      </path>
      <path
        d="M12,9C9.3,9 6.81,9.89 4.8,11.4L6.6,13.8C8.1,12.67 9.97,12 12,12C14.03,12 15.9,12.67 17.4,13.8L19.2,11.4C17.19,9.89 14.7,9 12,9Z"
        opacity="0"
      >
        <animate
          id="b"
          begin="a.end"
          attributeName="opacity"
          dur={dur}
          values="0;1"
          fill="freeze"
        />
        <animate
          begin="c.end+0.5s"
          attributeName="opacity"
          dur={stringDurationToFloat(dur) / 2.5}
          values="1;0"
          fill="freeze"
        />
      </path>
      <path
        d="M12,3C7.95,3 4.21,4.34 1.2,6.6L3,9C5.5,7.12 8.62,6 12,6C15.38,6 18.5,7.12 21,9L22.8,6.6C19.79,4.34 16.05,3 12,3"
        opacity="0"
      >
        <animate
          id="c"
          begin="b.end"
          attributeName="opacity"
          dur={dur}
          values="0;1"
          fill="freeze"
        />
        <animate
          begin="c.end+0.5s"
          attributeName="opacity"
          dur={stringDurationToFloat(dur) / 2.5}
          values="1;0"
          fill="freeze"
        />
      </path>
    </svg>
  );
}
