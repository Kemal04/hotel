import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
import { ThemeContext } from '../../context/ThemeContext';

const Navbar = () => {

    const { darkMode } = useContext(ThemeContext)

    return (
        <>
            <div className='py-2 text-white' style={darkMode ? { backgroundColor: "#212529" } : { backgroundColor: "#0e2737" }}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-6'>
                            <div className='row align-items-center'>
                                <div className='col-xl-4'>
                                    (123) 456-789-1230
                                </div>
                                <div className='col-xl-3'>
                                    info.colorlib@gmail.com
                                </div>
                            </div>
                        </div>
                        <div className='col-xl-6 text-end'>
                            <span className='px-2'>A</span>
                            <span className='px-2'>A</span>
                            <span className='px-2'>A</span>
                            <span className='px-2'>A</span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className={darkMode ? "navbar navbar-dark navbar-expand-lg bg-dark py-0" : "navbar navbar-expand-lg bg-light py-0"}>
                <div className="container">
                    <Link to="/" className="navbar-brand">Logo</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/" className="nav-link active fw-bold">Baş sahypa</Link>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/otaglar" className="nav-link fw-bold">Otaglar</Link>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/biz-barada" className="nav-link fw-bold">Biz barada</Link>
                            </li>
                            <li className="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/habarlasmak" className="nav-link fw-bold">Habarlaşmak</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <Link to="/giris-etmek" className="btn btn-primary py-4 fw-bold" style={{ letterSpacing: "1px" }} type="submit">Giriş etmek</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar