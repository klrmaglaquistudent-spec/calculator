import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const press = (value) => {
    // Clear
    if (value === "C") {
      setDisplay("0");
      return;
    }

    // Equal
    if (value === "=") {
      try {
        const result = eval(display.replace("÷", "/"));
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }

      return;
    }

    // Numbers and operators
    if (display === "0" || display === "Error") {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className="page">

      <div className="calculator">

        {/* TITLE */}

        <div className="title">
          <h1>CALCULATOR</h1>

          <p>
            Kurt Liam R. Maglaqui - DA3A
          </p>
        </div>


        {/* DISPLAY */}

        <div className="display-box">

          <span>RESULT</span>

          <input
            className="display"
            value={display}
            readOnly
          />

        </div>


        {/* BUTTONS */}

        <div className="buttons">

          {/* 7 8 9 ÷ */}

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


          {/* 4 5 6 * */}

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


          {/* 1 2 3 - */}

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


          {/* C 0 = + */}

          <button
            className="clear"
            onClick={() => press("C")}
          >
            C
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

      </div>

    </div>
  );
}

export default App;