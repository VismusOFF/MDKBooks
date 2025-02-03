import { useState } from "react";
import { doSignInWithEmailAndPassword } from "../../../assets/auth";
import { useAuth } from "../../../context";
import { useNavigate, Navigate } from "react-router-dom";
import { auth, provider } from "../../../assets/fitebase";
import { signInWithPopup } from "firebase/auth"; 

const Login = () => {
    const { userLoggedIn } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                navigate('/home'); // Navigate to home on successful login
            } catch (error) {
                setErrorMessage("Неверный логин или пароль."); // Display error message
                setIsSigningIn(false);
            }
        }
    };

    const onGoogleSignIn = async (e) => {
        e.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await signInWithPopup(auth, provider);
                navigate('/home'); // Navigate to home on successful login
            } catch (error) {
                setErrorMessage(error.message); // Display error message
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div className="container">
            {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
            <form className="form" onSubmit={onSubmit}>
                <h2>Авторизация</h2>
                {errorMessage && (
                    <div id="error" className="error-box">
                        {errorMessage}
                    </div>
                )}
                <div className="inputGroup">
                    <input type="email" id="email" placeholder="Почта" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="inputGroup">
                    <input type="password" id="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <input type="submit" id="submit" value={'Войти'} />
                <button className="google-button" onClick={onGoogleSignIn}>Войти с Google</button>
            </form>
        </div>
    );
}

export default Login;
