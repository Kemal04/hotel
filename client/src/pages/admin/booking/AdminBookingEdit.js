import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AdminBookingEdit = () => {

    const [booking, setBooking] = useState({
        checkIn: "",
        checkOut: "",
        phoneNumber: "",
        check: "",
        roomId: "",
        userId: "",
    })

    const navigate = useNavigate()
    const location = useLocation();

    const bookingId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setBooking((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/bookings/edit/${bookingId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setBooking(res.data.booking)
        }).catch((res) => {
            toast.error(res.response.data.error)
            navigate(`/${res.response.status}`)
        })
    }, [navigate, bookingId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!booking.check) {
            toast.error("sayla")
        }
        else {
            await axios.post(`http://localhost:3001/api/bookings/edit/${bookingId}`, booking, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/bronlanan-otaglar")
                }).catch((res) => {
                    toast.error(res.response.data.error)
                    navigate(`/${res.response.status}`)
                })
        }
    }

    return (
        <>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-lg-6'>
                        <div className='my-5 py-5'>
                            <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                                Otag üýgetmek
                            </div>
                            <form className='row'>

                                <div className="col-lg-6 mb-3" hidden>
                                    <label className="form-label fw-bold">Otagyň Wagty</label>
                                    <input name='checkIn' value={booking.checkIn} onChange={handleChange} type="text" className="form-control rounded-0 text-muted" autoComplete="off" disabled />
                                </div>

                                <div className="col-lg-6 mb-3" hidden>
                                    <label className="form-label fw-bold">Otagyň Wagty</label>
                                    <input name='checkIn' value={booking.checkOut} onChange={handleChange} type="text" className="form-control rounded-0 text-muted" autoComplete="off" disabled />
                                </div>

                                <div className="col-lg-6 mb-3" hidden>
                                    <label className="form-label fw-bold">Ulanyjyn Telefon belgisi</label>
                                    <input name='checkIn' value={booking.phoneNumber} onChange={handleChange} type="number" className="form-control rounded-0 text-muted" autoComplete="off" disabled />
                                </div>

                                <div className="col-lg-6 mb-3" hidden>
                                    <label className="form-label fw-bold">Otag belgisi</label>
                                    <input name='checkIn' value={booking.roomId} onChange={handleChange} type="number" className="form-control rounded-0 text-muted" autoComplete="off" disabled />
                                </div>

                                <div className="col-lg-6 mb-3" hidden>
                                    <label className="form-label fw-bold">Ulanyjy belgisi</label>
                                    <input name='checkIn' value={booking.userId} onChange={handleChange} type="number" className="form-control rounded-0 text-muted" autoComplete="off" disabled />
                                </div>

                                <div className="col-lg-12 mb-3">
                                    <label className="form-label fw-bold">Tassyklamak</label>
                                    <select name='check' onChange={handleChange} className="form-select">
                                        <option defaultChecked>Sayla</option>
                                        <option value="1">Tassykla</option>
                                    </select>
                                </div>

                                <div className='d-grid mt-3'>
                                    <button onClick={handleClick} type="submit" className="btn btn-primary btn-green-not-hover">üýgetmek</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminBookingEdit