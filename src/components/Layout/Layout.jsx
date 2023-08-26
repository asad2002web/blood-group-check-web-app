import React, { useState } from 'react'
import './Layout.css'
const Layout = () => {
    const [antigenA, setAntigenA] = useState(false);
    const [antigenB, setAntigenB] = useState(false);
    const [rhFactor, setRhFactor] = useState(false);
    const [result, setResult] = useState('');
  
    const calculateResult = () => {
      let bloodType = '';
  
      if (antigenA && antigenB && rhFactor) {
        bloodType = 'AB+';
      } else if (antigenA && antigenB && !rhFactor) {
        bloodType = 'AB-';
      } else if (!antigenA && antigenB && rhFactor) {
        bloodType = 'B+';
      } else if (!antigenA && antigenB && !rhFactor) {
        bloodType = 'B-';
      } else if (antigenA && !antigenB && rhFactor) {
        bloodType = 'A+';
      } else if (antigenA && !antigenB && !rhFactor) {
        bloodType = 'A-';
      } else if (!antigenA && !antigenB && rhFactor) {
        bloodType = 'O+';
      } else if (!antigenA && !antigenB && !rhFactor) {
        bloodType = 'O-';
      }
  
      setResult(bloodType);
    };
  
    const resetForm = () => {
      setAntigenA(false);
      setAntigenB(false);
      setRhFactor(false);
      setResult('');
    };

    return (
        <div className="BloodCheck">
      <h1>Blood Type Checker</h1>
      <div>
        <label>
          Antigen A:
          <input type="checkbox" checked={antigenA} onChange={() => setAntigenA(!antigenA)} />
        </label>
      </div>
      <div>
        <label>
          Antigen B:
          <input type="checkbox" checked={antigenB} onChange={() => setAntigenB(!antigenB)} />
        </label>
      </div>
      <div>
        <label>
          Rh Factor:
          <input type="checkbox" checked={rhFactor} onChange={() => setRhFactor(!rhFactor)} />
        </label>
      </div>
      <button onClick={calculateResult}>Result</button>
      <button onClick={resetForm}>Reset</button>
      {result && <div className="Result">Result: {result}</div>}
    </div>
    )
}

export default Layout