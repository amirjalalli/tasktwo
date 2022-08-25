import React, { useState } from "react";
import Button from "../component/Button/Button";
import Color from "../component/Color/Color";
import Picture from "../component/Picture/Picture";
import initialState from "../Data";
const Home = () => {
  const [color, setColor] = useState("");
  const [rectAngles, setRectAngles] = useState(initialState);
  const [selectedId, selectShape] = useState(null);
  console.log(selectedId);
  const colorHandler = (e) => {
    setColor((id) => e.target.getAttribute("style"));
  };
  console.log(color);

  return (
    <article className="HomeContent">
      <section className="pictureContent">
        <Picture color={color} shapeProps={rectAngles} />
      </section>
      <section className="footerContent">
        <div className="foooterTitle">
          <p>RDI</p>
          <div className="border"></div>
        </div>
        <div className="choseColor">
          <Color colorHandler={colorHandler} data={initialState} />
          <Button />
        </div>
      </section>
    </article>
  );
};

export default Home;
