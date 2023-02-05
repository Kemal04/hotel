import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { creatRoomType } from '../../../redux/slices/roomTypes'

const AdminRoomTypeCreate = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [roomType, setRoomType] = useState({
        name: "",
    })

    const handleChange = (e) => {
        setRoomType((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleClick = async (e) => {
        e.preventDefault()

        if (!roomType.name) {
            toast.error("Adyny yazyn")
        }
        else {
            dispatch(creatRoomType(roomType))
            navigate("/admin/otag-gornusleri")
        }
    }

    return (
        <>
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
        </>
    )
}

export default AdminRoomTypeCreate