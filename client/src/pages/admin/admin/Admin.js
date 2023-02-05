import React, { useEffect } from 'react'
import { faArrowRight, faBed, faEnvelope, faHotel, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getAllContacts } from '../../../redux/slices/contact'
import { getAllUsers } from '../../../redux/slices/users'
import { getAllRoomTypes } from '../../../redux/slices/roomTypes'
import { getAllRooms } from '../../../redux/slices/rooms'

const Admin = () => {

    const dispatch = useDispatch();

    const { roomTypes } = useSelector(state => state.roomTypes)
    useEffect(() => {
        dispatch(getAllRoomTypes())
    }, [dispatch])

    const { rooms } = useSelector(state => state.rooms)
    useEffect(() => {
        dispatch(getAllRooms())
    }, [dispatch])

    const { users } = useSelector(state => state.users)
    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    const { contacts } = useSelector(state => state.contacts)
    useEffect(() => {
        dispatch(getAllContacts())
    }, [dispatch])

    return (
        <>
            <div className='container py-5'>
                <div className='row mb-5'>
                    <div className='col-lg-3'>
                        <div className="row bg-warning p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{users.length}</h3>
                                <p>Ulanyjylar</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faUserAlt} />
                            </div>
                            <Link to="/admin/ulanyjylar" className="border-light border-top pt-2 nav-link text-dark pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-danger text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{contacts.length}</h3>
                                <p>Teswirler</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <Link to="/admin/teswirler" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-success text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{roomTypes.length}</h3>
                                <p>Otag Gornusleri</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faHotel} />
                            </div>
                            <Link to="/admin/otag-gornusleri" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                    <div className='col-lg-3'>
                        <div className="row bg-primary text-white p-3 align-items-center mx-3 rounded-3 shadow">
                            <div className="col-lg-8">
                                <h3 className='mb-3'>{rooms.length}</h3>
                                <p>Otaglar</p>
                            </div>
                            <div className="col-lg-4 h1">
                                <FontAwesomeIcon icon={faBed} />
                            </div>
                            <Link to="/admin/otaglar" className="border-light border-top pt-2 nav-link text-white pb-0">Maglumatlar <FontAwesomeIcon icon={faArrowRight} /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin