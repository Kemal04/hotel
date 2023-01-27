import React, { useEffect, useState } from 'react'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import "./admin.css"
import { faArrowRight, faBed, faEnvelope, faHotel, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Admin = () => {

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

    const [rooms, setRooms] = useState([])

    useEffect(() => {
        const fetchAllRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/rooms/')
                setRooms(res.data.rooms)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllRooms()
    }, [])

    const [users, setUsers] = useState([])

    useEffect(() => {
        const fetchAllUsers = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/users/')
                setUsers(res.data.users)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllUsers()
    }, [])
    
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const fetchAllContacts = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/contact/')
                setContacts(res.data.contact);
            } catch (err) {
                console.log(err)
            }
        };
        fetchAllContacts()

    }, []);

    return (
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <AdminNavbar />
                    <AdminSidebar />
                    <div className="content-wrapper" style={{ paddingTop: "70px" }}>
                        <div className='content'>
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
                                                <h3 className='mb-3'>{roomtypes.length}</h3>
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin