import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const press = (value) => {
    if (value === "C") {
      setDisplay("0");
    } 
    else if (value === "MAGLAQUI") {
      setDisplay("Kurt Liam R. Maglaqui");
    } 
    else if (value === "=") {
      try {
        const result = eval(display.replace("÷", "/"));
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
    } 
    else {
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


        {/* SURNAME BUTTON */}

        <button
          className="surname"
          onClick={() => press("MAGLAQUI")}
        >
          MAGLAQUI
        </button>


        {/* FOOTER */}

        <div className="footer">
          DA3A • CALCULATOR
        </div>

      </div>

    </div>
  );
}

export default App;