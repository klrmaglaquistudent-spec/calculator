import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operator, setOperator] = useState(null);
  const [waitingForNumber, setWaitingForNumber] = useState(false);

  // =========================
  // NUMBER INPUT
  // =========================
  const inputNumber = (number) => {
    if (display === "Error" || display === "0" || waitingForNumber) {
      setDisplay(number);
      setWaitingForNumber(false);
    } else {
      setDisplay(display + number);
    }
  };

  // =========================
  // DECIMAL
  // =========================
  const inputDecimal = () => {
    if (display === "Error") {
      setDisplay("0.");
      return;
    }

    if (waitingForNumber) {
      setDisplay("0.");
      setWaitingForNumber(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  // =========================
  // CLEAR
  // =========================
  const clear = () => {
    setDisplay("0");
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(false);
  };

  // =========================
  // DELETE
  // =========================
  const deleteNumber = () => {
    if (display === "Error") {
      clear();
      return;
    }

    if (display.length === 1) {
      setDisplay("0");
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // =========================
  // CALCULATE
  // =========================
  const calculate = (a, b, op) => {
    switch (op) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      case "×":
        return a * b;

      case "÷":
        return b === 0 ? "Error" : a / b;

      default:
        return b;
    }
  };

  // =========================
  // OPERATOR
  // =========================
  const chooseOperator = (nextOperator) => {
    if (display === "Error") return;

    const inputValue = Number(display);

    if (operator && waitingForNumber) {
      setOperator(nextOperator);
      return;
    }

    if (firstNumber === null) {
      setFirstNumber(inputValue);
    } else if (operator) {
      const result = calculate(
        firstNumber,
        inputValue,
        operator
      );

      if (result === "Error") {
        setDisplay("Error");
        setFirstNumber(null);
        setOperator(null);
        setWaitingForNumber(false);
        return;
      }

      setDisplay(String(result));
      setFirstNumber(result);
    }

    setOperator(nextOperator);
    setWaitingForNumber(true);
  };

  // =========================
  // EQUALS
  // =========================
  const equals = () => {
    if (operator === null || firstNumber === null) {
      return;
    }

    const result = calculate(
      firstNumber,
      Number(display),
      operator
    );

    setDisplay(String(result));
    setFirstNumber(null);
    setOperator(null);
    setWaitingForNumber(true);
  };

  // =========================
  // PERCENTAGE
  // =========================
  const percentage = () => {
    if (display !== "Error") {
      setDisplay(String(Number(display) / 100));
    }
  };

  // =========================
  // POSITIVE / NEGATIVE
  // =========================
  const toggleSign = () => {
    if (display !== "0" && display !== "Error") {
      setDisplay(String(Number(display) * -1));
    }
  };

  return (
    <div className="lego-page">

      {/* =================================
          HIGHLIGHTED STUDENT NAME
      ================================== */}
      <div className="student-info">

        <div className="name-plate">

          <span className="name-stud"></span>

          <h1>
            Kurt Liam R. Maglaqui
          </h1>

          <p>
            DA-3A
          </p>

        </div>

      </div>

      {/* =================================
          CALCULATOR
      ================================== */}
      <div className="calculator-wrapper">

        <div className="calculator">

          {/* TOP LEGO STUDS */}
          <div className="top-studs">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {/* LEGO BRAND */}
          <div className="lego-brand">

            <span>LEGO</span>

            <strong>
              CALCULATOR
            </strong>

          </div>

          {/* DISPLAY */}
          <div className="display-frame">

            <div className="display">
              {display}
            </div>

          </div>

          {/* BUTTONS */}
          <div className="buttons">

            {/* ROW 1 */}

            <button
              className="function"
              onClick={clear}
            >
              AC
            </button>

            <button
              className="function"
              onClick={toggleSign}
            >
              ±
            </button>

            <button
              className="function"
              onClick={percentage}
            >
              %
            </button>

            <button
              className="operator"
              onClick={() => chooseOperator("÷")}
            >
              ÷
            </button>

            {/* ROW 2 */}

            <button
              onClick={() => inputNumber("7")}
            >
              7
            </button>

            <button
              onClick={() => inputNumber("8")}
            >
              8
            </button>

            <button
              onClick={() => inputNumber("9")}
            >
              9
            </button>

            <button
              className="operator"
              onClick={() => chooseOperator("×")}
            >
              ×
            </button>

            {/* ROW 3 */}

            <button
              onClick={() => inputNumber("4")}
            >
              4
            </button>

            <button
              onClick={() => inputNumber("5")}
            >
              5
            </button>

            <button
              onClick={() => inputNumber("6")}
            >
              6
            </button>

            <button
              className="operator"
              onClick={() => chooseOperator("-")}
            >
              −
            </button>

            {/* ROW 4 */}

            <button
              onClick={() => inputNumber("1")}
            >
              1
            </button>

            <button
              onClick={() => inputNumber("2")}
            >
              2
            </button>

            <button
              onClick={() => inputNumber("3")}
            >
              3
            </button>

            <button
              className="operator"
              onClick={() => chooseOperator("+")}
            >
              +
            </button>

            {/* ROW 5 */}

            <button
              className="zero"
              onClick={() => inputNumber("0")}
            >
              0
            </button>

            <button
              onClick={inputDecimal}
            >
              .
            </button>

            <button
              className="delete"
              onClick={deleteNumber}
            >
              ⌫
            </button>

            <button
              className="equals"
              onClick={equals}
            >
              =
            </button>

          </div>

          {/* BOTTOM LEGO STUDS */}
          <div className="bottom-studs">

            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;