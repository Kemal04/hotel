import React from 'react'
import { Link } from 'react-router-dom'
import { faBars, faBell, faComments, faSearch, faThLarge } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminNavbar = () => {
    return (
        <>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item">
                        <button className="px-3 text-dark btn" data-widget="pushmenu"><FontAwesomeIcon icon={faBars} /></button>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/" className="nav-link">Baş Sahypa</Link>
                    </li>
                    <li className="nav-item d-none d-sm-inline-block">
                        <Link to="/biz-barada" className="nav-link">Biz barada</Link>
                    </li>
                </ul>

                <form className='d-inline ms-3'>
                    <div className='input-group'>
                        <input className='form-control' type='search' placeholder='Search' aria-label='Search' />
                        <div className="input-group-append">
                            <button className='btn btn-navbar' type='submit'>
                                <FontAwesomeIcon icon={faSearch} />
                                <span className='d-none'>Search</span>
                            </button>
                        </div>
                    </div>
                </form>

                <ul className="navbar-nav align-items-center ms-auto me-3">
                    <li className="nav-item">
                        <button type="button" class="btn position-relative pb-0">
                            <FontAwesomeIcon icon={faComments} className="h5" />
                            <span class="position-absolute top-25 start-75 translate-middle p-2 bg-danger border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn position-relative pb-0">
                            <FontAwesomeIcon icon={faBell} className="h5" />
                            <span class="position-absolute top-25 start-75 translate-middle p-2 bg-warning border border-light rounded-circle">
                                <span class="visually-hidden">New alerts</span>
                            </span>
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" class="btn pb-0">
                            <FontAwesomeIcon icon={faThLarge} className="h5" />
                        </button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default AdminNavbar