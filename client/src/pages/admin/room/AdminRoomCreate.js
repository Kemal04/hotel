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

    
    const [img, setImg] = useState('')

    // console.log(img);

    const handleChange = (e) => {
        setRoom((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()


        const formData = new FormData()
        formData.append('img', img)
        formData.append('roomTypeId', room.roomTypeId)
        formData.append('roomNum', room.roomNum)
        formData.append('price', room.price)
        formData.append('capacity', room.capacity)
        formData.append('size', room.size)

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
        else if (!img) {
            toast.error("Surat yok")
        }


        else {
            await axios.post("http://localhost:3001/api/rooms/create", formData,  {
                headers: {
                    "Content-Type": "multipart/form-data",
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
                                                Otag goşmak
                                            </div>
                                            <form className='row' encType='multipart/form-data'>

                                                <div className="col-lg-12 mb-3">
                                                    <select name='roomTypeId' className="form-select" onChange={handleChange}>
                                                        <option defaultValue>Otag görnüşini sayla</option>
                                                        {roomtypes.map(roomtype => (
                                                            <option key={roomtype.id} value={roomtype.id}>{roomtype.name}</option>
                                                        ))}
                                                    </select>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň belgisi</label>
                                                    <input name='roomNum' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň bahasy</label>
                                                    <div className="input-group mb-3">
                                                        <input name='price' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">TMT</span>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň adam sany</label>
                                                    <input name='capacity' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                </div>

                                                <div className="col-lg-6 mb-3">
                                                    <label className="form-label fw-bold">Otagyň tutýan meýdany</label>
                                                    <div className="input-group mb-3">
                                                        <input name='size' onChange={handleChange} type="number" className="form-control rounded-0" autoComplete="off" />
                                                        <span className="input-group-text rounded-0" id="basic-addon1">m <sup>2</sup></span>
                                                    </div>
                                                </div>

                                                <div className="col-lg-12 mb-3">
                                                    <label className="form-label fw-bold">Otagyň Suraty</label>
                                                    <div className="input-group mb-3">
                                                        <input name='img' onChange={(e)=>setImg(e.target.files[0])} type="file" className="form-control rounded-0" autoComplete="off" />
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