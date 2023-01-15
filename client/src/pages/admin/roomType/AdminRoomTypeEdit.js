import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'
import { toast } from 'react-toastify'
import axios from 'axios'

const AdminRoomTypeEdit = () => {

    const [roomType, setRoomType] = useState({
        name: "",
    })

    const navigate = useNavigate()
    const location = useLocation();

    const roomTypeId = location.pathname.split("/")[3];

    const handleChange = (e) => {
        setRoomType((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/roomtypes/edit/${roomTypeId}`).then((res) => {
            setRoomType(res.data.roomtype)
        }).catch((err) => {
            console.log(err.message)
        })
    }, [roomTypeId])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!roomType.name) {
            toast.error("Adyny yazyn")
        }
        else {
            await axios.post(`http://localhost:3001/api/roomtypes/edit/${roomTypeId}`, roomType)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/otag-gornusleri")
                }).catch((error) => {
                    toast.error(error.message)
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
                                    <div className='col-lg-6'>
                                        <div className='my-5 py-5'>
                                            <div className='d-flex justify-content-center aling-items-center h2 mb-5'>
                                                Otag Gornusini üýgetmek
                                            </div>
                                            <form className='row'>

                                                <div className="col-lg-12 mb-3">
                                                    <label className="form-label fw-bold">Ady</label>
                                                    <input name='name' value={roomType.name} onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
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

export default AdminRoomTypeEdit