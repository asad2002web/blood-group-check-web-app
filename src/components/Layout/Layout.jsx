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
            <h1>রক্তের গ্রুপ পরীক্ষা করুন</h1>
            <div className='card-container'>
                <label for="antigenA">
                    যদি এন্টিজেন A মিশানো রক্ত ভেঙ্গে  যায়, <br />
                    মার্ক করে দাও
                </label>
                <input id="antigenA" type="checkbox" checked={antigenA} onChange={() => setAntigenA(!antigenA)} />
            </div>
            <div className='card-container'>
                <label for="antigenB">
                    যদি এন্টিজেন B মিশানো রক্ত ভেঙ্গে  যায়, <br />
                    মার্ক করে দাও
                </label>
                <input id="antigenB" type="checkbox" checked={antigenB} onChange={() => setAntigenB(!antigenB)} />
            </div>
            <div className='card-container'>
                <label for="rhFactor">
                    যদি Rh Factor (C) মিশানো রক্ত ভেঙ্গে  যায়, <br />
                    মার্ক করে দাও
                </label>
                <input id="rhFactor" type="checkbox" checked={rhFactor} onChange={() => setRhFactor(!rhFactor)} />
            </div>
            <button onClick={calculateResult}>পরীক্ষা করুন</button>
            <button onClick={resetForm}>পুনরায়</button>
            {result && <div className="Result">Result: {result}</div>}
        </div>
    )
}

export default Layout