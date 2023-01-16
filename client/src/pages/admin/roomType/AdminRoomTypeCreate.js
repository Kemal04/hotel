import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import AdminNavbar from '../../../components/navbar/AdminNavbar'
import AdminSidebar from '../../../components/sidebar/AdminSidebar'

const AdminRoomTypeCreate = () => {

    const [roomType, setRoomType] = useState({
        name: "",
    })

    const handleChange = (e) => {
        setRoomType((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()

        if (!roomType.name) {
            toast.error("Adyny yazyn")
        }
        else {
            await axios.post("http://localhost:3001/api/roomtypes/create", roomType)
                .then((res) => {
                    toast.success(res.data.success)
                    navigate("/admin/otag-gornusleri")
                    window.location.reload()
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
                                                Otag Gornusleri Goşmak
                                            </div>
                                            <form className='row'>

                                                <div className="col-lg-12 mb-3">
                                                    <label className="form-label fw-bold">Ady</label>
                                                    <input name='name' onChange={handleChange} type="text" className="form-control rounded-0" autoComplete="off" />
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

export default AdminRoomTypeCreate