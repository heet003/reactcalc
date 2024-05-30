import "./App.css";
import React, { useState } from "react";

function App() {
  const [displayText, setDisplayText] = useState("0");

  const handleClick = (event) => {
    let value = "";
    value += event.target.textContent;
    setDisplayText(value);
    console.log(event.target.textContent);
  };

  return (
    <div className="App">
      <div className="cal-box">
        <div className="display">{displayText}</div>
        <div className="controls">
          {/* 1 */}
          <div>
            <button>%</button>
            <button>CE</button>
            <button>C</button>
            <button>
              <img src="./clear.png" alt="Clear"></img>
            </button>
          </div>
          {/* 2 */}
          <div>
            <button>⅟x</button>
            <button>x²</button>
            <button>√x</button>
            <button>÷</button>
          </div>
          {/* 3 */}
          <div>
            <button onClick={handleClick}>7</button>
            <button onClick={handleClick}>8</button>
            <button onClick={handleClick}>9</button>
            <button onClick={handleClick}>×</button>
          </div>
          {/* 4 */}
          <div>
            <button onClick={handleClick}>4</button>
            <button onClick={handleClick}>5</button>
            <button onClick={handleClick}>6</button>
            <button onClick={handleClick}>−</button>
          </div>
          {/* 5 */}
          <div>
            <button onClick={handleClick}>1</button>
            <button onClick={handleClick}>2</button>
            <button onClick={handleClick}>3</button>
            <button onClick={handleClick}>+</button>
          </div>
          {/* 6 */}
          <div>
            <button>±</button>
            <button onClick={handleClick}>0</button>
            <button onClick={handleClick}>.</button>
            <button className="submit">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
