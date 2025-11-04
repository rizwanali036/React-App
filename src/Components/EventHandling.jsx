import "./EV.css";

export const EventHandling = () => {
  const handleButtonClick = (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  };

  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
      {/* Function Components with Named Functions */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />

      {/* Passing event manually through arrow function */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <br />

      {/* Inline Event Handler */}
      <button onClick={(event) => console.log(event)}>Inline Function</button>
      <br />

      {/* Inline Arrow Function */}
      <button onClick={() => alert("Hey I am inline event function")}>
        Inline Arrow Function
      </button>
      <br />

      {/* Passing Arguments to Event Handler */}
      <button onClick={() => handleWelcomeUser("Vinod")}>Click Me (Vinod)</button>
      <button onClick={() => handleWelcomeUser("Ram")}>Click Me (Ram)</button>
    </>
  );
};