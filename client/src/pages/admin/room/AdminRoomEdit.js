import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAPI } from '../../../context/FetchContext'

const AdminRoomEdit = () => {

    const { roomtypes } = useAPI()

    const [room, setRoom] = useState({
        roomTypeId: "",
        roomNum: "",
        price: "",
        capacity: "",
        size: "",
    })

    const navigate = useNavigate()
    const location = useLocation();

    const roomId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setRoom((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/rooms/edit/${roomId}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        }).then((res) => {
            setRoom(res.data.room)
        }).catch((res) => {
            toast.error(res.response.data.error)
            navigate(`/${res.response.status}`)
        })

    }, [roomId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!room.roomTypeId) {
            toast.error("Otagyň görnüşini saýlaň")
        }
        else if (!room.roomNum) {
            toast.error("Adyny ýazyň")
        }
        else if (!room.price) {
            toast.error("Bahasyny ýazyň")
        }
        else if (!room.capacity) {
            toast.error("Adam sanyny ýazyň")
        }
        else if (!room.size) {
            toast.error("Tutýan meýdanyny ýazyň")
        }
        else {
            await axios.post(`http://localhost:3001/api/rooms/edit/${roomId}`, room, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/otaglar")
                }).catch((res) => {
                    toast.error(res.response.data.error)
                    navigate(`/${res.response.status}`)
                })
        }
    }

    return (
        <>
            <div className="hold-transition sidebar-mini layout-fixed">
                <div className="wrapper">
                    <AdminNavbar />
                    <AdminSidebar />
                    <div className="content-wrapper" style={{ paddingTop: "70px" }}>
                        <div className='content'>
                            <div className='container'>
                                <div className='row justify-content-center'>
                                    <div className='col-lg-8'>
                                        <div className='my-5 py-5'>
                                            <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                                                Otag üýgetmek
                                            </div>
                                            <form className='row'>

                                                <div className="col-lg-12 mb-3">
                                                    <select name='roomTypeId' onChange={handleChange} className="form-select">
                                                        <option defaultValue>Otagyň gornusini sayla</option>
                                                        {roomtypes.map(roomtype => (
                                                            <option key={roomtype.id} value={roomtype.id}>{roomtype.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Ady</label>
                                                    <input name='roomNum' value={room.roomNum} onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Bahasy</label>
                                                    <div className="input-group mb-3">
                                                        <input name='price' value={room.price} onChange={handleChange} type="number" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">TMT</span>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Adam Sany</label>
                                                    <input name='capacity' value={room.capacity} onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Tutýan Meýdany</label>
                                                    <div className="input-group mb-3">
                                                        <input name='size' value={room.size} onChange={handleChange} type="number" className="form-control rounded-0" aria-describedby="basic-addon1" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">ft</span>
                                                    </div>
                                                </div>

                                                <div className='d-grid mt-3'>
                                                    <button onClick={handleClick} type="submit" className="btn btn-primary">Üýgetmek</button>
                                                </div>

                                            </form>
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

export default AdminRoomEdit