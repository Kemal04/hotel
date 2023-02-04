import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'

const AdminBooking = () => {

    const [booking, setBooking] = useState([])

    useEffect(() => {
        const fetchAllBooking = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/bookings/')
                setBooking(res.data.booking)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllBooking()
    }, [])

    const navigate = useNavigate()

    const handleDelete = async (id) => {

        await axios.delete('http://localhost:3001/api/bookings/delete/' + id, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                const del = booking.filter(booking => id !== booking.id)
                setBooking(del)
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
                                    Bron bölümi
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Otag belgisi</th>
                                                    <th scope="col">Telefon belgisi</th>
                                                    <th scope="col">Giriş we Çykyş wagtlary</th>
                                                    {/* <th scope="col">Bron guni</th> */}
                                                    <th scope="col">Tassyklamak</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    booking.slice().sort((a, b) => (a.id < b.id) ? 1 : -1).map((booking, index) => (
                                                        <tr key={index} className={booking.check ? "text-success" : "text-danger"}>
                                                            <td>{index}</td>
                                                            <td>№ {booking.room.roomNum} Otag</td>
                                                            <td>+993 {booking.phoneNumber}</td>
                                                            <td>
                                                                {new Date(booking.checkIn).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                                                                <span className='mx-2'>|</span>
                                                                {new Date(booking.checkOut).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                                                            </td>
                                                            {/* <td>
                                                                {new Date(booking.checkOut).toLocaleDateString(undefined, { day: "numeric" }) - new Date(booking.checkIn).toLocaleDateString(undefined, { day: "numeric" })}
                                                                &nbsp;&nbsp;günlük
                                                            </td> */}
                                                            <td>
                                                                <Link className='btn btn-outline-warning mx-1' to={`/admin/bronlanan-otaglary-uytget/${booking.id}`}><FontAwesomeIcon icon={faPencil} /></Link>
                                                                <button className='btn btn-outline-danger mx-1' onClick={() => handleDelete(booking.id)}><FontAwesomeIcon icon={faTrash} /></button>
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

export default AdminBooking