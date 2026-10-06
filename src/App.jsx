import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const press = (value) => {
    if (value === "CLR") {
      setDisplay("0");
    } else if (value === "=") {
      try {
        const result = eval(display.replace("÷", "/"));
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
    } else {
      if (display === "0" || display === "Error") {
        setDisplay(value);
      } else {
        setDisplay(display + value);
      }
    }
  };

  return (
    <div className="page">

      <div className="calculator">

        {/* Header */}
        <div className="title">
          <div className="title-main">
            CALCULATOR
          </div>

          <div className="title-sub">
            Kurt Liam R. Maglaqui · DA3A
          </div>
        </div>

        {/* Display */}
        <div className="display-area">
          <div className="display-label">
            RESULT
          </div>

          <input
            className="display"
            value={display}
            readOnly
          />
        </div>

        {/* Buttons */}
        <div className="buttons">

          <button
            className="number"
            onClick={() => press("7")}
          >
            7
          </button>

          <button
            className="number"
            onClick={() => press("8")}
          >
            8
          </button>

          <button
            className="number"
            onClick={() => press("9")}
          >
            9
          </button>

          <button
            className="operator"
            onClick={() => press("÷")}
          >
            ÷
          </button>


          <button
            className="number"
            onClick={() => press("4")}
          >
            4
          </button>

          <button
            className="number"
            onClick={() => press("5")}
          >
            5
          </button>

          <button
            className="number"
            onClick={() => press("6")}
          >
            6
          </button>

          <button
            className="operator"
            onClick={() => press("*")}
          >
            *
          </button>


          <button
            className="number"
            onClick={() => press("1")}
          >
            1
          </button>

          <button
            className="number"
            onClick={() => press("2")}
          >
            2
          </button>

          <button
            className="number"
            onClick={() => press("3")}
          >
            3
          </button>

          <button
            className="operator"
            onClick={() => press("-")}
          >
            -
          </button>


          <button
            className="clear"
            onClick={() => press("CLR")}
          >
            CLR
          </button>

          <button
            className="number"
            onClick={() => press("0")}
          >
            0
          </button>

          <button
            className="equals"
            onClick={() => press("=")}
          >
            =
          </button>

          <button
            className="operator"
            onClick={() => press("+")}
          >
            +
          </button>

        </div>

        {/* Footer */}
        <div className="calculator-footer">
          <span>KC-01</span>
          <span>STANDARD CALCULATOR</span>
          <span>2026</span>
        </div>

      </div>

    </div>
  );
}

export default App;