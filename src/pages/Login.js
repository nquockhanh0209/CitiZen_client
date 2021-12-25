import React from 'react';
import "./login.css";
import {Link} from "react-router-dom"


function Login() {
    return (
        <div className='login'>
            <div>
                <h1>CITYZENV</h1>
                <input type={'text'} placeholder='User ID'></input>
                <br />
                <input type={'password'} placeholder='Password'></input>
                <br />
                <button type='submit'>SIGN IN</button>
            </div>
        
        </div>
    );
};

export default Login;
