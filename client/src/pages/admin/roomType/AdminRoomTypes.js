import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify'
import { Link, useNavigate } from 'react-router-dom';
import AdminNavbar from '../../../components/navbar/AdminNavbar';
import AdminSidebar from '../../../components/sidebar/AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const AdminRoomTypes = () => {

    const [roomtypes, setRoomTypes] = useState([])

    useEffect(() => {
        const fetchRoomTypes = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/roomtypes/')
                setRoomTypes(res.data.roomtypes)
            } catch (err) {
                console.log(err)
            }
        }
        fetchRoomTypes()
    }, [])

    const navigate = useNavigate()

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3001/api/roomtypes/delete/' + id, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                const del = roomtypes.filter(roomtypes => id !== roomtypes.id)
                setRoomTypes(del)
                toast.success(res.success)
            }).catch((res) => {
                toast.error(res.response.data.error)
                navigate(`/${res.response.status}`)
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
                                    Otag görnüşleri bölümi
                                    <Link to="/admin/otag-gornusini-gosmak"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Ady</th>
                                                    <th scope="col">Düzetmek</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    roomtypes.map(roomtype => (
                                                        <tr key={roomtype.id}>
                                                            <td>{roomtype.id}</td>
                                                            <td>{roomtype.name}</td>
                                                            <td>
                                                                <Link className='me-3 btn btn-sm btn-outline-warning mx-1' to={`/admin/otag-gornusini-uytget/${roomtype.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                                                <button className='btn btn-sm btn-outline-danger mx-1' onClick={() => handleDelete(roomtype.id)}><FontAwesomeIcon icon={faTrash} /></button>
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