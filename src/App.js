import { useState } from "react";
import "./App.css";

function App() {
  const [firstNum, setFirstNum] = useState(0);
  const [symbol, setSymbol] = useState("+");
  const [secondNum, setSecondNum] = useState("0");
  const [result, getResult] = useState("0");
  const [storedNum, storeNum] = useState([]);

  /* const updateFirstNum = (num) => {
    setFirstNum();
    console.log("input number", num, firstNum);
  };*/

  function updateFirstNum(num) {
    if (firstNum === 0 || "0") {
      setFirstNum(num.toString());
    } else {
      setFirstNum(firstNum.toString() + num);
      console.log("input first number", num, firstNum);
    }
  }

  function clearFirstPanel() {
    setFirstNum("0");
  }

  function clearSecondPanel() {
    setSecondNum("0");
  }

  function updateSymbol(sign) {
    setSymbol(sign);
  }

  function updateSecondNum(num) {
    if (secondNum === "0") {
      setSecondNum(num.toString());
    } else {
      setSecondNum(secondNum.toString() + num);
      console.log("input number second", num, secondNum);
    }
  }

  function calculator() {
    if (symbol === "+") {
      getResult(parseInt(firstNum) + parseInt(secondNum));
    } else if (symbol === "-") {
      getResult(parseInt(firstNum) - parseInt(secondNum));
    } else if (symbol === "*") {
      getResult(parseInt(firstNum) * parseInt(secondNum));
    } else if (symbol === "÷") {
      getResult(parseInt(firstNum) / parseInt(secondNum));
    }
  }

  function store() {
    storeNum([firstNum, secondNum, result]);
  }

  function recallStoredFirstNum() {
    const storedFirstNum = storedNum[0];
    return storedFirstNum;
  }

  return (
    <div className="calculator">
      <div className="panel">
        <p className="result">{firstNum}</p>

        <div className="numbers">
          <button onClick={() => updateFirstNum("1")}>1</button>
          <button onClick={() => updateFirstNum("2")}>2</button>
          <button onClick={() => updateFirstNum("3")}>3</button>
          <button onClick={() => updateFirstNum("4")}>4</button>
          <button onClick={() => updateFirstNum("5")}>5</button>
          <button onClick={() => updateFirstNum("6")}>6</button>
          <button onClick={() => updateFirstNum("7")}>7</button>
          <button onClick={() => updateFirstNum("8")}>8</button>
          <button onClick={() => updateFirstNum("9")}>9</button>
          <button onClick={() => updateFirstNum("0")}>0</button>
          <button onClick={() => clearFirstPanel()}>Clear</button>
          <button>Recall</button>
        </div>
      </div>
      <div className="panel">
        <p>{symbol}</p>
        <div className="numbers">
          <button onClick={() => updateSymbol("+")}>+</button>
          <button onClick={() => updateSymbol("-")}>-</button>
          <button onClick={() => updateSymbol("*")}>*</button>
          <button onClick={() => updateSymbol("÷")}>÷</button>
        </div>
      </div>
      <div className="panel">
        <p>{secondNum}</p>
        <div className="numbers">
          <button onClick={() => updateSecondNum("1")}>1</button>
          <button onClick={() => updateSecondNum("2")}>2</button>
          <button onClick={() => updateSecondNum("3")}>3</button>
          <button onClick={() => updateSecondNum("4")}>4</button>
          <button onClick={() => updateSecondNum("5")}>5</button>
          <button onClick={() => updateSecondNum("6")}>6</button>
          <button onClick={() => updateSecondNum("7")}>7</button>
          <button onClick={() => updateSecondNum("8")}>8</button>
          <button onClick={() => updateSecondNum("9")}>9</button>
          <button onClick={() => updateSecondNum("0")}>0</button>
          <button onClick={() => clearSecondPanel()}>Clear</button>
          <button>Recall</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => calculator()}>=</button>
        </div>

        <div className="store">
          <button onClick={() => store}>Store</button>
        </div>
      </div>
    </div>
  );
}

export default App;
