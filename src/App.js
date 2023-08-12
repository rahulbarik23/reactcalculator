import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState('');
  const [result, setResult] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'num1') {
      setNum1(value);
    } else if (name === 'num2') {
      setNum2(value);
    }
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
  };

  const handleCalculate = () => {
    setErrorMessage('');
    if (num1 === '' || num2 === '') {
      setErrorMessage('Both fields are required.');
      setResult('');
      return;
    }

    const parsedNum1 = parseFloat(num1);
    const parsedNum2 = parseFloat(num2);

    if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
      setErrorMessage('Invalid input. Please enter valid numbers.');
      setResult('');
      return;
    }

    let calculatedResult;
    switch (operator) {
      case '+':
        calculatedResult = parsedNum1 + parsedNum2;
        break;
      case '-':
        calculatedResult = parsedNum1 - parsedNum2;
        break;
      case '*':
        calculatedResult = parsedNum1 * parsedNum2;
        break;
      case '/':
        calculatedResult = parsedNum1 / parsedNum2;
        break;
      default:
        break;
    }

    setResult(calculatedResult);
  };

  return (
    <div className="calculator">
      <input
        type="text"
        name="num1"
        placeholder="Enter number 1"
        value={num1}
        onChange={handleInput}
      />
      <input
        type="text"
        name="num2"
        placeholder="Enter number 2"
        value={num2}
        onChange={handleInput}
      />
      <div className="operators">
        <button onClick={() => handleOperatorClick('+')}>+</button>
        <button onClick={() => handleOperatorClick('-')}>-</button>
        <button onClick={() => handleOperatorClick('*')}>*</button>
        <button onClick={() => handleOperatorClick('/')}>/</button>
      </div>
      <button className="calculate-btn" onClick={handleCalculate}>
        Calculate
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {result && (
        <p className="success-message">
          Result: {result.toFixed(2)}
        </p>
      )}
    </div>
  );
}

export default App;
