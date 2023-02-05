import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { faArrowRight, faHeart, faPencil, faPlus, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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
                    {rooms.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((room, index) => (
                        <div key={index} className='col-lg-4'>
                            <div className="card mb-5 border-0 shadow rounded-0 me-3">
                                <img src={room.img ? `http://localhost:3001/img/${room.img}` : '/img/cards/room/1.jpg'} className="img-fluid" alt={room.roomNum} />
                                <div className="card-body">
                                    <div className='d-flex justify-content-between'>
                                        <h5 className="card-title">№ {room.roomNum} otag</h5>
                                        <div>
                                            <Link className='btn btn-outline-warning mx-1' to={`/admin/otag-uytget/${room.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                            <button className='btn btn-outline-danger mx-1' onClick={() => handleDelete(room.id)}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </div>
                                    </div>
                                    <p className="card-text text-green mb-4">
                                        <span className='h4'>{room.price}<sup>TMT</sup></span>
                                        <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                                    </p>
                                    <div className='row justify-content-between align-items-center mb-3'>
                                        <div className='col-lg-6'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}> Meýdany:</div>
                                            <div>{room.size} m<sup>2</sup></div>
                                        </div>
                                        <div className='col-lg-6 text-end'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}> Adam sany:</div>
                                            <div>{room.capacity} adam</div>
                                        </div>
                                    </div>
                                    <div className='row justify-content-between align-items-center mb-5'>
                                        <div className='col-lg-6'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}> Otag görnüşi:</div>
                                            <div>"{room.roomType.name}"</div>
                                        </div>
                                        <div className='col-lg-6 text-end'>
                                            <div style={{ fontWeight: "500", color: "#afb4bf" }}> Halandy:</div>
                                            <div><FontAwesomeIcon icon={faHeart} /> {room.liked}</div>
                                        </div>
                                    </div>
                                    <div className='d-grid'>
                                        <Link className='btn btn-sm btn-green' to={`/admin/otag/${room.id}`}> Maglumatlaryny gör <FontAwesomeIcon icon={faArrowRight} /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default AdminRooms