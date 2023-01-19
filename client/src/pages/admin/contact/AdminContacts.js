import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import Sidebar from '../../../components/sidebar/AdminSidebar'
import { useAPI } from '../../../context/FetchContext'

const AdminContact = () => {

    const { contacts } = useAPI()

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3001/api/contact/delete/' + id)
            .then((res) => {
                toast.success(res.data.success)
                window.location.reload()
            }).catch((error) => {
                toast.error(error.message)
            });

    }

    return (
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <AdminNavbar />
                    <Sidebar />
                    <div className="content-wrapper" style={{ paddingTop: "70px" }}>
                        <div className='content'>
                            <div className='container py-5'>
                                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                                    Teswirler bölümi
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Ady</th>
                                                    <th scope="col">Düzetmek</th>
                                                    <th scope="col">Temasy</th>
                                                    <th scope="col">Mazmuny</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    contacts.map(contact => (
                                                        <tr key={contact.id}>
                                                            <td>{contact.id}</td>
                                                            <td>{contact.name}</td>
                                                            <td>{contact.subject}</td>
                                                            <td>{contact.comment.substring(0, 40)}...</td>
                                                            <td>
                                                                <Link className='me-3 btn btn-sm btn-warning' to={`/admin/teswir-uytget/${contact.id}`}>Duzeltmek</Link>
                                                                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(contact.id)}>Pozmak</button>
                                                            </td>
                                                        </tr>
                                                    ))
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

export default AdminContact