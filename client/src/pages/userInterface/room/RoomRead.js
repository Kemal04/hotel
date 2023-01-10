import React, { useContext, useEffect, useState } from 'react'
import '@splidejs/react-splide/css';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import { Link, useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { ThemeContext } from '../../../context/ThemeContext';

const RoomRead = () => {

    const { darkMode } = useContext(ThemeContext)

    const option = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        paginations: true,
        autoplay: true,
    };

    const [room, setRoom] = useState("")

    const location = useLocation();

    const roomId = location.pathname.split("/")[2];

    useEffect(() => {
        axios.get(`http://localhost:3001/api/rooms/${roomId}`).then((res) => {
            setRoom(res.data.room)
        }).catch((err) => {
            toast.error(err.message)
        })
    }, [roomId])

    return (
        <div className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}>
            <div className='container py-5'>
                <div className='row'>
                    <div className='col-xl-8'>
                        <Splide options={option} hasTrack={false} className="mb-5">
                            <SplideTrack className='row'>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/1.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit: "cover" }} />
                                </SplideSlide>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/2.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit: "cover" }} />
                                </SplideSlide>
                                <SplideSlide className='col-xl-12'>
                                    <img src="/img/cards/room/3.jpg" alt="" className='img-fluid w-100' style={{ height: "500px", objectFit: "cover" }} />
                                </SplideSlide>
                            </SplideTrack>
                        </Splide>
                        <div className='row border p-4' style={{ fontWeight: "500" }}>
                            <div className='col-xl-3 d-flex flex-column align-items-center border-end'>
                                <div style={{ color: "#afb4bf" }}>Size :</div>
                                <div>{room.size} m<sup>2</sup></div>
                            </div>
                            <div className='col-xl-3 d-flex flex-column align-items-center border-end'>
                                <div style={{ color: "#afb4bf" }}>Capacity :</div>
                                <div>{room.capacity} adamdan ybarat</div>
                            </div>
                            <div className='col-xl-3 d-flex flex-column align-items-center border-end'>
                                <div style={{ color: "#afb4bf" }}>Bed :</div>
                                <div>Kings Bed</div>
                            </div>
                            <div className='col-xl-3 d-flex flex-column align-items-center'>
                                <div style={{ color: "#afb4bf" }}>Serwisler :</div>
                                <div>Wifi, television...</div>
                            </div>
                        </div>
                        <div className='row mt-4'>
                            <div className='col-xl-12 p-0 lh-lg' style={{ color: "#636a76" }}>
                                If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their unformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.
                            </div>
                            <div className='col-xl-12 my-3 p-0'>
                                <ul className='ul lh-lg p-0' style={{ color: "#636a76" }}>
                                    <li className='li'> Mauris molestie lectus in irdiet auctor.</li>
                                    <li className='li'> Dictum purus at blandit molestie.</li>
                                    <li className='li'> Neque non fermentum suscipit.</li>
                                    <li className='li'> Donec id dui ac massa malesuada.</li>
                                    <li className='li'> In sit amet sapien quis orci maximus.</li>
                                    <li className='li'> Vestibulum rutrum diam vel eros tristique.</li>
                                </ul>
                            </div>
                            <div className='col-xl-12 p-0 lh-lg' style={{ color: "#636a76" }}>
                                If you live in New York City or travel to and from New York City a lot, you know all about the traffic there. Getting places is often next to impossible, even with the gazillion yellow cabs. If you’re like me you often look with envy at those shiny limousines with their unformed drivers and wish you could sit in one. Well, you can. New York limo service is more affordable than you think, whether it’s for Newark airport transportation, LaGuardia airport transportation, or to drive wherever you wish to go.
                            </div>
                        </div>
                        <div className='row my-5 align-items-center'>
                            <div className='col-xl-12 p-0 h4'>
                                Room Services
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center my-4'>
                                <img src="/img/icons/air.png" alt="Air" className='img-fluid me-3' />
                                <div>Air Conditioning</div>
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center my-4'>
                                <img src="/img/icons/drinks.png" alt="Air" className='img-fluid me-3' />
                                <div>Free drinks</div>
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center my-4'>
                                <img src="/img/icons/plate.png" alt="Air" className='img-fluid me-3' />
                                <div>Restaurant quality</div>
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center mt-4'>
                                <img src="/img/icons/tv.png" alt="Air" className='img-fluid me-3' />
                                <div>Cable TV</div>
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center mt-4'>
                                <img src="/img/icons/wifi.png" alt="Air" className='img-fluid me-3' />
                                <div>Unlimited Wifi</div>
                            </div>
                            <div className='col-xl-4 p-0 d-flex align-items-center mt-4'>
                                <img src="/img/icons/contact.png" alt="Air" className='img-fluid me-3' />
                                <div>Service 24/24</div>
                            </div>
                        </div>
                        <div className='row my-5 align-items-center'>
                            <div className='col-xl-12 p-0 h4'>
                                Room Review
                            </div>
                            <div className='col-xl-12 p-0 mt-5'>
                                <div className='row'>
                                    <div className='col-xl-2 border-end'>
                                        <img src="/img/icons/user-1.jpg" alt="User" className='rounded-circle' style={{ width: "100px" }} />
                                    </div>
                                    <div className='col-xl-10'>
                                        <div className='row justify-content-between align-items-center'>
                                            <div className='col-xl-3'>
                                                <div className='mb-2 small text-secondary'>27 Aug 2019</div>
                                                <div className='mb-2 text-blue h6'>Brandon Kelley</div>
                                            </div>  
                                            <div className='col-xl-3 text-end'>
                                                5 5 5 5
                                            </div>
                                        </div>
                                        <div>
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-xl-8'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomRead