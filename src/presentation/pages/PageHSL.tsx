import {useParams} from "react-router-dom";
import React from "react";

export function PageHSL() {
  let {h, s, l} = useParams();
  let background = `hsl(${h}, ${s}%, ${l}%)`;

  return (
    <div
      style={{
        background,
        height: 2000,
      }}
    >
      hsl({h}, {s}%, {l}%)
    </div>
  );
}