import { faPencil, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import { useAPI } from '../../../context/FetchContext'

const AdminBooking = () => {

    const { booking } = useAPI()

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
                                    <Link to="/"><FontAwesomeIcon className='text-dark' icon={faPlus} /></Link>
                                </div>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <table className="table">
                                            <thead className='table-dark'>
                                                <tr>
                                                    <th scope="col">№</th>
                                                    <th scope="col">Otag Belgisi</th>
                                                    <th scope="col">Telefon belgisi</th>
                                                    <th scope="col">Giriş we Çykyş wagtlary</th>
                                                    <th scope="col">Bron guni</th>
                                                    <th scope="col">Tassyklamak</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {
                                                    booking.map(booking => (
                                                        <tr key={booking.id} className={booking.check ? "text-success" : "text-danger"}>
                                                            <td>{booking.id}</td>
                                                            <td>№ {booking.room.name} Otag</td>
                                                            <td>+993 {booking.phoneNumber}</td>
                                                            <td>
                                                                {new Date(booking.checkIn).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                                                                <span className='mx-2'>|</span>
                                                                {new Date(booking.checkOut).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric" })}
                                                            </td>
                                                            <td>
                                                                {new Date(booking.checkOut).toLocaleDateString(undefined, { day: "numeric" }) - new Date(booking.checkIn).toLocaleDateString(undefined, { day: "numeric" })}
                                                                &nbsp;&nbsp;günlük
                                                            </td>
                                                            <td><Link className='btn btn-outline-warning mx-1' to={`/admin/bronlanan-otaglary-uytget/${booking.id}`}><FontAwesomeIcon icon={faPencil} /></Link></td>
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