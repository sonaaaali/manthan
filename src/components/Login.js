import React, { useState } from 'react';
import firebase from 'firebase';
// import {auth, provider,db, storage} from '../firebase';
import './Login.css'
import TextField from '@mui/material/TextField';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';
import {useHistory} from 'react-router-dom';

function Login() {
    const history = useHistory();
    const [phoneNumber, setPhoneNumber] = useState('');
    const [loading, setLoading] = useState(false);
    console.log(phoneNumber);
    const handleClick = () => {
        setLoading(true);
        Window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
        // let number = '+918189884612';
        firebase.auth().signInWithPhoneNumber(phoneNumber, Window.recaptchaVerifier).then(function(e){
            let code = prompt('Enter your otp','');
            if(code == null) return;
            e.confirm(code).then(function(result){
                history.push('/form');
                console.log(result.user,'user verified');
            }).catch(err => console.log(err), window.location.reload);
        })
    }

    return (
        <div className="login">
            <span className="title">MANTHAN</span>
            <p className="desc">THANK YOU FOR NOT BEING A SILENT SPECTATOR</p>
            <div className="form">
                <div className="elements">
                <span className="desc2">Enter the Details</span>
                    <br/>
                    <TextField id="input" label="Phone No" variant="outlined" defaultValue="+91" onChange={(e) => setPhoneNumber(e.target.value)} />
                    <br/>
                    <div id="recaptcha-container"/>
                    <LoadingButton
                        onClick={handleClick}
                        endIcon={<SendIcon />}
                        loading={loading}
                        loadingPosition="end"
                        variant="contained"
                        >
                        Send OTP
                    </LoadingButton>
                </div>
            </div>
        </div>
    )
}

export default Login
