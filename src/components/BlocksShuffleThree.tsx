import React, { SVGProps } from "react";

export default function BlocksShuffleThree({
  size = 24,
  dur = "0.2s",
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
      <rect x="1" y="1" rx="1" width="10" height="10">
        <animate id="a" begin="0;l.end" attributeName="x" dur={dur} values="1;13" fill="freeze" />
        <animate id="d" begin="c.end" attributeName="y" dur={dur} values="1;13" fill="freeze" />
        <animate id="g" begin="f.end" attributeName="x" dur={dur} values="13;1" fill="freeze" />
        <animate id="j" begin="i.end" attributeName="y" dur={dur} values="13;1" fill="freeze" />
      </rect>
      <rect x="1" y="13" rx="1" width="10" height="10">
        <animate id="b" begin="a.end" attributeName="y" dur={dur} values="13;1" fill="freeze" />
        <animate id="e" begin="d.end" attributeName="x" dur={dur} values="1;13" fill="freeze" />
        <animate id="h" begin="g.end" attributeName="y" dur={dur} values="1;13" fill="freeze" />
        <animate id="k" begin="j.end" attributeName="x" dur={dur} values="13;1" fill="freeze" />
      </rect>
      <rect x="13" y="13" rx="1" width="10" height="10">
        <animate id="c" begin="b.end" attributeName="x" dur={dur} values="13;1" fill="freeze" />
        <animate id="f" begin="e.end" attributeName="y" dur={dur} values="13;1" fill="freeze" />
        <animate id="i" begin="h.end" attributeName="x" dur={dur} values="1;13" fill="freeze" />
        <animate id="l" begin="k.end" attributeName="y" dur={dur} values="1;13" fill="freeze" />
      </rect>
    </svg>
  );
}
