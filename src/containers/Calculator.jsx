import React, { useState } from 'react';

import Button from '../components/Button';
import Text from '../components/Text';
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
          <Text id="input" value={inputVar} placeholder="0" readOnly />
          {error === '' && <Text id="answer" value={result} readOnly style={{ color: 'green' }} />}
          {error !== '' && <Text id="error" value={error} readOnly style={{ color: 'red' }} />}
        </tr>
      </tr>
      {/* buttons section */}
      <tr>
        <td>
          <Button value=" CE " onClick={clearScreen()} style={{ color: 'white', background: 'red' }}/>
          <Button value=" &#247; " onClick={getOperand('/')} />
          <Button value=" x " onClick={getOperand('*')} />
          <Button value=" &#8592; " onClick={backspace} style={{ color: 'red' }} />
          <br/>
          <Button value=" 1 " onClick={getNumber(1)} />
          <Button value=" 2 " onClick={getNumber(2)} />
          <Button value=" 3 " onClick={getNumber(3)} />
          <Button value=" + " onClick={getOperand('+')} />
          <br />
          <Button value=" 4 " onClick={getNumber(4)} />
          <Button value=" 5 " onClick={getNumber(5)} />
          <Button value=" 6 " onClick={getNumber(6)} />
          <Button value=" - " onClick={getOperand('-')} />
          <br />
          <Button value=" 7 " onClick={getNumber(7)} />
          <Button value=" 8 " onClick={getNumber(8)} />
          <Button value=" 9 " onClick={getNumber(9)} />
          <Button value=" ( ) " onClick={brackets} />
          <br />
          <Button value=" +/- " onClick={getOperand('+/-')} />
          <Button value=" 0 " onClick={getNumber(0)} />
          <Button value=" = " onClick={compute} style={{width: 120, color: 'white', background: 'green' }} />
        </td>
      </tr>
    </table>
  );
};

export default Calculator;
