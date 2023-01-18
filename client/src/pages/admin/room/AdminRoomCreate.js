import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import { useAPI } from '../../../context/FetchContext'

const AdminRoomCreate = () => {

    const { roomtypes } = useAPI()

    const [room, setRoom] = useState({
        roomTypeId: "",
        roomNum: "",
        price: "",
        capacity: "",
        size: "",
    })

    const handleChange = (e) => {
        setRoom((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

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
            await axios.post("http://localhost:3001/api/rooms/create", room, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/otaglar")
                    window.location.reload()
                }).catch((res) => {
                    toast.error(res.response.data.error)
                    navigate(`/${res.response.status}`);
                });
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
                                                Otag Goşmak
                                            </div>
                                            <form className='row'>

                                                <div className="col-lg-12 mb-3">
                                                    <select name='roomTypeId' className="form-select" onChange={handleChange}>
                                                        <option defaultValue>Sypahana sayla</option>
                                                        {roomtypes.map(roomtype => (
                                                            <option key={roomtype.id} value={roomtype.id}>{roomtype.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Ady</label>
                                                    <input name='roomNum' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Bahasy</label>
                                                    <div className="input-group mb-3">
                                                        <input name='price' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">TMT</span>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Adam Sany</label>
                                                    <input name='capacity' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Tutýan Meýdany</label>
                                                    <div className="input-group mb-3">
                                                        <input name='size' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">ft</span>
                                                    </div>
                                                </div>

                                                <div className='d-grid mt-3'>
                                                    <button onClick={handleClick} type="submit" className="btn btn-primary">Goşmak</button>
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

export default AdminRoomCreate