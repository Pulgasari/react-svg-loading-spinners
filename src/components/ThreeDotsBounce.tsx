import React, { SVGProps } from "react";

export default function ThreeDotsBounce({
  size = 24,
  dur = "0.6s",
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
      <circle cx="4" cy="12" r="3">
        <animate
          id="a"
          begin="0;b.end+0.25s"
          attributeName="cy"
          calcMode="spline"
          dur={dur}
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="12" cy="12" r="3">
        <animate
          begin="a.begin+0.1s"
          attributeName="cy"
          calcMode="spline"
          dur={dur}
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
      <circle cx="20" cy="12" r="3">
        <animate
          id="b"
          begin="a.begin+0.2s"
          attributeName="cy"
          calcMode="spline"
          dur={dur}
          values="12;6;12"
          keySplines=".33,.66,.66,1;.33,0,.66,.33"
        />
      </circle>
    </svg>
  );
}
