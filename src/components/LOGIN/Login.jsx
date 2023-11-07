import React, { useContext, useState } from 'react'
import './Login.css'
import Facebook from '../../Logo/facebook.png'
import Google from '../../Logo/Google.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = ({ setLoginDetails }) => {
    const navegate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const workingFun = () => {
        return alert("Still working. Please go with Sign Up ")
    }
    const LoginData = (e) => {
        e.preventDefault();
        // let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (email === "" && password === "") {
            alert("All  input field are  mandatory ...")
        } else if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
            let obj = [{
                userName: localStorage.getItem("userName"),
                email: localStorage.getItem("email"),
                password: localStorage.getItem("password")
            }]
            setLoginDetails(obj)
            alert("Login Successfully");
            navegate('/')
        }
        localStorage.setItem("lastname", "Smith");
        localStorage.getItem("lastname");
        const containtNum = (inputString) => {
            // Use a regular expression to check for digits (0-9)
            var digitPattern = /\d/;
            // Use the test method to check if the string contains digits
            return !digitPattern.test(inputString);
        }
    }
    return (
        <form>
            <div className='LoginContainer'>
                <div className='mainLogin'>
                    <h1 style={{ textAlign: "center", marginTop: "15px" }}>Log in</h1>
                    <h3 style={{ textAlign: "center", marginTop: "-15px" }}>Don't have an account?<span style={{ color: "rgb(13,110,253)" }}><Link to="/signUp" style={{ color: "rgb(13,110,253)", textDecoration: "none" }} > Sign Up </Link></span></h3>
                    <div className='icons'>
                        <button style={{ marginRight: "10px" }} onClick={workingFun}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} /> Sign in with <span style={{ color: "red", }}><b>Google</b></span></button>
                        <button id='iconFace' onClick={workingFun}><img src={Facebook} alt="" /></button>
                    </div>
                    <div className='OR'>
                        <div className='spaceDiv'></div>
                        <span className='OORR'>or</span>
                        <div className='spaceDiv'></div>
                    </div>
                    <div className='center'>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "220px" }}>Email</label><br />
                            <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)
                            }
                                required
                            /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Password</label><br />
                            <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required /><br />
                        </div>
                        <button onClick={(e) => LoginData(e)}>Log in</button>
                        <p style={{ color: "rgb(13,110,253)", cursor: "pointer" }}>Forgot Password ?</p>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Login
