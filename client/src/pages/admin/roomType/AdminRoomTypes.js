import axios from 'axios';
import React from 'react'
import { useAPI } from '../../../context/FetchContext';
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
import AdminNavbar from '../../../components/navbar/AdminNavbar';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const AdminRoomTypes = () => {

    const { roomtypes } = useAPI()

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3001/api/roomtypes/delete/' + id)
            .then((res) => {
                window.location.reload()
                toast.success(res.success)
            }).catch((error) => {
                toast.error(error.message)
            });
    }

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
                                    Otag Gornusleri bölümi
                                    <Link to="/admin/otag-gornusini-gosmak"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Ady</th>
                                                    <th scope="col">Duzeltmek</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    roomtypes.map(roomtype => (
                                                        <tr key={roomtype.id}>
                                                            <td>{roomtype.id}</td>
                                                            <td>{roomtype.name}</td>
                                                            <td>
                                                                <Link className='me-3 btn btn-sm btn-warning' to={`/admin/otag-gornusini-uytget/${roomtype.id}`}>Duzeltmek</Link>
                                                                <button className='btn btn-sm btn-danger' onClick={() => handleDelete(roomtype.id)}>Pozmak</button>
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

export default AdminRoomTypes