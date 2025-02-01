import { Link, useNavigate } from "react-router-dom";
import { doSignOut } from "../../assets/auth";
import { useAuth } from "../../context";
import './header.css';

const Header = () => {
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    return (
        <nav className="header-nav">
            <div className="nav-links">
            <div className="dev">Разработал <a href="https://vismusoff.netlify.app/">VismusOFF</a></div>
                {
                    userLoggedIn
                    ?
                    <>
                        <div className="leftLinks">
                            <Link to={'/table'}>Таблица</Link>
                            <Link to={'/home'}>Домой</Link>
                        </div>
                            <button className="btnLeave" onClick={() => { doSignOut().then(() => { navigate('/login') }) }}>Выйти</button>
                    </>
                    :
                    <>
                        <Link to={'/login'}> Авторизация </Link>
                        <Link to={'/register'}> Регистрация </Link>
                    </>
                }
            </div>
        </nav>
    );
}

export default Header;
