import React, { useState } from 'react';

import '../assets/style.css';

const Calculator = () => {
  const [inputVar, setInputVar] = useState('');
  const [result, setResult] = useState('');
  const [bracketsStatus, setBracketsStatus] = useState(false);
  const [error, setError] = useState('');

  const getNumber = num => () => {
    setInputVar(inputVar + num);
  };

  const getOperand = op => () => {
    if (op !== '+/-') {
      setInputVar(inputVar + op);
    } else {
      setInputVar(`-${inputVar}`);
    }
  };

  const clearScreen = () => () => {
    setInputVar('');
    setResult('');
    setError('');
  };

  const backspace = () => {
    if (inputVar.length > 0) {
      setInputVar(inputVar.substring(0, inputVar.length - 1));
    }
  };

  const brackets = () => {
    if (!bracketsStatus) {
      setInputVar(`${inputVar}(`);
    } else {
      setInputVar(`${inputVar})`);
    }
    setBracketsStatus(!bracketsStatus);
  };

  const compute = () => {
    try {
      // eslint-disable-next-line no-eval
      const answer = Math.floor(+eval(inputVar));
      setResult(`=${answer}`);
    } catch(err) {
      setError(err.message);
    }
  };

  return (
    <table>
      {/* head section */}
      <tr>
        <tr>
          <td class="heading">
            Math Calculator
          </td>
        </tr>

        <tr>
          <input type="text" id="input" value={inputVar} placeholder="0" readOnly />
          {error === '' && <input type="text" id="answer" value={result} readOnly style={{ color: 'green' }} />}
          {error !== '' && <input type="text" id="error" value={error} readOnly style={{ color: 'red' }} />}
        </tr>
      </tr>
      {/* buttons section */}
      <tr>
        <td>
          <input type="button" value=" CE " onClick={clearScreen()} style={{ color: 'white', background: 'red' }}/>
          <input type="button" value=" &#247; " onClick={getOperand('/')} />
          <input type="button" value=" x " onClick={getOperand('*')} />
          <input type="button" value=" &#8592; " onClick={backspace} style={{ color: 'red' }} />
          <br/>
          <input type="button" value=" 1 " onClick={getNumber(1)} />
          <input type="button" value=" 2 " onClick={getNumber(2)} />
          <input type="button" value=" 3 " onClick={getNumber(3)} />
          <input type="button" value=" + " onClick={getOperand('+')} />
          <br />
          <input type="button" value=" 4 " onClick={getNumber(4)} />
          <input type="button" value=" 5 " onClick={getNumber(5)} />
          <input type="button" value=" 6 " onClick={getNumber(6)} />
          <input type="button" value=" - " onClick={getOperand('-')} />
          <br />
          <input type="button" value=" 7 " onClick={getNumber(7)} />
          <input type="button" value=" 8 " onClick={getNumber(8)} />
          <input type="button" value=" 9 " onClick={getNumber(9)} />
          <input type="button" value=" ( ) " onClick={brackets} />
          <br />
          <input type="button" value=" +/- " onClick={getOperand('+/-')} />
          <input type="button" value=" 0 " onClick={getNumber(0)} />
          <input type="button" value=" = " onClick={compute} style={{width: 120, color: 'white', background: 'green' }} />
        </td>
      </tr>
    </table>
  );
};

export default Calculator;
