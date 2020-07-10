import {useParams} from "react-router-dom";
import React from "react";

export function PageRGB() {
  let {r, g, b} = useParams();
  let background = `rgb(${r}, ${g}, ${b})`;

  return (
    <div
      style={{
        background,
        height: 2000,
        width: '100%',
      }}
    >
      rgb({r}, {g}, {b})
    </div>
  );
}