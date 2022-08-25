import React, { useState, useRef } from "react";

const Color = ({ colorHandler, data }) => {
  return (
    <>
      {data.map((colors, i) => {
        const { fill, id, color } = colors;
        return (
          <div
            className="colorContent"
            key={id}
            id={i + 1}
            style={{ backgroundColor: `rgb(${fill})` }}
            onClick={colorHandler}
          >
            <div
              className="border-color"
              style={{
                borderLeft: `3px solid ${color}`,
              }}
            ></div>
          </div>
        );
      })}
    </>
  );
};

export default Color;
