import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ReactDom from 'react-dom';
import './Modal1.css'

const Modal = ({ setData, data, modelData, index, fakeString, item }) => {
    const navigate = useNavigate();
    const [cardName, setCardName] = useState('')
    const [cardNum, setCardNum] = useState('')
    const [cardExp, setCardExp] = useState('')
    const [cardCvv, setCardCvv] = useState('')
    const [error, setError] = useState(false)
    const handleSubmit = (e) => {
    console.log("itemmodal", item)

        e.preventDefault()
        if (cardNum.length <= 18) {
            // setError(true)
            alert("Enter valid card num")
            return;
        }
        if (cardExp.length <= 3) {
            // setError(true)
            alert("Enter valid Exp Date")

            return;
        }
        if (cardCvv.length <= 2) {
            // setError(true)
            alert("Enter valid CVV num")
            return;
        }
        navigate('/modal2')
        // console.log(cardName, cardNum, cardExp, cardCvv)
    }
    const handleDate = (e) => {
        console.log(e)
        if (e.key === 'Backspace') {
            if (cardExp.length > 0) setCardExp(cardExp.slice(0, -1))
            return
        }
        console.log(containtNum2(e.target.value))
        if (validate(e.target.value) == true) setCardExp(e.target.value)
        else return
        if (e.target.value.length == 2) setCardExp(e.target.value + "/")
    }
    const cc_format = (value) => {
        const v = value
            .replace(/\s+/g, "")
            .replace(/[^0-9]/gi, "")
            .substr(0, 16);
        const parts = [];
        for (let i = 0; i < v.length; i += 4) {
            parts.push(v.substr(i, 4));
        }
        return parts.length > 1 ? parts.join(" ") : value;
    }
    const containtNum = (inputString) => {
        // Use a regular expression to check for digits (0-9)
        var digitPattern = /\d/;
        // Use the test method to check if the string contains digits
        return !digitPattern.test(inputString);
    }
    const containtNum2 = (inputString) => {
        // Use a regular expression to check for digits (a-z)
        var letterAlpha = /^(0[1-9]|1[0-2])\/\d{2}\/?$|^(0[1-9]|1[0-2])\/\d{4}$/;
        const mmYyRegex = /^(0[1-9]|1[0-2])\/\d{0,2}$/;
        // Use he test method to check if the digits contains string
        return !letterAlpha.test(inputString);
    }
    function validate(s) {
        if (s.length > 5) return false
        for (let i = 0; i < s.length; i++) {
            if (i == 2) {
                if (s[i] != '/') return false;
            }
            else {
                if (s[i] != 0 && s[i] != 1 && s[i] != 2 && s[i] != 3 && s[i] != 4 && s[i] != 5 && s[i] != 6 && s[i] != 7 && s[i] != 8 && s[i] != 9) return false;
            }
        }
        return true;
    }
    const cancel = () => {
        let list = [...data]
        list[index].isAnkur = !list[index].isAnkur
        setData(list)
    }
    //efine
    const tempnavi = useNavigate();
    // console.log(modelData)
    const [success, setSuccess] = useState(false);
    return (
        <>
            <div className='modalCss'>
                <div className='MMTmodal'>

                    <form onSubmit={handleSubmit}>
                        <div><h1 style={{ textAlign: "center" }}>Payment Method </h1></div>
                        <div className='PaymentInput'>
                            <input value={cardName} name='cardNumber'

                                onChange={(e) => { if (e.target.value.length <= 30 && containtNum(e.target.value) == true) setCardName(e.target.value) }}
                                type="text" placeholder='Name on Card' required maxLength={30} />
                        </div>
                        {error ?
                            <label>*required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cc_format(cardNum)}
                                onChange={(e) => { if (e.target.value.length <= 19 && containtNum2(e.target.value) == true) setCardNum(e.target.value) }}
                                type="text" placeholder='0000 0000 0000 0000' required maxLength={19} />
                        </div>
                        {error ?
                            <label>*required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cardExp} name="expiry"
                                onChange={handleDate}
                                type="text" placeholder="MM/YY" required maxLength={5} />
                        </div>
                        {error ?
                            <label>*required</label> : ""}
                        <div className='PaymentInput'>
                            <input value={cardCvv}
                                onChange={(e) => { if (e.target.value.length <= 3 && containtNum2(e.target.value) == true) setCardCvv(e.target.value) }}
                                type="text" placeholder='CVV' required maxLength={3} />
                        </div>
                        {error ?
                            <label>*required</label> : ""}
                        <div className='btnPay'>
                            <button className='cancel' style={{ backgroundColor: "rgb(220,53,69)" }} onClick={cancel}>Cancel</button>
                            <button className='pay'>Pay</button>
                        </div>
                    </form>
                </div>
            </div >
        </>
    )
}
export default Modal
