import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AdminUsers = () => {
    return (
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <AdminNavbar />
                    <AdminSidebar />
                    <div className="content-wrapper" style={{ paddingTop: "70px" }}>
                        <div className='content'>
                            <div className='container py-5'>
                                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                                    Ulanyjylar bölümi
                                    <Link to="/"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Ulanyjy Ady</th>
                                                    <th scope="col">E-mail adresi</th>
                                                    <th scope="col">Açar sözi</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    // users.map(user => (
                                                    //     <tr key={user.id}>
                                                    //         <td>{user.id}</td>
                                                    //         <td>{user.name}</td>
                                                    //         <td>{user.email}</td>
                                                    //         <td>************</td>
                                                    //     </tr>
                                                    // ))
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminUsers