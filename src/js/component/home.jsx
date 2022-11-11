import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Trafficlight = () => {
	//useState("(initial value)")
  const [color, setColor] = useState("");
  console.log(color);

  //when selected color is red
  if (color == "red") {
    return (
      <div>
        <div
          className="circle red selected"
          onClick={() => setColor("")}
        ></div>
        <div className="yellow circle" onClick={() => setColor("yellow")}></div>
        <div className="green circle" onClick={() => setColor("green")}></div>
      </div>
    );
  }

  //when selected color is yellow
  if (color == "yellow") {
    return (
      <div>
        <div className="circle red" onClick={() => setColor("red")}></div>
        <div
          className="yellow circle selected"
          onClick={() => setColor("")}
        ></div>
        <div className="green circle" onClick={() => setColor("green")}></div>
      </div>
    );
  }

  //when selected color is green
  if (color == "green") {
    return (
      <div>
        <div className="circle red " onClick={() => setColor("red")}></div>
        <div className="yellow circle" onClick={() => setColor("yellow")}></div>
        <div
          className="green circle selected"
          onClick={() => setColor("")}
        ></div>
      </div>
    );
  }
  // equal ==, not equal !=, greater than >, less than <
  if(color != ""){
	return (<h1>INVALID</h1> )
  }
  //when invalid or no color
  //red circle has bug: setting to blue instead of red
    return (
    <div>
      <div className="circle red" onClick={() => setColor("blue")}></div>
      <div className="yellow circle" onClick={() => setColor("yellow")}></div>
      <div className="green circle" onClick={() => setColor("green")}></div>
    </div>
  );
};

export default Trafficlight;
