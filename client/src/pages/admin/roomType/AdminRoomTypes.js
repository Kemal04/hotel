import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';
import { deleteRoomType, getAllRoomTypes } from '../../../redux/slices/roomTypes'

const AdminRoomTypes = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { roomTypes } = useSelector(state => state.roomTypes)

    useEffect(() => {
        dispatch(getAllRoomTypes())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteRoomType(id))
        navigate("/admin/otag-gornusleri")
    }
    return (
        <>
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
                                    roomTypes.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((roomtype, index) => (
                                        <tr key={index}>
                                            <td>{index}</td>
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
        </>
    )
}

export default AdminRoomTypes