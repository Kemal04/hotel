import React from 'react'
import { NavLink } from 'react-router-dom'

const AdminSidebar = () => {
    return (<>
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
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <NavLink to="/admin/ulanyjylar" className="nav-link">
                                <p> Ulanyjylar </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/kategoriyalar" className="nav-link">
                                <p> Kategoriýalar </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/kici-kategoriyalar" className="nav-link">
                                <p> Kiçi Kategoriýalar </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/bloglar" className="nav-link">
                                <p> Bloglar </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/reklamalar" className="nav-link">
                                <p> Reklamalar </p>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/admin/teswirler" className="nav-link">
                                <p> Teswirler </p>
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