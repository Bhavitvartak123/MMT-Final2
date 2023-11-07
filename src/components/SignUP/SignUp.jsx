import React, { useEffect, useState } from 'react'
// import './Login.css'
import Facebook from '../../Logo/facebook.png'
import Google from '../../Logo/Google.png'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navegate = useNavigate();
    const [userName, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const details = (e) => {
        e.preventDefault();
        let emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
       
        if (email === "" && password === "" && userName === "") {
            alert("All  input field are  mandatory ...")
        } else if (!email.match(emailPattern)) {
            alert('Please enter valid email ...')
        }
        else {
            localStorage.setItem("userName", userName)
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            alert("Registered Successfully");
            navegate('/login')
        }
    }
    return (
        <form>
            <div className='LoginContainer'>
                <div className='mainLogin'>
                    <h1 style={{ textAlign: "center", marginTop: "15px" }}>Log in</h1>
                    <h3 style={{ textAlign: "center", marginTop: "-15px" }}>Don't have an account?<span style={{ color: "rgb(13,110,253)" }}><Link to="/login" style={{ color: "rgb(13,110,253)", textDecoration: "none" }}> Log In </Link></span></h3>
                    <div className='icons'>
                        <button style={{ marginRight: "10px" }}><img src={Google} alt="" style={{ width: "38px", borderRadius: "50%" }} />Sign in with  <span style={{ color: "red", }}><b>Google</b></span></button>
                        <button id='iconFace'><img src={Facebook} alt="" /></button>
                    </div>
                    <div className='OR'>
                        <div className='spaceDiv'></div>
                        <span className='OORR'>or</span>
                        <div className='spaceDiv'></div>
                    </div>
                    <div className='center'>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Username</label><br />
                            <input type="text" placeholder='Enter Username' onChange={(e) => setUser(e.target.value)} required /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "220px" }}>Email</label><br />
                            <input type="email" placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} required /><br />
                        </div>
                        <div className='Email'>
                            <label htmlFor="" style={{ marginRight: "200px" }}>Password</label><br />
                            <input type="password" placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} required /><br />
                        </div>
                        <button style={{ marginTop: "-8px" }} onClick={(e) => details(e)} >Register</button>
                    </div>
                </div>
            </div>
        </form>
    )
}
export default Login
