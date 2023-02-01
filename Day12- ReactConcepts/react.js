// React
// is a javascript library to build User Interface. It lets you compose complex UIs from small and isolated pieces of code called “components”.
//- Declarative
//-component based
//- Learn once, write anywhere

// Every thing in react is due to state change. React doen't manipulate all the DOM, rather it creates a virtual copyofDOm, and compares it with actual DOM.
//Wherever it finds the change, it directly manipulates the DOM, without refreshing the whole page.


//useState - is a function that returns array of state variable and setter function.
//when the state variable changes then the view changes.
//view is what the App() function returns.
// export default function App() {
//     return (
//       <div>
//         <h1>Hello CodeSandbox</h1>
//         <h2>Start editing to see some magic happen!</h2>
//       </div>
//     );
//   }

//simple exxample of useState
import "./styles.css";
import { useState } from "react";

// var color = "red";
export default function App() {
  let [size, setSize] = useState(0);
  let [color, setColor] = useState("transparent");
  function changeFontIncrease() {
    let newsize = size + 1;
    setSize(newsize);
  }

  function changeFontDecrease() {
    let newsize = size - 1;
    setSize(newsize);
  }

  const changeColor = () => {
    if (color === "transparent" ? setColor("red"): setColor("transparent"));
    // setColor(color);
    
  };
  return (
    <div className="App">
      <button onClick={changeFontIncrease}>+</button>
      <button onClick={changeFontDecrease}>-</button>
      <div>{size}</div>
      <p style={{ backgroundColor: color }}>I'm the powerful girl!</p>
      <button onClick={changeColor}>toggle</button>
    </div>
  );
}


//React has its own DOM - copy of actual DOM called virtual DOM.
//NOTE: Every time the state changes, the re-renterig happens