import React from 'react';
import google_logo from '../../../assets/Logo/main-google.png'
import apple_logo from '../../../assets/Logo/main-apple.png'
import {auth, provider} from '../../../Firebase/Config.jsx'
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import './MediaQuries.css'


export default function LoginComponent(){
    const navigate = useNavigate();
        const handleClick = async () => {
            try{
                localStorage.clear();
                const result = await signInWithPopup(auth, provider);
                const User = JSON.stringify(result.user.displayName);
                const Email = JSON.stringify(result.user.email);
                const Photo = JSON.stringify(result.user.photoURL);
                const finalUser = User.slice(1, -1);
                const finalEmail = Email.slice(1, -1);
                const finalPhoto =  Photo.slice(1, -1);
                localStorage.setItem('PHOTO', finalPhoto);
                localStorage.setItem('EMAIL', finalEmail);
                localStorage.setItem('USER', finalUser);
                navigate("/home");
            }
            catch(error){
                console.log("There is an error");
            }
        }
    const handleClick_apple = () => {
        window.alert("We dont have this feature right now")
    }

  return (
    <>
        <div className="login-container">
            <div className="title">
                Happening now
            </div>
            <div className="title2">
                Join today
            </div>
            <div className="login-buttons">
                <div className="google-button">
                    <button onClick={handleClick}>
                        <img src={google_logo} width="18px" />
                        &nbsp;
                        Sign up with Google
                    </button>
                </div>
                <div className="apple-button">
                    <button onClick={handleClick_apple}>
                        <img src={apple_logo} width="18px" />
                        &nbsp;
                        Sign up with Apple
                    </button>
                </div>
            </div>
            <div className="lines-seperation">
                <div className="line1">
                    <hr />
                </div> 
                <div className="span">
                    or
                </div>
                <div className="line2">
                    <hr />
                </div>
             </div>
             <div className="create-account-button">
                <button onClick={handleClick_apple}>
                    Create account
                </button>
             </div>
             <div className="policies">
                By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>.
             </div>
             <div className="sign-in-login">
                <div className="title">
                    Already have an account?
                </div>
                <div className="sign-in-button">
                    <button onClick={handleClick_apple}>
                        Sign in
                    </button>
                </div>
             </div>
        </div>    
    </>
 )
}
