import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProfileBooking = () => {

    let { id } = useParams();
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/${id}`).then((res) => {
            setUser(res.data.user);
        });
    }, [id]);


    const [booking, setBooking] = useState([]);

    useEffect(() => {
        const fetchBooking = async () => {
            try {
                const res = await axios.get("http://localhost:3001/api/bookings/user?userId=" + id)
                setBooking(res.data.booking)
            } catch (err) {
                console.log(err)
            }
        }
        fetchBooking()
    }, [id])

    return (
        <>
            <div className='banner-fixed d-flex align-items-center'>
                <div className='container'>
                    <div className='row'>
                        {/* <div className='col-lg-12 text-center text-white h2'>
                            {user.name}
                        </div> */}
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ marginTop: "-50px" }}>
                <div className='row justify-content-center'>
                    <div className='w-75'>
                        <div className='card border-0 shadow px-5'>
                            <div className='d-flex justify-content-center'>
                                <img src="/img/icons/user-1.jpg" alt="" className='rounded-circle' style={{ width: "150px", marginTop: "-70px" }} />
                            </div>
                            <div className='mt-4 h2 text-center'>
                                {user.name}
                            </div>
                            <div className='mt-1 small text-center'>
                                {user.email}
                            </div>
                            <div className='row justify-content-center mt-4 mb-5'>
                                <div className="col-lg-8 col-md-8">
                                    <div className='row'>
                                        {booking.sort((a, b) => a.timeM > b.timeM ? 1 : -1).map(room => (
                                            room.chek
                                                ?
                                                <div key={room.room.id} className='col-lg-6'>
                                                    <div className="card mb-5 border-0 shadow rounded-0 me-3">
                                                        <img src={room.room.img} className="img-fluid" alt={room.room.name} />
                                                        <div className="card-body">
                                                            <div className='d-flex justify-content-between'>
                                                                <h5 className="card-title">№ {room.room.name} otag</h5>
                                                            </div>
                                                            <p className="card-text text-green mb-4">
                                                                <span className='h4'>{room.room.price}<sup>TMT</sup></span>
                                                                <span className='h6 small' style={{ fontWeight: "500", color: "#afb4bf" }}> / Günlük</span>
                                                            </p>
                                                            <div className='row justify-content-between align-items-center mb-3'>
                                                                <div className='col-lg-6'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Meýdany:</div>
                                                                    <div>{room.room.size} m<sup>2</sup></div>
                                                                </div>
                                                                <div className='col-lg-6 text-end'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Adam sany:</div>
                                                                    <div>{room.room.capacity} adam</div>
                                                                </div>
                                                            </div>
                                                            <div className='row justify-content-between align-items-center mb-3'>
                                                                <div className='col-lg-6'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Şypahanasy:</div>
                                                                    <div> 23</div>
                                                                </div>
                                                                <div className='col-lg-6 text-end'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Halandy:</div>
                                                                    <div> 21</div>
                                                                </div>
                                                            </div>
                                                            <div className='row justify-content-between align-items-center mb-5'>
                                                                <div className='col-lg-12'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Giriş wagtyň:</div>
                                                                    {new Date(room.checkIn).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })}
                                                                </div>
                                                                <div className='col-lg-12 mt-3'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Çykyş wagtyň:</div>
                                                                    {new Date(room.checkOut).toLocaleDateString(undefined, { year: "numeric", month: "long", day: "numeric", hour: "numeric", minute: "numeric", second: "numeric", })}
                                                                </div>
                                                                <div className='col-lg-12 mt-3'>
                                                                    <div style={{ fontWeight: "500", color: "#afb4bf" }}>Telefon belgisi:</div>
                                                                    <div>+993 {room.phoneNumber}</div>
                                                                </div>
                                                            </div>
                                                            <div className='d-grid'>
                                                                <div className='btn btn-sm btn-green disabled'>Bronlanan</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                :
                                                <div className='text-center display-3 mt-5'>Bronlanan Otagynyz Yok</div>

                                        ))}
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

export default ProfileBooking