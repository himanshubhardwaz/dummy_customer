import React from 'react'
import { FaLinkedin, FaGoogle } from 'react-icons/fa'
import "./SignupScreen1.css";
import Header from "../../components/Header/Header"

const SignupScreen = () => {
    return (
        <>
            <Header />
            <div className="buttons">
                <button className="signup-button" >
                    <FaLinkedin className="signup-icon-linkdin" size={28} /> SignUp with LinkedIn
                </button>
                <button className="signup-button" >
                    <FaGoogle className="signup-icon-google" size={28} /> SignUp with Google
                </button>
            </div>
        </>
    )
}

export default SignupScreen
