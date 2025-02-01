import { useState } from "react"
import { useNavigate, Navigate } from "react-router-dom"
import { doCreateUserWithEmailAndPassword } from "../../../assets/auth"
import { useAuth } from "../../../context"
import './register.css'


const Register = () => {
    
    const navigate = useNavigate()
    const { userLoggedIn } = useAuth(); // userLoggedIn из контекста

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
    const [fio, setFio] = useState()
    const [phone, setPhone] = useState()
    
    
    const [isRegistering, setIsRegistering] = useState(false)
    const [errorMessage, setErrorMessage] = useState()


    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isRegistering) {
            setIsRegistering(true)
            await doCreateUserWithEmailAndPassword(email, password)
        }
    }

    return (
        <div className="container">
            {userLoggedIn && <Navigate to={'/home'} replace={true} />}
            <form className="form" onSubmit={onSubmit}>
                <h2>Регистрация</h2>
                {errorMessage && <div className="error-message">{errorMessage}</div>}
                <div className="inputGroup" >
                    <svg className="mrg1" width="20.000000" height="16.000000" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M18 0L2 0C0.89 0 0 0.89 0 2L0 14C0 15.1 0.89 16 2 16L18 16C19.1 16 20 15.1 20 14L20 2C20 0.89 19.1 0 18 0ZM18 2L18 2.51L10 8.73L2 2.51L2 2L18 2ZM2 14L2 5.04L9.38 10.78C9.79 11.11 10.2 11.11 10.61 10.78L18 5.04L18 14L2 14Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>

                        <input type="email" placeholder="Почта" onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="inputGroup" >
                    <svg className="mrg1" width="16.000000" height="20.000000" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M16 10C16 8.89 15.1 8 14 8L13 8L13 5C13 2.24 10.75 0 8 0C5.24 0 3 2.24 3 5L3 8L2 8C0.89 8 0 8.89 0 10L0 18C0 19.1 0.89 20 2 20L14 20C15.1 20 16 19.1 16 18L16 10ZM5 5C5 3.34 6.34 2 8 2C9.65 2 11 3.34 11 5L11 8L5 8L5 5Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>
                    <input type="password" placeholder="Пароль" onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="inputGroup" >
                    <svg className="mrg1" width="16.000000" height="20.000000" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M16 10C16 8.89 15.1 8 14 8L13 8L13 5C13 2.24 10.75 0 8 0C5.24 0 3 2.24 3 5L3 8L2 8C0.89 8 0 8.89 0 10L0 18C0 19.1 0.89 20 2 20L14 20C15.1 20 16 19.1 16 18L16 10ZM5 5C5 3.34 6.34 2 8 2C9.65 2 11 3.34 11 5L11 8L5 8L5 5Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>
                    <input type="password" placeholder="Подтверждение пароля" onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>

                <div className="inputGroup" >
                    <svg className="mrg1" width="18.000000" height="19.000000" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M9 0C8.33 0 7.69 0.12 7.08 0.38C6.47 0.63 5.93 0.99 5.46 1.46C4.99 1.93 4.63 2.47 4.38 3.08C4.12 3.69 4 4.33 4 5C4 5.66 4.12 6.3 4.38 6.91C4.63 7.52 4.99 8.06 5.46 8.53C5.93 9 6.47 9.36 7.08 9.61C7.69 9.87 8.33 10 9 10C9.66 10 10.3 9.87 10.91 9.61C11.52 9.36 12.06 9 12.53 8.53C13 8.06 13.36 7.52 13.61 6.91C13.87 6.3 14 5.66 14 5C14 4.33 13.87 3.69 13.61 3.08C13.36 2.47 13 1.93 12.53 1.46C12.06 0.99 11.52 0.63 10.91 0.38C10.3 0.12 9.66 0 9 0ZM9 8C8.17 8 7.46 7.7 6.87 7.12C6.29 6.53 6 5.82 6 5C6 4.17 6.29 3.46 6.87 2.87C7.46 2.29 8.17 2 9 2C9.82 2 10.53 2.29 11.12 2.87C11.7 3.46 12 4.17 12 5C12 5.82 11.7 6.53 11.12 7.12C10.53 7.7 9.82 8 9 8ZM18 19L18 18C18 17.07 17.82 16.17 17.46 15.32C17.11 14.46 16.6 13.7 15.94 13.05C15.29 12.39 14.53 11.88 13.67 11.53C12.82 11.17 11.92 11 11 11L7 11C6.07 11 5.17 11.17 4.32 11.53C3.46 11.88 2.7 12.39 2.05 13.05C1.39 13.7 0.88 14.46 0.53 15.32C0.17 16.17 0 17.07 0 18L0 19L2 19L2 18C2 17.33 2.12 16.69 2.38 16.08C2.63 15.47 2.99 14.93 3.46 14.46C3.93 13.99 4.47 13.63 5.08 13.38C5.69 13.12 6.33 13 7 13L11 13C11.66 13 12.3 13.12 12.91 13.38C13.52 13.63 14.06 13.99 14.53 14.46C15 14.93 15.36 15.47 15.61 16.08C15.87 16.69 16 17.33 16 18L16 19L18 19Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>

                    <input type="text" placeholder="ФИО" onChange={(e) => setFio(e.target.value)} required />
                </div>

                <div className="inputGroup" >
                    <svg className="mrg1" width="17.870205" height="17.869785" viewBox="0 0 17.8702 17.8698" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <desc>
                                Created with Pixso.
                        </desc>
                        <defs/>
                        <path id="path" d="M17.48 14L13.42 10.31C12.94 9.87 12.48 9.89 12.03 10.35L9.63 12.81C9.06 12.7 7.9 12.34 6.71 11.15C5.52 9.96 5.15 8.8 5.05 8.23L7.51 5.83C7.97 5.38 7.98 4.92 7.55 4.44L3.85 0.38C3.42 -0.1 2.96 -0.13 2.46 0.29L0.29 2.15C0.11 2.33 0.02 2.55 0 2.8C-0.01 3.05 -0.3 8.97 4.29 13.57C8.3 17.57 13.32 17.86 14.7 17.86C14.9 17.86 15.03 17.86 15.06 17.86C15.31 17.84 15.53 17.75 15.71 17.57L17.57 15.39C17.99 14.9 17.96 14.44 17.48 14Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero"/>
                    </svg>

                    <input type="number" placeholder="Номер" onChange={(e) => setPhone(e.target.value)} required />
                </div>

                <input type="submit" value={isRegistering ? "Регистрация..." : "Зарегистрироваться"} />
                
            </form>
        </div>
    )
}

export default Register