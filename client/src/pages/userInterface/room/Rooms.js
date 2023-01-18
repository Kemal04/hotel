import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'
import BannerImg from "../../../components/banner/BannerImg"
import { useAPI } from '../../../context/FetchContext'

const Rooms = () => {

    const { darkMode } = useContext(ThemeContext)

    const { rooms, setRooms } = useAPI()

    function onSelectionChange(e) {
        const sortDirection = e.target.value;
        const roomsSort = [...rooms];

        roomsSort.sort((a, b) => {
            return sortDirection === "asc" ? a.id - b.id : null
        });

        roomsSort.sort((a, b) => {
            return sortDirection === "desc" ? b.id - a.id : null
        });

        roomsSort.sort((a, b) => {
            return sortDirection === "expensive" ? b.price - a.price : null
        });

        roomsSort.sort((a, b) => {
            return sortDirection === "cheap" ? a.price - b.price : null
        });

        roomsSort.sort((a, b) => {
            return sortDirection === "manyUser" ? b.capacity - a.capacity : null
        });

        roomsSort.sort((a, b) => {
            return sortDirection === "fewUser" ? a.capacity - b.capacity : null
        });

        setRooms(roomsSort);
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
                                    <select className="form-select rounded-0" onChange={onSelectionChange}>
                                        <option value="asc">Koneler</option>
                                        <option value="desc">Tazeler</option>
                                        <option value="expensive">Gymmatlar</option>
                                        <option value="cheap">Arzanlar</option>
                                        <option value="manyUser">Kop Adamly</option>
                                        <option value="fewUser">Az Adamly</option>
                                    </select>
                                </div>
                                <div className='col-xl-12 mt-5'>
                                    
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