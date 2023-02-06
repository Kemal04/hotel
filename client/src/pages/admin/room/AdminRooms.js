import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faPencil, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { deleteRoom, getAllRooms } from '../../../redux/slices/rooms'

const AdminRooms = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { rooms } = useSelector(state => state.rooms)
    useEffect(() => {
        dispatch(getAllRooms())
    }, [dispatch])

    const handleDelete = async (id) => {
        dispatch(deleteRoom(id))
        navigate("/admin/otaglar")
    }

    return (
        <>
            <div className='container py-5'>
                <div className='d-flex justify-content-between aling-items-center h2 mb-5'>
                    Otaglar bölümi
                    <Link to="/admin/otag-gosmak"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                </div>
                <div className='row'>
                    <div className='col-xl-12'>
                        <table className="table">
                            <thead className='table-dark'>
                                <tr>
                                    <th scope="col">№</th>
                                    <th scope="col">Görnüşi</th>
                                    <th scope="col">Belgisi</th>
                                    <th scope="col">Meýdany</th>
                                    <th scope="col">Adam sany</th>
                                    <th scope="col">Bahasy</th>
                                    <th scope="col">Düzetmek</th>
                                </tr>
                            </thead>
                            <tbody >
                                {
                                    rooms.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((room, index) => (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            {/* <td><img src={`http://localhost:3001/img/${room.img}`} alt={room.roomType.name} style={{width:"100px"}}/></td> */}
                                            <td>{room.roomType.name}</td>
                                            <td>№ {room.roomNum}</td>
                                            <td>{room.size} m<sup>2</sup></td>
                                            <td>{room.capacity} adam</td>
                                            <td>{room.price}<span className='small'> TMT</span></td>
                                            <td>
                                                <Link className='me-3 btn btn-sm btn-outline-warning mx-1' to={`/admin/otag-uytget/${room.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                                <button className='btn btn-sm btn-outline-danger mx-1' onClick={() => handleDelete(room.id)}><FontAwesomeIcon icon={faTrash} /></button>
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

export default AdminRooms