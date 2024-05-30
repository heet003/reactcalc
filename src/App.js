import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="cal-box">
        <div className="display">0</div>
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
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
          </div>
          {/* 4 */}
          <div>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>−</button>
          </div>
          {/* 5 */}
          <div>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
          </div>
          {/* 6 */}
          <div>
            <button>±</button>
            <button>0</button>
            <button>.</button>
            <button>=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
