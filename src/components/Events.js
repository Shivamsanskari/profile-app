import React from "react";

const Events = () => {
  // A function Inside the component
  const handleClick = () => {
    alert("Button clicked!! ");
  };

  // We can use Anonymous function to alert or output simple things
  // Anonymous function is something like this ---  ()=>{}

  return (
    <>
      <h1>Handling Events</h1>
      <button className="btn" onClick={handleClick}>
        Click Me
      </button>
    </>
  );
};
export default Events;
