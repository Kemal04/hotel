import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'
import BannerImg from "../../../components/banner/BannerImg"

const Rooms = () => {

    const { darkMode } = useContext(ThemeContext)

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


    function onSelectionChange(e) {
        const sortDirection = e.target.value;
        const copyArray = [...rooms]; // create a new array & not mutate state

        copyArray.sort((a, b) => {
            return sortDirection === "0" ? a.id - b.id : b.id - a.id;
        });
        setRooms(copyArray); //re-render
    }
    return (
        <>
            <BannerImg name="Otaglar" />
            <div className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}>
                <div className='container py-5'>
                    <div className='row align-items-start'>
                        <div className='col-xl-8 mb-3'>
                            <div className='row'>
                                {rooms.map((room) => (
                                    <div className='col-xl-12' key={room.id}>
                                        <div className='card border-0 my-4' style={{ backgroundColor: "transparent", boxShadow: 'none' }}>
                                            <div className='row align-items-center'>
                                                <div className='col-xl-6'>
                                                    <img src="/img/cards/room/1.jpg" alt="Room" className='img-fluid rounded-3' />
                                                </div>
                                                <div className='col-xl-6'>
                                                    <div className='h2'>№ {room.roomNum}</div>
                                                    <div className='my-3'>
                                                        <span className='h4 text-blue'>{room.price} <small>TMT</small></span>
                                                        <span style={{ color: '#afb4bf' }}> / Gün</span>
                                                    </div>
                                                    <div className='row'>
                                                        <div className='col-xl-6 d-flex flex-column mb-4 mt-4 h6'>
                                                            <span className='mb-2' style={{ color: '#afb4bf' }}>Meýdany:</span>
                                                            <span>{room.size} m<sup>2</sup></span>
                                                        </div>
                                                        <div className='col-xl-6 d-flex flex-column mb-4 mt-4 h6'>
                                                            <span className='mb-2' style={{ color: '#afb4bf' }}>Adam Sany:</span>
                                                            <span>Iň köp adam {room.capacity}</span>
                                                        </div>
                                                        <div className='col-xl-6 d-flex flex-column mb-4 h6'>
                                                            <span className='mb-2' style={{ color: '#afb4bf' }}>Görnüşi:</span>
                                                            <span>"{room.roomType.name}"</span>
                                                        </div>
                                                        <div className='col-xl-6 d-flex flex-column mb-4 h6'>
                                                            <span className='mb-2' style={{ color: '#afb4bf' }}>Hyzmatlar:</span>
                                                            <span>Wifi, Telewizor ...</span>
                                                        </div>
                                                    </div>
                                                    <div className='mt-4'>
                                                        <Link to={`/otag/${room.id}`} className='text-blue text-decoration-none' style={{ fontWeight: "500" }}>View Detail &rarr;</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                }
                            </div>
                        </div>

                        <div className='col-xl-4'>
                            <div className='row'>
                                <div className='col-xl-12'>
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Filter</label>
                                    <div className='row g-0'>
                                        <div className='col-xl-12'>
                                            <select className="form-select" onChange={onSelectionChange}>
                                                <option selected>Open this select menu</option>
                                                <option value={0}>Asc</option>
                                                <option value={1}>Desc</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-6 mt-4'>
                                    <label className="form-label">Adult</label>
                                    <select className="form-select rounded-0">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                    </select>
                                </div>
                                <div className='col-xl-6 mt-4'>
                                    <label className="form-label">Children</label>
                                    <select className="form-select rounded-0">
                                        <option value="1">01</option>
                                        <option value="2">02</option>
                                        <option value="3">03</option>
                                    </select>
                                </div>
                                <div className='col-xl-12 mt-4'>
                                    <label className="form-label">Price</label>
                                    <input type="number" className="form-control rounded-0 py-2 px-3" placeholder='Price' />
                                </div>
                                <div className='col-xl-12 d-grid mt-5'>
                                    <button className='btn btn-primary rounded-5'>Gozle</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rooms