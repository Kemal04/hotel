import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../context/ThemeContext'
import BannerImg from "../../../components/banner/BannerImg"
import Filter from '../../../components/filter/Filter'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRoomTypes } from '../../../redux/slices/roomTypes'
import { getAllRooms } from '../../../redux/slices/rooms'

const Rooms = () => {

    const { darkMode } = useContext(ThemeContext)

    const dispatch = useDispatch()

    const { roomTypes } = useSelector(state => state.roomTypes)
    useEffect(() => {
        dispatch(getAllRoomTypes())
    }, [dispatch])

    const { rooms } = useSelector(state => state.rooms)
    useEffect(() => {
        dispatch(getAllRooms())
    }, [dispatch])

    // function onSelectionChange(e) {
    //     const sortDirection = e.target.value;
    //     const roomsSort = [...rooms];

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "asc" ? a.id - b.id : null
    //     });

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "desc" ? b.id - a.id : null
    //     });

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "expensive" ? b.price - a.price : null
    //     });

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "cheap" ? a.price - b.price : null
    //     });

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "manyUser" ? b.capacity - a.capacity : null
    //     });

    //     roomsSort.sort((a, b) => {
    //         return sortDirection === "fewUser" ? a.capacity - b.capacity : null
    //     });

    //     setRooms(roomsSort);
    // }

    const [item, setItem] = useState(rooms)

    useEffect(() => {
        const fetchAllRooms = async () => {
            try {
                const res = await axios.get('http://localhost:3001/api/rooms/')
                setItem(res.data.rooms)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllRooms()
    }, [])

    const roomType = [...new Set(roomTypes.map((Val) => Val.name))];

    const roomCapacity = [...new Set(rooms.map((Val) => Val.capacity))];

    const filterItem = (value) => {
        const newItem = rooms.filter((newVal) => {
            return newVal.roomType.name === value
        });
        setItem(newItem);
    };

    const filterCapacity = (value) => {
        const newItem = rooms.filter((newVal) => {
            return newVal.capacity === value
        });
        setItem(newItem);
    };

    return (
        <>
            <BannerImg name="Otaglar" />
            <div className={darkMode ? "bg-dark text-white" : "bg-white text-dark"}>
                <div className='container py-5'>
                    <div className='row align-items-start justify-content-center'>
                        <div className='col-xl-2'>
                            <Filter
                                filterItem={filterItem}
                                filterCapacity={filterCapacity}
                                roomType={roomType}
                                roomCapacity={roomCapacity}
                                setItem={setItem}
                                item={item}
                                rooms={rooms}
                            />
                        </div>

                        <div className='col-xl-8 mb-3'>
                            <div className='row'>
                                {

                                    item.map((room, index) => (
                                        <div className='col-xl-12' key={index}>
                                            <div className='card border-0 my-4' style={{ backgroundColor: "transparent", boxShadow: 'none' }}>
                                                <div className='row align-items-center'>
                                                    <div className='col-xl-6'>
                                                        <img src={room.img ? `http://localhost:3001/img/${room.img}` : '/img/cards/room/1.jpg'} alt="Room" className='img-fluid rounded-3' />
                                                    </div>
                                                    <div className='col-xl-6'>
                                                        <div className='h2 mt-3'>№ {room.roomNum}</div>
                                                        <div className='my-3'>
                                                            <span className='h4 text-blue'>{room.price} <small>TMT</small></span>
                                                            <span style={{ color: '#afb4bf' }}> / Gün</span>
                                                        </div>
                                                        <div className='row'>
                                                            <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex flex-column mb-4 mt-4 h6'>
                                                                <span className='mb-2' style={{ color: '#afb4bf' }}>Meýdany:</span>
                                                                <span>{room.size} m<sup>2</sup></span>
                                                            </div>
                                                            <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex flex-column mb-4 mt-4 h6'>
                                                                <span className='mb-2' style={{ color: '#afb4bf' }}>Adam sany:</span>
                                                                <span>Iň köp {room.capacity} adam</span>
                                                            </div>
                                                            <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex flex-column mb-4 h6'>
                                                                <span className='mb-2' style={{ color: '#afb4bf' }}>Görnüşi:</span>
                                                                <span>"{room.roomType.name}"</span>
                                                            </div>
                                                            <div className='col-xl-6 col-lg-6 col-md-6 col-6 d-flex flex-column mb-4 h6'>
                                                                <span className='mb-2' style={{ color: '#afb4bf' }}>Hyzmatlary:</span>
                                                                <span>Wifi, Telewizor ...</span>
                                                            </div>
                                                        </div>
                                                        <div className='mt-4'>
                                                            <Link to={`/otag/${room.id}`} className='text-blue text-decoration-none' style={{ fontWeight: "500" }}>Maglumatlary gör &rarr;</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Rooms