import React from "react";
import Food from "./food";

// JS in JSX - use {} to include javascript code

const App = () => {
  let friends = ["Harry", "Ron", "Snap"];
  let foods = [
    { name: "Melon", price: 16, desc: "This is melon" },
    { name: "Apple", price: 20, desc: "This is apple" },
  ];
  return (
    <div>
      <h1>My profile</h1>
      <p>My name is Mike.</p>
      <p>I am {25 + 6} years old.</p>
      <p>My friends are :</p>
      {friends.map((friend) => {
        return <p>{friend}</p>;
      })}

      {/* set properties to component of React(Food) */}
      {foods.map((food) => (
        <Food name={food.name} price={food.price} desc={food.desc} />
      ))}
    </div>
  );
};

export default App;
