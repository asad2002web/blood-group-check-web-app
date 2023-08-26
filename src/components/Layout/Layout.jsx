import React, { useState } from 'react'
import './Layout.css'
import { MdBloodtype } from "react-icons/md";
import loading from '../../assets/submitLoading.svg'
import Swal from 'sweetalert2';
import Accordiam from '../Accordiam/Accordiam';
const Layout = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [antigenA, setAntigenA] = useState(false);
    const [antigenB, setAntigenB] = useState(false);
    const [rhFactor, setRhFactor] = useState(false);
    const [result, setResult] = useState('');

    const calculateResult = () => {
        let bloodType = '';
        // Loading start
        setIsLoading(true);

        setTimeout(() => {

            if (antigenA && antigenB && rhFactor) {
                bloodType = 'AB+ (Posative)';
            } else if (antigenA && antigenB && !rhFactor) {
                bloodType = 'AB- (Negative)';
            } else if (!antigenA && antigenB && rhFactor) {
                bloodType = 'B+ (Posative)';
            } else if (!antigenA && antigenB && !rhFactor) {
                bloodType = 'B- (Negative)';
            } else if (antigenA && !antigenB && rhFactor) {
                bloodType = 'A+ (Posative)';
            } else if (antigenA && !antigenB && !rhFactor) {
                bloodType = 'A- (Negative)';
            } else if (!antigenA && !antigenB && rhFactor) {
                bloodType = 'O+ (Posative)';
            } else if (!antigenA && !antigenB && !rhFactor) {
                bloodType = 'O- (Negative)';
            }

            setResult(bloodType);
            // Loading end
            setIsLoading(false);
            // Display SweetAlert2 with the result
            Swal.fire({
                title: `আপনার রক্তের গ্রুপ পরীক্ষা করা হয়েছে <br/> ${bloodType}`,
                confirmButtonText: "ধন্যবাদ",
                color: '#e90b0b',
                customClass: {
                    title: 'swal2-title-custom-blood',
                    confirmButton: 'swal2-confirm-button-custom'
                  },
                  buttonsStyling: false

            });
        }, 1000);
        resetForm()
    };

    const resetForm = () => {
        setAntigenA(false);
        setAntigenB(false);
        setRhFactor(false);
        setResult('');
    };

    return (
        <div className="BloodCheck">
            <h1 className='heading'>রক্তের গ্রুপ পরীক্ষা করুন
                <MdBloodtype className='ms-1' />
            </h1>
            <Accordiam/>
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
            <div className="space"></div>
            {
                isLoading ? <button onClick={calculateResult}>
                    <img src={loading} alt="loading" className='submit-load' />
                </button> : <button onClick={calculateResult}>পরীক্ষা করুন</button>
            }
            {/* <button onClick={resetForm}>পুনরায়</button> */}
            {result && <div className="Result">আপনার রক্তের গ্রুপ <span>{result}</span></div>}
        </div>
    )
}

export default Layout