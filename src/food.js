import React from "react";

const Food = (props) => {
  console.log(props);
  return (
    <div>
      <h1>name:{props.name}</h1>
      <h2>price :{props.price}</h2>
      <p>desc:{props.desc}</p>
    </div>
  );
};

export default Food;
