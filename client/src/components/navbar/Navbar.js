import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <div className='text-white py-2' style={{ backgroundColor: "#0e2737" }}>
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
            <nav class="navbar navbar-expand-lg bg-light py-0">
                <div class="container">
                    <Link to="/" class="navbar-brand">Logo</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/" class="nav-link active fw-bold">Baş sahypa</Link>
                            </li>
                            <li class="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/otaglar" class="nav-link fw-bold">Otaglar</Link>
                            </li>
                            <li class="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/biz-barada" class="nav-link fw-bold">Biz barada</Link>
                            </li>
                            <li class="nav-item mx-2" style={{ fontSize: "17px" }}>
                                <Link to="/habarlasmak" class="nav-link fw-bold">Habarlaşmak</Link>
                            </li>
                        </ul>
                        <form class="d-flex" role="search">
                            <Link to="/giris-etmek" class="btn btn-primary py-4 fw-bold" style={{ letterSpacing: "1px" }} type="submit">Giriş etmek</Link>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar