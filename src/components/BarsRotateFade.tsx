import React, { SVGProps } from "react";

export default function BarsRotateFade({
  size = 24,
  dur = "0.75s",
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
      <g>
        <rect x="11" y="1" width="2" height="5" opacity=".14" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(30 12 12)" opacity=".29" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(60 12 12)" opacity=".43" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(90 12 12)" opacity=".57" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(120 12 12)" opacity=".71" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(150 12 12)" opacity=".86" />
        <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="discrete"
          dur={dur}
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}
