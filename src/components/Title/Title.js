import React from "react";
//Components
import { Parallax } from "rc-scroll-anim";

import "./Title.scss";

export default function Title(props) {
  const { model } = props;
  return (
    <Parallax
      animation={{ x: 0, opacity: 1, playScale: [0.1, 0.6] }}
      style={{ transform: "translateX(-100px)", opacity: 0 }}
    >
      <div className="title">
        <h1>{model}</h1>
      </div>
    </Parallax>
  );
}
