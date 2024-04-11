import * as React from "react"
import Svg, { G, Rect, Path, Defs } from "react-native-svg"

export function BackSVG(props) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_ddd_13_87)">
        <Rect x={5} y={3} width={22} height={22} rx={11} fill="#fff" />
        <Path
          d="M18 11l-4 3.5 4 3.5"
          stroke="#000"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs></Defs>
    </Svg>
  )
}

export function PaperSVG(props) {
  return (
    <Svg
      width={13}
      height={15}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M1.5 2.5v10a1.25 1.25 0 001.25 1.25h7.5a1.25 1.25 0 001.25-1.25V5.214a1.25 1.25 0 00-.376-.894L8.349 1.606a1.25 1.25 0 00-.874-.356H2.75A1.25 1.25 0 001.5 2.5z"
        stroke="#4F4F4F"
        strokeWidth={1.25}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.75 1.25v2.5A1.25 1.25 0 009 5h2.5"
        stroke="#4F4F4F"
        strokeWidth={1.25}
        strokeLinejoin="round"
      />
    </Svg>
  )
}
