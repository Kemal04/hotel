import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../../context/ThemeContext';

const ProfileEdit = () => {

    const { darkMode } = useContext(ThemeContext)

    let { id } = useParams();
    const [user, setUser] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/${id}`).then((res) => {
            setUser(res.data.user);
        });
    }, [id]);

    const navigate = useNavigate()

    const [eUser, setEUser] = useState({
        surname: "",
        phoneNum: "",
        address: "",
    })

    const handleChange = (e) => {
        setEUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        axios.get(`http://localhost:3001/api/users/edit/${id}`, {
            headers: {
                accessToken: localStorage.getItem("accessToken"),
            },
        })
            .then((res) => {
                setEUser(res.data.user)
            }).catch((error) => {
                toast.error(error.message)
            })

    }, [id])

    const handleClick = async (e) => {
        e.preventDefault()

        if (!eUser.surname) {
            toast.error("Familyanyzy yazyn")
        }
        else if (!eUser.phoneNum) {
            toast.error("Telefon belginizi yazyn")
        }
        else if (!eUser.address) {
            toast.error("Adresinizi yazyn")
        }
        else {
            await axios.post(`http://localhost:3001/api/users/edit/${id}`, eUser, {
                headers: {
                    accessToken: localStorage.getItem("accessToken"),
                },
            })
                .then((res) => {
                    toast.success(res.data.success)
                    navigate(`/ulanyjy-profili/${id}`)
                }).catch((error) => {
                    toast.error(error.message)
                });
        }
    }

    return (
        <div className={darkMode ? "bg-dark" : "bg-white"}>
            <div className='banner-fixed d-flex align-items-center'></div>
            <div className='container-fluid' style={{ marginTop: "-50px" }}>
                <div className='row justify-content-center'>
                    <div className='w-75'>
                        <div className={`card border-0 px-5 ${darkMode ? "bg-dark shadow-lg" : "bg-white shadow"}`}>
                            <div className='d-flex justify-content-center'>
                                <img src="/img/icons/user-1.jpg" alt="" className='rounded-circle' style={{ width: "150px", marginTop: "-70px" }} />
                            </div>
                            <div className='mt-4 h2 text-center'>
                                {user.name}
                            </div>
                            <div className='mt-1 small text-center'>
                                {user.email}
                            </div>
                            <div className='row justify-content-center mt-4 mb-5'>
                                <div className='w-50'>
                                    <div className="card-body">
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Doly Adym</h6>
                                            </div>
                                            <div className={`col-sm-8 ${darkMode ? "text-white" : "text-secondary"}`}>
                                                {user.name}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Familýam</h6>
                                            </div>
                                            <div className={`col-sm-8 ${darkMode ? "text-white" : "text-secondary"}`}>
                                                <input value={eUser.surname ? eUser.surname : ""} onChange={handleChange} type="text" name='surname' className='form-control' />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">E-mail adresim</h6>
                                            </div>
                                            <div className={`col-sm-8 ${darkMode ? "text-white" : "text-secondary"}`}>
                                                {user.email}
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Telefon belgim</h6>
                                            </div>
                                            <div className={`col-sm-8 d-flex align-items-center ${darkMode ? "text-white" : "text-secondary"}`}>
                                                +993 <input value={eUser.phoneNum ? eUser.phoneNum : ""} onChange={handleChange} type="number" name='phoneNum' className='form-control ms-2' />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row justify-content-between align-items-center">
                                            <div className="col-sm-4">
                                                <h6 className="mb-0">Adresim</h6>
                                            </div>
                                            <div className={`col-sm-8 ${darkMode ? "text-white" : "text-secondary"}`}>
                                                <input value={eUser.address ? eUser.address : ""} onChange={handleChange} type="text" name='address' className='form-control' />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mt-5">
                                            <div className="col-sm-12 d-grid">
                                                <button onClick={handleClick} className="btn btn-primary">Düzeltmek</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileEdit