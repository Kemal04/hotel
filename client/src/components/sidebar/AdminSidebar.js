import React from 'react'
import { NavLink } from 'react-router-dom'
import { faBed, faBook, faCommentAlt, faSort, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const AdminSidebar = () => {
    return (
        <>
            <aside className="main-sidebar sidebar-dark-primary elevation-4">
                <div className="sidebar">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="/img/icons/user-1.jpg" className="img-circle elevation-2" alt='user' />
                        </div>
                        <div className="info">
                            <NavLink to="" className="d-block text-uppercase text-decoration-none">Administrasiya</NavLink>
                        </div>
                    </div>

                    <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                        <div className="image">
                            <i className="fas fa-home text-white"></i>
                        </div>
                        <div className="info">
                            <NavLink to="/admin" className="d-block text-uppercase text-decoration-none">Esasy Sahypa</NavLink>
                        </div>
                    </div>

                    <nav className="mt-2">
                        <ul className="nav nav-pills nav-sidebar flex-column nav-treeview" data-widget="treeview" role="menu" data-accordion="false">
                            <li className="nav-item">
                                <NavLink to="/admin/ulanyjylar" className="nav-link">
                                    <FontAwesomeIcon icon={faUser} className="nav-icon me-2" />
                                    <p>Ulanyjylar</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/teswirler" className="nav-link">
                                    <FontAwesomeIcon icon={faCommentAlt} className="nav-icon me-2" />
                                    <p>Teswirler</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/otag-gornusleri" className="nav-link">
                                    <FontAwesomeIcon icon={faBed} className="nav-icon me-2" />
                                    <p>Otag görnüşleri</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/otaglar" className="nav-link">
                                    <FontAwesomeIcon icon={faBed} className="nav-icon me-2" />
                                    <p>Otaglar</p>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/admin/bronlanan-otaglar" className="nav-link">
                                    <FontAwesomeIcon icon={faBook} className="nav-icon me-2" />
                                    <p>Bronlanan otaglar</p>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
        </>
    )
}

export default AdminSidebar