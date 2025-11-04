import "./EV.css";

export const EventHandling = () => {
  function handleButtonClick(event) {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    alert("Hey I am onClick Event");
  }

  // Arrow function
  const handleWelcomeUser = (user) => {
    console.log(`Hey ${user}, Welcome`);
  };

  return (
    <>
      {/* Function Component with Named Function */}
      <button onClick={handleButtonClick}>Click Me</button>
      <br />

      {/* Inline Event Handler (with event object) */}
      <button onClick={(event) => handleButtonClick(event)}>Click Me 2</button>
      <br />

      {/* Inline Event Handler directly */}
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