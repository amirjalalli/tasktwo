import React, { cloneElement, useRef, useState } from "react";
import city from "./../../image/city.jpg";

const Picture = ({ color, selectId, shapeProps }) => {
  const divRef = useRef();
  const [height, setHeight] = useState("");
  const [width, setWidth] = useState("");
  const [client, setClient] = useState({
    clientX: "0",
    clientY: "0",
    moved: false,
  });
  const imgHandler = (e) => {
    // console.log(e);
    let clientx = e.clientX;
    let clienty = e.clientY;
    console.log("x", clientx);
    setClient({ clientX: clientx, clientY: clienty });
  };
  // let left = divRef.current.offsetLeft;
  // let top = divRef.current.offsetTop;
  const onMouseDown = (e) => {
    client.moved = true;
    setClient({
      clientX: e.clientX,
      //  Math.abs(divRef.current.offsetLeft - e.clientX),
      clientY: e.clientY,
      //  Math.abs(divRef.current.offsetTop - e.clientY),
    });

    // console.log(client.clientX, client.clientY);
  };
  const onMouseUp = (e) => {
    setClient({
      ...client,
      moved: false,
    });
  };
  const onMouseMove = (e) => {
    e.preventDefault();
    if (client.moved) {
      setClient({
        moved: true,
        clientX: divRef.current.offsetLeft,
        clientY: divRef.current.offsetTop,
      });
    }
  };
  const clickHandler = (e) => {
    let height = e.target.offsetHeight;
    let width = e.target.offsetWidth;
  };
  return (
    <div
      className="img-content"
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <img
        src={city}
        alt="city"
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
      />

      {/* {rectAngles.find((rect) => console.log(rect.id === selectId))} */}

      <div
        className="squreColor"
        style={{
          top: `${client.clientY}px`,
          left: `${client.clientX}px`,
          backgroundColor: `${String(color.slice(18, 39))}`,
          height: `${height}px`,
          width: `${width}px`,
        }}
        ref={divRef}
        draggable
      ></div>
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
      <input
        type="text"
        value={height}
        onChange={(e) => setHeight(e.target.value)}
      />
      <button onClick={clickHandler}>click</button>
    </div>
  );
};

export default Picture;

{
  /* <div
onClick={clickHandler}
className="squreColor"
style={{
  top: `${client.clientY}px`,
  left: `${client.clientX}px`,
  backgroundColor: `${String(color.slice(18, 39))}`,
}}
></div>; */
}

// .map((rect, i) => {
//   return (
//     <div
//       key={i}
//       onClick={clickHandler}
//       className="squreColor"
//       style={{
//         top: `${rect.x}px`,
//         left: `${rect.y}px`,
//         backgroundColor: `${String(color.slice(18, 39))}`,
//       }}
//     ></div> )
