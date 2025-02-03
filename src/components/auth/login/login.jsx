import { useState } from "react";
import { doSignInWithEmailAndPassword, doSignWithGoogle } from "../../../assets/auth";
import { useAuth } from "../../../context";
import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../../../assets/fitebase";
import { signInWithPopup } from "firebase/auth"; 


const Login = () => {
    const {userLoggedIn} = useAuth()
    const navigate = useNavigate()


    const [email, setEmail] = useState()
    const [password, setPassword] = useState()


    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            await doSignInWithEmailAndPassword(email, password)
        }
    }

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await signInWithPopup(auth, provider);
            } catch (error) {
                setErrorMessage(error.message);
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="container">
            {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
            <form className="form" onSubmit={onSubmit}>
                <h2>Авторизация</h2>
                <div className="inputGroup" >
                    <svg className="mrg1" width="20.000000" height="16.000000" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M18 0L2 0C0.89 0 0 0.89 0 2L0 14C0 15.1 0.89 16 2 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.89 19.1 0 18 0ZM18 2L18 2.51L10 8.73L2 2.51L2 2L18 2ZM2 14L2 5.04L9.38 10.78C9.79 11.11 10.2 11.11 10.61 10.78L18 5.04L18 14L2 14Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>

                    <input type="email" id="email" placeholder="Почта" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup" >
                    <svg className="mrg1" width="16.000000" height="20.000000" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M16 10C16 8.89 15.1 8 14 8L13 8L13 5C13 2.24 10.75 0 8 0C5.24 0 3 2.24 3 5L3 8L2 8C0.89 8 0 8.89 0 10L0 18C0 19.1 0.89 20 2 20L14 20C15.1 20 16 19.1 16 18L16 10ZM5 5C5 3.34 6.34 2 8 2C9.65 2 11 3.34 11 5L11 8L5 8L5 5Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>

                    <input type="password" id="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" id="submit" value={'Войти'} />
                <button className="google-button" onClick={onGoogleSignIn}>Войти с Google</button>
            </form>
        </div>
    )
}

export default Login