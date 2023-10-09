import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import ReactDom from 'react-dom';
import './Modal2.css'
import Payment from "../../Logo/payment.png"
import { useParams } from 'react-router-dom';
import ApiFetch from '../FetchData/ApiFetch';

const Modal2 = ({ setData, data, modelData, index, fakeString }) => {
    const tempnavi = useNavigate();
    // console.log(modelData)
    const [success, setSuccess] = useState(false);
    const [closePage, setClosePage] = useState(true);
    const localUserName = localStorage.getItem("userName");
    const closefun = () => {
        setClosePage(false)
        tempnavi('/')
    }
    return (
        <>
            <ApiFetch />
            {closePage &&
                <div className='modalCss'>
                    <div className='MMTmodal-sub' style={{}}>
                        {success && <h3 style={{ textAlign: "center", marginTop: "10px", }}> <img src={Payment} alt="Success" style={{ width: "30px", height: "30px", borderRadius: "20px" }} /> Payment Successfull</h3>}
                        <div><h1 style={{ textAlign: "center", margin: "30px" }}>Fare Summary </h1></div>
                        <button className='btn-close' onClick={closefun}>&times;</button>
                        <div className='Fare'>
                            <div className='baseFare'>
                                <div ><b>Base Fare</b></div>
                                <div style={{ marginRight: "20px" }}>&#8377;540</div>
                            </div>
                            <div className='baseFare'>
                                <div style={{ marginLeft: "20px" }}><b>Fee & Surcharges</b></div>
                                <div style={{ marginRight: "20px" }}>&#8377;540</div>
                            </div>
                            <div className='baseFare'>
                                <div style={{ marginLeft: "5px" }}><b>Total Amount</b></div>
                                <div style={{ marginRight: "20px" }}>&#8377;1080</div>
                            </div>
                            <h4 style={{ textAlign: "center", color: "red" }}> {`Thank you choosing ${localUserName}`}</h4>
                        </div>
                        <div className='rec-logo'>
                            <img className='conformation' src={Payment} />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
export default Modal2
