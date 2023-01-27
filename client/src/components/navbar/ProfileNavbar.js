import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { ThemeContext } from '../../context/ThemeContext'

const ProfileNavbar = () => {

    const { authState, setAuthState } = useContext(AuthContext)
    const { darkMode, toggleDarkMode } = useContext(ThemeContext)

    const darkModeClick = () => {
        toggleDarkMode();
    }

    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("accessToken");
        setAuthState({ email: "", id: 0, status: false, role: "User" })
        navigate("/")
    };

    return (
        <>
            <nav className={darkMode ? "navbar navbar-dark navbar-expand-lg bg-dark py-0" : "navbar navbar-expand-lg bg-light py-0"}>
                <div className="container">
                    <Link to="/" className="navbar-brand">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <NavLink style={({ isActive }) => ({ color: isActive ? "active" : null })} to={`/ulanyjy-profili/${authState.id}`} className="nav-link fw-bold">Profile</NavLink>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <NavLink to={`/ulanyjy-profili/bronlarym/${authState.id}`} className="nav-link fw-bold">Bronlarym</NavLink>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <NavLink to={`/ulanyjy-profili/onki-bronlarym/${authState.id}`} className="nav-link fw-bold">Onki Bronlarym</NavLink>
                            </li>
                            <li className='nav-item mx-3'>
                                <div onClick={logout} className="nav-link fw-bold" style={{ cursor: "pointer" }}>Çykyş etmek</div>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <button onClick={darkModeClick} className={darkMode ? "nav-link border-0 bg-dark" : "nav-link border-0 bg-light"}>
                                    {
                                        darkMode ?
                                            <img src="/img/icons/sun.png" alt="Sun" style={{ width: "20px", }} />
                                            :
                                            <img src="/img/icons/moon.png" alt="Moon" style={{ width: "20px" }} />
                                    }
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default ProfileNavbar