import "./App.css";
import React, { useState } from "react";

function App() {
  var [displayText, setDisplayText] = useState("");

  const handleClick = (event) => {
    var value = event.target.value;
    if (value == "%") {
      displayText += "/100";
    } else if (value == "√x") {
      displayText = `Math.sqrt(${displayText})`;
    } else if (value == "x²") {
      displayText = `Math.pow(${displayText},2)`;
    } else if (value == "⅟x") {
      displayText = `1/${displayText}`;
    } else {
      displayText += value;
    }
    setDisplayText(displayText);
  };

  const showResult = () => {
    const result = eval(displayText);
    setDisplayText(result);
  };

  const clearDisplay = () => {
    displayText = "";
    setDisplayText(displayText);
  };

  const clearCharacter = () => {
    displayText = displayText.slice(0, -1);
    setDisplayText(displayText);
  };

  return (
    <div className="App">
      <div className="cal-box">
        <div className="display">{displayText}</div>
        <div className="controls">
          {/* 1 */}
          <div>
            <button value="%" onClick={handleClick}>
              %
            </button>
            <button onClick={clearDisplay}>CE</button>
            <button onClick={clearDisplay}>C</button>
            <button onClick={clearCharacter}>
              <img src="./clear.png" alt="Clear"></img>
            </button>
          </div>
          {/* 2 */}
          <div>
            <button value="⅟x" onClick={handleClick}>
              ⅟x
            </button>
            <button value="x²" onClick={handleClick}>
              x²
            </button>
            <button value="√x" onClick={handleClick}>
              √x
            </button>
            <button value="/" onClick={handleClick}>
              ÷
            </button>
          </div>
          {/* 3 */}
          <div>
            <button value="7" onClick={handleClick}>
              7
            </button>
            <button value="8" onClick={handleClick}>
              8
            </button>
            <button value="9" onClick={handleClick}>
              9
            </button>
            <button value="*" onClick={handleClick}>
              ×
            </button>
          </div>
          {/* 4 */}
          <div>
            <button value="4" onClick={handleClick}>
              4
            </button>
            <button value="5" onClick={handleClick}>
              5
            </button>
            <button value="6" onClick={handleClick}>
              6
            </button>
            <button value="-" onClick={handleClick}>
              −
            </button>
          </div>
          {/* 5 */}
          <div>
            <button value="1" onClick={handleClick}>
              1
            </button>
            <button value="2" onClick={handleClick}>
              2
            </button>
            <button value="3" onClick={handleClick}>
              3
            </button>
            <button value="+" onClick={handleClick}>
              +
            </button>
          </div>
          {/* 6 */}
          <div>
            <button>±</button>
            <button value="0" onClick={handleClick}>
              0
            </button>
            <button value="." onClick={handleClick}>
              .
            </button>
            <button onClick={showResult} className="submit">
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
