// Example 1 – Using if condition
// function Greeting(props) {
//   if (props.isLoggedIn) {
//     return <h2>Welcome back, Ali!</h2>;
//   } else {
//     return <h2>Please log in.</h2>;
//   }
// }

// Example 2 – Using Ternary Operator
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? <h2>Welcome Ali!</h2> : <h2>Please log in</h2>}
    </div>
  );
}

// Example 3 – Using && (short-circuit)
// function Alert({ show }) {
//   return (
//     <div>
//       {show && <p>Warning: Something went wrong!</p>}
//     </div>
//   );
// }

export default Greeting;